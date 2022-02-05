var levelOne = {
    music: "./music/overworld.mp3",
    label: "1-1",
    underground: false,
    ground: [{ x: 0, y: 14, size: 69 }, { x: 71, y: 14, size: 15 }, { x: 89, y: 14, size: 63 }, { x: 154, y: 14, size: 69 }],
    bighills: [{ x: 0, y: 11.5 }, { x: 48, y: 11.5 }, { x: 95, y: 11.5 }, { x: 143, y: 11.5 }, { x: 189, y: 11.5 }],
    hills: [{ x: 16, y: 12.75 }, { x: 64, y: 12.75 }, { x: 111, y: 12.75 }, { x: 159, y: 12.75 }],
    bushes: [{ x: 11.5, y: 13, size: 3 }, { x: 23.5, y: 13, size: 1 }, { x: 41.5, y: 13, size: 2 },
       { x: 59.5, y: 13, size: 3 }, { x: 71.5, y: 13, size: 1 }, { x: 89.5, y: 13, size: 2 },
        { x: 106.5, y: 13, size: 3 }, { x: 118.5, y: 13, size: 1 }, { x: 136.5, y: 13, size: 2 },
        { x: 156.5, y: 13, size: 1 }, { x: 166.5, y: 13, size: 1 }],
    clouds: [{ x: 8.5, y: 4, size: 1 }, { x: 19.5, y: 3, size: 1 }, { x: 27.5, y: 4, size: 3 },
        { x: 36.5, y: 3, size: 2 }, { x: 56.5, y: 4, size: 1 }, { x: 67.5, y: 3, size: 1 },
        { x: 75.5, y: 4, size: 3 }, { x: 83.5, y: 3, size: 2 }, { x: 103.5, y: 4, size: 1 },
        { x: 114.5, y: 3, size: 1 }, { x: 122.5, y: 4, size: 3 }, { x: 131.5, y: 3, size: 2 },
        { x: 151.5, y: 4, size: 1 }, { x: 162.5, y: 3, size: 1 }, { x: 170.5, y: 4, size: 3 },
        { x: 179.5, y: 3, size: 2 }, { x: 197.5, y: 4, size: 1 }],
    bigcastles: [{ x: 199, y: 3, size: 1 }],
    bricks: [{ x: 20, y: 10, type: 1, prize: "None" },
        { x: 22, y: 10, type: 1, prize: "None" },
        { x: 24, y: 10, type: 1, prize: "None" },
        { x: 77, y: 10, type: 1, prize: "None" },
        { x: 79, y: 10, type: 1, prize: "None" },
        { x: 80, y: 6, type: 1, prize: "None" },
        { x: 81, y: 6, type: 1, prize: "None" },
        { x: 82, y: 6, type: 1, prize: "None" },
        { x: 83, y: 6, type: 1, prize: "None" },
        { x: 84, y: 6, type: 1, prize: "None" },
        { x: 85, y: 6, type: 1, prize: "None" },
        { x: 86, y: 6, type: 1, prize: "None" },
        { x: 87, y: 6, type: 1, prize: "None" },
        { x: 90, y: 6, type: 1, prize: "None" },
        { x: 91, y: 6, type: 1, prize: "None" },
        { x: 92, y: 6, type: 1, prize: "None" },
        { x: 93, y: 10, type: 1, prize: "Coins" },
        { x: 99, y: 10, type: 1, prize: "None" },
        { x: 100, y: 10, type: 1, prize: "Star" },
        { x: 117, y: 10, type: 1, prize: "None" },
        { x: 120, y: 6, type: 1, prize: "None" },
        { x: 121, y: 6, type: 1, prize: "None" },
        { x: 122, y: 6, type: 1, prize: "None" },
        { x: 127, y: 6, type: 1, prize: "None" },
        { x: 128, y: 10, type: 1, prize: "None" },
        { x: 129, y: 10, type: 1, prize: "None" },
        { x: 130, y: 6, type: 1, prize: "None" },
        { x: 167, y: 10, type: 1, prize: "None" },
        { x: 168, y: 10, type: 1, prize: "None" },
        { x: 170, y: 10, type: 1, prize: "None" },
        { x: 16, y: 10, type: 2, prize: "Coin" },
        { x: 21, y: 10, type: 2, prize: "Growth" },
        { x: 23, y: 10, type: 2, prize: "Coin" },
        { x: 22, y: 6, type: 2, prize: "Coin" },
        { x: 64, y: 9, type: 0, prize: "1up" },
        { x: 78, y: 10, type: 2, prize: "Growth" },
        { x: 93, y: 6, type: 2, prize: "Growth" },
        { x: 105, y: 10, type: 2, prize: "Coin" },
        { x: 108, y: 10, type: 2, prize: "Coin" },
        { x: 108, y: 6, type: 2, prize: "Growth" },
        { x: 111, y: 10, type: 2, prize: "Coin" },
        { x: 128, y: 6, type: 2, prize: "Coin" },
        { x: 129, y: 6, type: 2, prize: "Coin" },
        { x: 169, y: 10, type: 2, prize: "Coin" }],
    tubes: [{ x: 28, y: 12, size: 1, destination: false },
        { x: 38, y: 11, size: 2, destination: false },
        { x: 46, y: 10, size: 3, destination: false },
        { x: 57, y: 10, size: 3, destination: true },
        { x: 162, y: 12, size: 1, destination: false },
        { x: 176, y: 12, size: 1, destination: false }],
    flags: [{ x: 195.3, y: 3.55, size: 1 }],
    blocks: [{ x: 133, y: 13, size: 4 },
        { x: 134, y: 12, size: 3 },
        { x: 135, y: 11, size: 2 },
        { x: 136, y: 10, size: 1 },
        { x: 139, y: 10, size: 1 },
        { x: 139, y: 11, size: 2 },
        { x: 139, y: 12, size: 3 },
        { x: 139, y: 13, size: 4 },
        { x: 147, y: 13, size: 5 },
        { x: 148, y: 12, size: 4 },
        { x: 149, y: 11, size: 3 },
        { x: 150, y: 10, size: 2 },
        { x: 154, y: 13, size: 4 },
        { x: 154, y: 12, size: 3 },
        { x: 154, y: 11, size: 2 },
        { x: 154, y: 10, size: 1 },
        { x: 178, y: 13, size: 9 },
        { x: 179, y: 12, size: 8 },
        { x: 180, y: 11, size: 7 },
        { x: 181, y: 10, size: 6 },
        { x: 182, y: 9, size: 5 },
        { x: 183, y: 8, size: 4 },
        { x: 184, y: 7, size: 3 },
        { x: 185, y: 6, size: 2 },
        { x: 195, y: 13, size: 1 }],
    goombas: [{ x: 22, y:13 },
        { x: 40, y: 13 },
        { x: 51, y: 13 },
        { x: 52.5, y: 13 },
        { x: 80, y: 5 },
        { x: 82, y: 5 },
        { x: 96, y: 13 },
        { x: 97.5, y: 13 },
        { x: 113, y: 13 },
        { x: 114.5, y: 13 },
        { x: 123, y: 13 },
        { x: 124.5, y: 13 },
        { x: 127, y: 13 },
        { x: 128.5, y: 13 }],
    koopas: [{ x: 106, y: 12.5, facing: 1}]
};

