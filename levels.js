var levelOne = {
    ground: [{ x: 0, y: 14, size: 69 }, { x: 71, y: 14, size: 15 }, { x: 89, y: 14, size: 63 }, { x: 154, y: 14, size: 69 }],
    bighills: [{ x: 0, y: 11.5 }, { x: 48, y: 11.5 }, { x: 95, y: 11.5 }, { x: 143, y: 11.5 }],
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
        { x: 179.5, y: 3, size: 2 }],
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
        { x: 185, y: 6, size: 2 }],
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
    koopas: [{ x: 106, y: 12.5, facing: 1}],
    pirahnaplant : [{ x: 28, y: 12 }],
};

var bonusLevelOne = {
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