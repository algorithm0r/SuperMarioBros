__author__ =  "Douglas Johnston"

import json
import math
import ntpath
import argparse
from os import truncate
import re
import sys

def main():
    """
    Converts a Tiled JSON file into a more usable file by finding all of the object layers.
    It assumes that the name of the object layer is the same as the object
    How to use: Run the file using 'python convert_tiled.py (PATH TO LEVEL FILE)'
    """
    parser = argparse.ArgumentParser(description='Converts a Tiled JSON file into a more usable file by finding all of the object layers. It assumes that the name of the object layer is the same as the object How to use: Run the file using \'python convert_tiled.py (PATH TO LEVEL FILE)\'')
    parser.add_argument('filepath', help="The filepath of the Tiled JSON including the filename")
    parser.add_argument('-fp', '--filepath', help="The filepath of the Tiled JSON including the filename")
    parser.add_argument('-o', '--overwrite', action='store_true', help="Overwrites the file")
    parser.add_argument('-js', '--javascript', action='store_true', help="Saves the file to a JavaScript file instead of a JSON file")
    parser.add_argument('-i', '--indent', type=int, default=4, help="The ammount to indent the JSON")
    parser.add_argument('-wts', '--widthtosize', action='store_true', help="Replaces the width and height parameters to one size parameter using the blockwidth (default: 16), assumes that if the width of an object is less than the blockwidth, then the size is 1")
    parser.add_argument('-bw', '--blockwidth', type=int, help="The blockwidth to calculate the size parameter")

    args = parser.parse_args()

    if args.filepath is None and len(sys.argv) > 1:
        path = sys.argv[1]
    else:
        path = args.filepath

    if path is None or path in ['-fp', '--filepath', '-o', '--overwrite', '-js', '--javascript']:
        path = input("Enter the path including the filename: ")

    if args.blockwidth is None and args.widthtosize:
        args.blockwidth = 16
    elif args.blockwidth is not None:
        args.widthtosize = True


    file_name = ntpath.split(path)
    objects = {}
    with open(path, 'r+') as file:
        level_data = json.load(file)
        for layer in level_data["layers"]:
            if layer['type'] == "objectgroup":
                objects[layer['name']] = []
                for obj in layer['objects']:
                    if args.widthtosize:
                        objects[layer['name']].append({
                            'x': obj['x'],
                            'y': obj['y'],
                            'size': calculate_size(obj['width'], args.blockwidth)
                        })
                    else:
                        objects[layer['name']].append({
                            'x': obj['x'],
                            'y': obj['y'],
                            'width': obj['width'],
                            'height': obj['height']
                        })
    file.close()
    if args.javascript:
        extension = '.js'
    else:
        extension = '.json'
    if args.overwrite:
        out_file = open(path.replace('.json', extension), 'w')
    else:
        out_file = open(file_name[0][2:] + 'CONVERTED' + extension, 'w')
    out_file.write(re.sub(r'(?<!: )"(\S*?)"', '\\1', json.dumps(objects, indent=args.indent)).strip())
    out_file.close()

def calculate_size(width, block_width):
    if width < block_width:
        size = 1
    else:
        size = round(width / block_width)
    
    return size


if __name__ == "__main__":
    main()