var bonusLevelOne = {
    music: "./music/underworld.mp3",
    label: "1-1",
    underground: false,
    bricks: [{ x: 0, y: 0, type: 1, prize: "None" },
    { x: 0, y: 1, type: 1, prize: "None" },
    { x: 0, y: 2, type: 1, prize: "None" },
    { x: 0, y: 3, type: 1, prize: "None" },
    { x: 0, y: 4, type: 1, prize: "None" },
    { x: 0, y: 5, type: 1, prize: "None" },
    { x: 0, y: 6, type: 1, prize: "None" },
    { x: 0, y: 7, type: 1, prize: "None" },
    { x: 0, y: 8, type: 1, prize: "None" },
    { x: 0, y: 9, type: 1, prize: "None" },
    { x: 0, y: 10, type: 1, prize: "None" },
    { x: 0, y: 11, type: 1, prize: "None" },
    { x: 0, y: 12, type: 1, prize: "None" },
    { x: 0, y: 13, type: 1, prize: "None" },
    { x: 4, y: 0, type: 1, prize: "None" },
    { x: 5, y: 0, type: 1, prize: "None" },
    { x: 6, y: 0, type: 1, prize: "None" },
    { x: 7, y: 0, type: 1, prize: "None" },
    { x: 8, y: 0, type: 1, prize: "None" },
    { x: 9, y: 0, type: 1, prize: "None" },
    { x: 10, y: 0, type: 1, prize: "None" },
    { x: 4, y: 11, type: 1, prize: "None" },
    { x: 5, y: 11, type: 1, prize: "None" },
    { x: 6, y: 11, type: 1, prize: "None" },
    { x: 7, y: 11, type: 1, prize: "None" },
    { x: 8, y: 11, type: 1, prize: "None" },
    { x: 9, y: 11, type: 1, prize: "None" },
    { x: 10, y: 11, type: 1, prize: "None" },
    { x: 4, y: 12, type: 1, prize: "None" },
    { x: 5, y: 12, type: 1, prize: "None" },
    { x: 6, y: 12, type: 1, prize: "None" },
    { x: 7, y: 12, type: 1, prize: "None" },
    { x: 8, y: 12, type: 1, prize: "None" },
    { x: 9, y: 12, type: 1, prize: "None" },
    { x: 10, y: 12, type: 1, prize: "None" },
    { x: 4, y: 13, type: 1, prize: "None" },
    { x: 5, y: 13, type: 1, prize: "None" },
    { x: 6, y: 13, type: 1, prize: "None" },
    { x: 7, y: 13, type: 1, prize: "None" },
    { x: 8, y: 13, type: 1, prize: "None" },
    { x: 9, y: 13, type: 1, prize: "None" },
    { x: 10, y: 13, type: 1, prize: "None" }],
    tubes: [{ x: 13, y: 12, size: 1, destination: true, side: true },
        { x: 15, y: -1, size: 14, destination: false }],
    coins: [{ x: 4, y: 10 },
        { x: 5, y: 10 },
        { x: 6, y: 10 },
        { x: 7, y: 10 },
        { x: 8, y: 10 },
        { x: 9, y: 10 },
        { x: 10, y: 10 },
        { x: 4, y: 9 },
        { x: 5, y: 9 },
        { x: 6, y: 9 },
        { x: 7, y: 9 },
        { x: 8, y: 9 },
        { x: 9, y: 9 },
        { x: 10, y: 9 },
        { x: 5, y: 8 },
        { x: 6, y: 8 },
        { x: 7, y: 8 },
        { x: 8, y: 8 },
        { x: 9, y: 8 }],
    ground: [{ x: 0, y: 14, size: 34 }]

};

    var levelTwo = {
    underground: true, // NOTE: PLEASE ADD THIS BOOLEAN PROPERTY WHEN TESTING LEVEL 1-2

    ground: [{ x: 0, y: 13, size: 80 }, { x:83, y: 13, size: 37}, {x: 122, y: 13, size: 2},
        {x: 126, y: 13, size: 12}, {x: 145, y: 13, size: 7}, {x: 159, y: 13, size: 32}],
    bricks: [],
    blocks: [{ x: 17, y: 12, size: 1 },
        { x: 19, y: 12, size: 1 }, { x: 19, y: 11, size: 1 },
        { x: 21, y: 12, size: 1 }, { x: 21, y: 11, size: 1 }, { x: 21, y: 10, size: 1 },
        { x: 23, y: 12, size: 1 }, { x: 23, y: 11, size: 1 }, { x: 23, y: 10, size: 1 }, { x: 23, y: 9, size: 1 },
        { x: 25, y: 12, size: 1 }, { x: 25, y: 11, size: 1 }, { x: 25, y: 10, size: 1 }, { x: 25, y: 9, size: 1 },
        { x: 27, y: 12, size: 1 }, { x: 27, y: 11, size: 1 }, { x: 27, y: 10, size: 1 },
        { x: 31, y: 12, size: 1 }, { x: 31, y: 11, size: 1 }, { x: 31, y: 10, size: 1 },
        { x: 33, y: 12, size: 1 }, { x: 33, y: 11, size: 1 },
        { x: 133, y: 12, size: 5 },
        { x: 134, y: 11, size: 4 },
        { x: 135, y: 10, size: 3 },
        { x: 136, y: 9, size: 2 }],
    coins: [{ x: 40, y: 8 }, { x: 45, y: 8 }, { x: 41, y: 5 }, { x: 42, y: 5 }, { x: 43, y: 5 }, { x: 44, y: 5 },
        { x: 58, y: 8 }, { x: 59, y: 8 }, { x: 60, y: 8 }, { x: 61, y: 8 },
        { x: 68, y: 8 },
        { x: 84, y: 5 }, { x: 85, y: 5 }, { x: 86, y: 5 }, { x: 87, y: 5 }, { x: 88, y: 5 }, { x: 89, y: 5 }],
    goombas: [{ x: 16, y:12 }, { x: 17, y:11 },
        { x: 29, y:12 },
        { x: 62, y:12 }, { x: 64, y:12 },
        { x: 73, y:4 }, { x: 76, y:8 }, { x: 77.5, y:8 },
        { x: 99, y:12 }, { x: 100.5, y:12 }, { x: 102, y:12 },
        { x: 113, y:12 },
        { x: 135, y:9 }, { x: 136.5, y:8 }],
    koopas: [{ x: 44, y:11.5, facing: 1}, { x: 45, y:11.5, facing: 1 },
        { x: 59, y:11.5, facing: 1 },
        { x: 146, y:11.5, facing: 1 }],
    tubes: [{ x: 103, y: 10, size: 2, destination: true },
        { x: 109, y: 9, size: 3, destination: false },
        { x: 115, y: 11, size: 1, destination: false },
        { x: 166, y: 8, size: 1, destination: false, side: true},
        { x: 168, y: 2, size: 7, destination: false },
        { x: 178, y: 10, size: 2, destination: false },
        { x: 182, y: 10, size: 2, destination: false },
        { x: 186, y: 10, size: 2, destination: false }],
    lifts: [{ x: 140, y: 7, goingDown: true }, {x: 155, y: 9, goingDown: false }]
};

