class WorldOneOne {
    constructor(game, width, mario) {
        Object.assign(this, {game, width, mario});
    };

    loadLevel() {
        this.x = 0;
        
        // Load Enemies first to make sure they do not clip behind background elements
        this.loadEnemies();

        // Load Bricks and Blocks next to make sure they do not clip with the background
        this.loadBricks();
        this.loadBlocks();

        // Load ground and background last so they do not clip with the other entities
        this.loadGround();
        this.loadBackground();
    };

    loadBackground() {
        var bigHills = [
            [0, 11.5],
            [48, 11.5],
            [95, 11.5],
            [143, 11.5],
        ];

        var bushes = [
            [11.5, 13, 3],
            [23.5, 13, 1],
            [41.5, 13, 2],
            [59.5, 13, 3],
            [71.5, 13, 1],
            [89.5, 13, 2],
            [106.5, 13, 3],
            [118.5, 13, 1],
            [136.5, 13, 2],
            [156.5, 13, 1],
            [166.5, 13, 1],   
        ];

        var hills = [
            [16, 12.75],
            [64, 12.75],
            [111, 12.75],
            [159, 12.75],
        ];

        var clouds = [
            [8.5, 4, 1],
            [19.5, 3, 1],
            [27.5, 4, 3],
            [36.5, 3, 2],
            [56.5, 4, 1],
            [67.5, 3, 1],
            [75.5, 4, 3],
            [83.5, 3, 2],
            [103.5, 4, 1],
            [114.5, 3, 1],
            [122.5, 4, 3],
            [131.5, 3, 2],
            [151.5, 4, 1],
            [162.5, 3, 1],
            [170.5, 4, 3],
            [179.5, 3, 2],
            
        ]

        // Add all the background elements to this game 
        bigHills.forEach(bigHill => this.game.addEntity(new BigHill(this.game, bigHill[0] * this.width, bigHill[1] * this.width)));
        bushes.forEach(bush => this.game.addEntity(new Bush(this.game, bush[0] * this.width, bush[1] * this.width, bush[2])));
        hills.forEach(hill => this.game.addEntity(new Hill(this.game, hill[0] * this.width, hill[1] * this.width)));
        clouds.forEach(cloud => this.game.addEntity(new Cloud(this.game, cloud[0] * this.width, cloud[1] * this.width, cloud[2])));
    };

    loadGround() {
        var grounds = [
            [0, 14, 69],
            [71, 14, 15],
            [89, 14, 63],
            [154, 14, 69]
        ]

        grounds.forEach(ground => this.game.addEntity(new Ground(this.game, ground[0] * this.width, ground[1] * this.width, ground[2] * this.width)));
    };

    loadBricks() {
        var bricks = [
            [20, 10, 1, 'None'],
            [22, 10, 1, 'None'],
            [24, 10, 1, 'None'],
            [77, 10, 1, 'None'],
            [79, 10, 1, 'None'],
            [80, 6, 1, 'None'],
            [81, 6, 1, 'None'],
            [82, 6, 1, 'None'],
            [83, 6, 1, 'None'],
            [84, 6, 1, 'None'],
            [85, 6, 1, 'None'],
            [86, 6, 1, 'None'],
            [87, 6, 1, 'None'],
            [88, 6, 1, 'None'],
            [89, 6, 1, 'None'],
            [90, 6, 1, 'None'],
            [91, 6, 1, 'None'],
            [92, 6, 1, 'None'],
            [93, 10, 1, 'Coins'],
            [99, 10, 1, 'None'],
            [100, 10, 1, 'Star'],
            [117, 10, 1, 'None'],
            [120, 6, 1, 'None'],
            [121, 6, 1, 'None'],
            [122, 6, 1, 'None'],
            [127, 6, 1, 'None'],
            [128, 10, 1, 'None'],
            [129, 10, 1, 'None'],
            [130, 6, 1, 'None'],
            [167, 10, 1, 'None'],
            [168, 10, 1, 'None'],
            [170, 10, 1, 'None'],
        ];

        bricks.forEach(brick => this.game.addEntity(new Brick(this.game, brick[0] * this.width, brick[1] * this.width, brick[2], brick[3])));

        // Loads entities in the same order the original fork does
        this.loadTubes();

        bricks = [
            [16, 10, 2, 'Coin'],
            [21, 10, 2, 'Growth'],
            [23, 10, 2, 'Coin'],
            [22, 6, 2, 'Coin'],
            [64, 9, 0, '1up'],
            [78, 10, 2, 'Growth'],
            [93, 6, 2, 'Growth'],
            [105, 10, 2, 'Coin'],
            [108, 10, 2, 'Coin'],
            [108, 6, 2, 'Growth'],
            [111, 10, 2, 'Coin'],
            [128, 6, 2, 'Coin'],
            [129, 6, 2, 'Coin'],
            [169, 10, 2, 'Coin'],            
        ]
        bricks.forEach(brick => this.game.addEntity(new Brick(this.game, brick[0] * this.width, brick[1] * this.width, brick[2], brick[3])));
    };

    loadBlocks() {
        var blocks = [
            [133, 13, 4],
            [134, 12, 3],
            [135, 11, 2],
            [136, 10, 1],
            [139, 13, 4],
            [139, 12, 3],
            [139, 11, 2],
            [139, 10, 1],
            [147, 13, 5],
            [148, 12, 4],
            [149, 11, 3],
            [150, 10, 2],
            [154, 13, 4],
            [154, 12, 3],
            [154, 11, 2],
            [154, 10, 1],
            [178, 13, 9],
            [179, 12, 8],
            [180, 11, 7],
            [181, 10, 6],
            [182, 9, 5],
            [183, 8, 4],
            [184, 7, 3],
            [185, 6, 2],    
        ];

        blocks.forEach(block => this.game.addEntity(new Block(this.game, block[0] * this.width, block[1] * this.width, block[2] * this.width)));
    };

    loadTubes() {
        var tubes = [
            [28, 12, 1],
            [38, 11, 2],
            [46, 10, 3],
            [57, 10, 3],
            [162, 12, 1],
            [176, 12, 1],
        ];

        tubes.forEach(tube => this.game.addEntity(new Tube(this.game, tube[0] * this.width, tube[1] * this.width, tube[2])));
    };

    loadEnemies() {
        var koopas = [
            [12, 12.5, 0],
        ];

        var goombas = [
            [22, 13],
            [40, 13],
            [51, 13],
            [52.5, 13], 
            [80, 5],
            [82, 5],
            [96, 13],
            [97.5, 13],
            [113, 13],
            [114.5, 13],
            [123, 13],
            [124.5, 13],
            [127, 13],
            [128.5, 13],
        ];

        koopas.forEach(koopa => this.game.addEntity(new Koopa(this.game, koopa[0] * this.width, koopa[1] * this.width, koopa[2] * this.width)));
        goombas.forEach(goomba => this.game.addEntity(new Goomba(this.game, goomba[0] * this.width, goomba[1] * this.width)));
    };
}