var bonusLevelTwo = {
    ground: [{ x: 0, y: 11, size: 17 }],
    coins: [{ x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 7, y: 6 }, { x: 8, y: 6 }, { x: 9, y: 6 }, { x: 10, y: 6 }, { x: 11, y: 6 },
        { x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 10 }, { x: 6, y: 10 }, { x: 7, y: 10 }, { x: 8, y: 10 }, { x: 9, y: 10 }, { x: 10, y: 10 }, { x: 11, y: 10 }],
    tubes: [{ x: 13, y: 9, size: 1, destination: true, side: true },
        { x: 15, y: -1, size: 11, destination: false }],
    bricks: [{ x: 0, y: 0, type: 1, prize: "None" },
        { x: 0, y: 1, type: 1, prize: "None" },
        { x: 0, y: 2, type: 1, prize: "None" },
        { x: 0, y: 3, type: 1, prize: "None" },
        { x: 0, y: 4, type: 1, prize: "None" },
        { x: 0, y: 5, type: 1, prize: "None" },
        { x: 0, y: 6, type: 1, prize: "None" },
        { x: 0, y: 7, type: 1, prize: "None" },
        { x: 0, y: 8, type: 1, prize: "None" },
        { x: 0, y: 9, type: 1, prize: "None" },
        { x: 0, y: 10, type: 1, prize: "None" },
        { x: 3, y: 0, type: 1, prize: "None" },
        { x: 4, y: 0, type: 1, prize: "None" },
        { x: 5, y: 0, type: 1, prize: "None" },
        { x: 6, y: 0, type: 1, prize: "None" },
        { x: 7, y: 0, type: 1, prize: "None" },
        { x: 8, y: 0, type: 1, prize: "None" },
        { x: 9, y: 0, type: 1, prize: "None" },
        { x: 10, y: 0, type: 1, prize: "None" },
        { x: 11, y: 0, type: 1, prize: "None" },
        { x: 12, y: 0, type: 1, prize: "None" },
        { x: 13, y: 0, type: 1, prize: "None" },
        { x: 14, y: 0, type: 1, prize: "None" },
        { x: 3, y: 1, type: 1, prize: "None" },
        { x: 4, y: 1, type: 1, prize: "None" },
        { x: 5, y: 1, type: 1, prize: "None" },
        { x: 6, y: 1, type: 1, prize: "None" },
        { x: 7, y: 1, type: 1, prize: "None" },
        { x: 8, y: 1, type: 1, prize: "None" },
        { x: 9, y: 1, type: 1, prize: "None" },
        { x: 10, y: 1, type: 1, prize: "None" },
        { x: 11, y: 1, type: 1, prize: "None" },
        { x: 12, y: 1, type: 1, prize: "None" },
        { x: 13, y: 1, type: 1, prize: "None" },
        { x: 14, y: 1, type: 1, prize: "None" },
        { x: 3, y: 2, type: 1, prize: "None" },
        { x: 4, y: 2, type: 1, prize: "None" },
        { x: 5, y: 2, type: 1, prize: "None" },
        { x: 6, y: 2, type: 1, prize: "None" },
        { x: 7, y: 2, type: 1, prize: "None" },
        { x: 8, y: 2, type: 1, prize: "None" },
        { x: 9, y: 2, type: 1, prize: "None" },
        { x: 10, y: 2, type: 1, prize: "None" },
        { x: 11, y: 2, type: 1, prize: "None" },
        { x: 12, y: 2, type: 1, prize: "None" },
        { x: 13, y: 2, type: 1, prize: "None" },
        { x: 14, y: 2, type: 1, prize: "None" },
        { x: 3, y: 3, type: 1, prize: "None" },
        { x: 4, y: 3, type: 1, prize: "None" },
        { x: 5, y: 3, type: 1, prize: "None" },
        { x: 6, y: 3, type: 1, prize: "None" },
        { x: 7, y: 3, type: 1, prize: "None" },
        { x: 8, y: 3, type: 1, prize: "None" },
        { x: 9, y: 3, type: 1, prize: "None" },
        { x: 10, y: 3, type: 1, prize: "None" },
        { x: 11, y: 3, type: 1, prize: "None" },
        { x: 12, y: 3, type: 1, prize: "None" },
        { x: 13, y: 3, type: 1, prize: "None" },
        { x: 14, y: 3, type: 1, prize: "None" },
        { x: 3, y: 7, type: 1, prize: "None" },
        { x: 4, y: 7, type: 1, prize: "None" },
        { x: 5, y: 7, type: 1, prize: "None" },
        { x: 6, y: 7, type: 1, prize: "None" },
        { x: 7, y: 7, type: 1, prize: "None" },
        { x: 8, y: 7, type: 1, prize: "None" },
        { x: 9, y: 7, type: 1, prize: "None" },
        { x: 10, y: 7, type: 1, prize: "None" },
        { x: 11, y: 7, type: 1, prize: "None" },
        { x: 12, y: 7, type: 1, prize: "Coins" },
        { x: 13, y: 7, type: 1, prize: "None" },
        { x: 14, y: 7, type: 1, prize: "None" },
        { x: 13, y: 4, type: 1, prize: "None" },
        { x: 14, y: 4, type: 1, prize: "None" },
        { x: 13, y: 5, type: 1, prize: "None" },
        { x: 14, y: 5, type: 1, prize: "None" },
        { x: 13, y: 6, type: 1, prize: "None" },
        { x: 14, y: 6, type: 1, prize: "None" },
        { x: 13, y: 8, type: 1, prize: "None" },
        { x: 14, y: 8, type: 1, prize: "None" }]
}

function loadLevel2Bricks(e) {
    for (var i = 0; i < 11; i++) {
        e.push({ x: 0, y: i+2, type: 1, prize: "None"});
    }

    for (var i = 0; i < 83; i++) {
        e.push({ x: i + 6, y: 2, type: 1, prize: "None"});
    }

    e.push({ x: 89, y: 2, type: 1, prize: "1up"});

    for (var i = 0; i < 48; i++) {
        e.push({ x: i + 90, y: 2, type: 1, prize: "None"});
    }

    for (var i = 0; i < 2; i++) {
        e.push({ x: 54, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 55, y : i + 3, type: 1, prize: "None"});

        e.push({ x: 58, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 59, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 60, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 61, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 62, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 63, y : i + 3, type: 1, prize: "None"});

        e.push({ x: 66, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 67, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 68, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 69, y : i + 3, type: 1, prize: "None"});

        e.push({ x: 76, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 77, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 78, y : i + 3, type: 1, prize: "None"});
        e.push({ x: 79, y : i + 3, type: 1, prize: "None"});
    }

    for (var i = 0; i < 5; i++) {
        e.push({ x: 52, y : i + 5, type: 1, prize: "None"});
        e.push({ x: 53, y : i + 5, type: 1, prize: "None"});

        e.push({ x: 62, y : i + 5, type: 1, prize: "None"});
        e.push({ x: 63, y : i + 5, type: 1, prize: "None"});

        e.push({ x: 67, y : i + 5, type: 1, prize: "None"});

        e.push({ x: 72, y : i + 5, type: 1, prize: "None"});
        if(i === 3)
            e.push({ x: 73, y : i + 5, type: 1, prize: "Coins"});
        else
            e.push({ x: 73, y : i + 5, type: 1, prize: "None"});
    }

    e.push({ x: 54, y : 9, type: 1, prize: "None"});
    e.push({ x: 55, y : 9, type: 1, prize: "None"});

    e.push({ x: 58, y : 9, type: 1, prize: "None"});
    e.push({ x: 59, y : 9, type: 1, prize: "None"});
    e.push({ x: 60, y : 9, type: 1, prize: "None"});
    e.push({ x: 61, y : 9, type: 1, prize: "None"});

    e.push({ x: 68, y : 9, type: 1, prize: "None"});
    e.push({ x: 69, y : 9, type: 1, prize: "None"});

    e.push({ x: 76, y : 9, type: 1, prize: "None"});
    e.push({ x: 77, y : 9, type: 1, prize: "None"});
    e.push({ x: 78, y : 9, type: 1, prize: "None"});
    e.push({ x: 79, y : 9, type: 1, prize: "None"});

    e.push({ x: 54, y : 10, type: 1, prize: "None"});
    e.push({ x: 55, y : 10, type: 1, prize: "None"});
    e.push({ x: 54, y : 11, type: 1, prize: "None"});
    e.push({ x: 55, y : 11, type: 1, prize: "None"});

    e.push({ x: 69, y : 8, type: 1, prize: "Growth"});

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 6; j++) {
            e.push({ x: 84 + j, y: 7 + i, type: 1, prize: "None"});
        }
    }

    for (var i = 0; i < 3; i++) {
        e.push({ x: 39, y : 7 + i, type: 1, prize: "None"});

        e.push({ x: 41, y : 7 + i, type: 1, prize: "None"});

        e.push({ x: 44, y : 7 + i, type: 1, prize: "None"});

        if (i === 0)
            e.push({ x: 46, y : 7 + i, type: 1, prize: "Growth"});
        else
            e.push({ x: 46, y : 7 + i, type: 1, prize: "None"});
    }

    e.push({ x: 42, y : 7, type: 1, prize: "None"});
    e.push({ x: 43, y : 7, type: 1, prize: "None"});

    e.push({ x: 40, y : 9, type: 1, prize: "None"});
    e.push({ x: 45, y : 9, type: 1, prize: "None"});

    e.push({ x: 29, y : 8, type: 1, prize: "Coins"});

    e.push({ x: 10, y : 9, type: 2, prize: "Growth"});
    e.push({ x: 11, y : 9, type: 2, prize: "Coin"});
    e.push({ x: 12, y : 9, type: 2, prize: "Coin"});
    e.push({ x: 13, y : 9, type: 2, prize: "Coin"});
    e.push({ x: 14, y : 9, type: 2, prize: "Coin"});

    e.push({ x: 122, y : 10, type: 1, prize: "None"});
    e.push({ x: 123, y : 10, type: 1, prize: "None"});
    e.push({ x: 122, y : 11, type: 1, prize: "None"});
    e.push({ x: 123, y : 11, type: 1, prize: "None"});
    e.push({ x: 122, y : 12, type: 1, prize: "None"});
    e.push({ x: 123, y : 12, type: 1, prize: "None"});

    e.push({ x: 145, y : 8, type: 1, prize: "None"});
    e.push({ x: 146, y : 8, type: 1, prize: "None"});
    e.push({ x: 147, y : 8, type: 1, prize: "None"});
    e.push({ x: 148, y : 8, type: 1, prize: "None"});
    e.push({ x: 149, y : 8, type: 1, prize: "Growth"});

    // after platform
    for (var i = 0; i < 7; i++) {
        e.push({ x: 160 + i, y : 2, type: 1, prize: "None"});
    }

    for (var i = 0; i < 17; i++) {
        e.push({ x: 169 + i, y : 2, type: 1, prize: "None"});
    }

    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            e.push({ x: 169 + i, y : 3 + j, type: 1, prize: "None"});
        }
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 17; j++) {
            e.push({ x: 159 + j, y : 10 + i, type: 1, prize: "None"});
        }
    }

    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 2; j++) {
            e.push({ x: 189 + j, y : 2 + i, type: 1, prize: "None"});
        }
    }
}

loadLevel2Bricks(levelTwo.bricks);

var credits = {
    text: [
    "      2022 Students",
    "• KV",
    "   Merge requests", 
    "• Raz",
    "   Gamepad Support",
    "   Credits",
    " ",
    "      2021 Students",
    "• Seoungdeok Jeon",
    "   Fire Bar",
    "• Albert Lin",
    "   Fire Mario",
    "• Darryl James",
    "   Piranha Plant",
    "• Victor Chau",
    "   Level 1-2",
    "• Daniel Machen",
    "   Koopa Shell",
    "• James Wedum",
    "   Brick Breaking",
    "• Colin Chan/Khue Nguyen",
    "   Palette Switching",
    "• Timmy Roma",
    "   Hammer Bros",
    "• Kyle Oslin",
    "   Moving Platforms",
    " ",
    "• v1.0 - Chris Marriott",
    "• OG Engine - Seth Ladd"
    ]
}