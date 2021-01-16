class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;
        this.coins = 0;
        this.lives = 3;

        this.coinAnimation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 160, 8, 8, 4, 0.2, 0, false, true);

        this.minimap = new Minimap(this.game, 1.5 * PARAMS.BLOCKWIDTH, 3.5 * PARAMS.BLOCKWIDTH, 224 * PARAMS.SCALE);

        this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);

        this.loadLevelOne(2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
    };

    addCoin() {
        if (this.coins++ === 100) {
            this.coins = 0;
            this.lives++;
        }
    };
    
    loadLevelOne(x,y) {
        this.game.entities = [];
        this.x = 0;

        let background = new BigHill(this.game, 0, 11.5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Bush(this.game, 11.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Hill(this.game, 16 * PARAMS.BLOCKWIDTH, 12.75 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Bush(this.game, 23.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Cloud(this.game, 8.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Cloud(this.game, 19.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Cloud(this.game, 27.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Cloud(this.game, 36.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);
        background = new Bush(this.game, 41.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);
        background = new BigHill(this.game, 48 * PARAMS.BLOCKWIDTH, 11.5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Cloud(this.game, 56.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Bush(this.game, 59.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Hill(this.game, 64 * PARAMS.BLOCKWIDTH, 12.75 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Cloud(this.game, 67.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Bush(this.game, 71.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Cloud(this.game, 75.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Cloud(this.game, 83.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);
        background = new Bush(this.game, 89.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);
        background = new BigHill(this.game, 95 * PARAMS.BLOCKWIDTH, 11.5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Cloud(this.game, 103.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Bush(this.game, 106.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Hill(this.game, 111 * PARAMS.BLOCKWIDTH, 12.75 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Cloud(this.game, 114.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Bush(this.game, 118.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Cloud(this.game, 122.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Cloud(this.game, 131.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);
        background = new Bush(this.game, 136.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);
        background = new BigHill(this.game, 143 * PARAMS.BLOCKWIDTH, 11.5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Cloud(this.game, 151.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Bush(this.game, 156.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Hill(this.game, 159 * PARAMS.BLOCKWIDTH, 12.75 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(background);
        background = new Cloud(this.game, 162.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Bush(this.game, 166.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(background);
        background = new Cloud(this.game, 170.5 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(background);
        background = new Cloud(this.game, 179.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(background);

        let ground = new Ground(this.game, 0, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 71 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 89 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 63 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 154 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);

        let brick = new Brick(this.game, 20 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 22 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 24 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 77 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 79 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 80 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 81 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 82 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 83 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 84 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 85 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 86 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 87 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 90 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 91 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 92 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 93 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "Coins");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 99 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 100 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "Star");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 117 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 120 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 121 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick)
        brick = new Brick(this.game, 122 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 127 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 128 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 129 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 130 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 167 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 168 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);
        brick = new Brick(this.game, 170 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(brick);

        let tube = new Tube(this.game, 28 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(tube);
        tube = new Tube(this.game, 38 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 2);
        this.game.addEntity(tube);
        tube = new Tube(this.game, 46 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 3);
        this.game.addEntity(tube);
        tube = new Tube(this.game, 57 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 3, true);
        this.game.addEntity(tube);
        tube = new Tube(this.game, 162 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(tube);
        tube = new Tube(this.game, 176 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(tube);

        let box = new Brick(this.game, 16 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 21 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Growth");
        this.game.addEntity(box);
        box = new Brick(this.game, 23 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 22 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 64 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 0, "1up");
        this.game.addEntity(box);
        box = new Brick(this.game, 78 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Growth");
        this.game.addEntity(box);
        box = new Brick(this.game, 93 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 2, "Growth");
        this.game.addEntity(box);
        box = new Brick(this.game, 105 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 108 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 108 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 2, "Growth");
        this.game.addEntity(box);
        box = new Brick(this.game, 111 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 128 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 129 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);
        box = new Brick(this.game, 169 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2, "Coin");
        this.game.addEntity(box);

        let block = new Block(this.game, 133 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 134 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 135 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 136 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 139 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 139 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 139 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 139 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 147 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 148 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 149 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 150 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 154 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 154 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 154 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 154 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 178 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 179 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 180 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 7 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 181 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 182 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 183 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 184 * PARAMS.BLOCKWIDTH, 7 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);
        block = new Block(this.game, 185 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(block);

        let goomba = new Goomba(this.game, 22 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 40 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 51 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 52.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 80 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 82 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 96 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 97.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Koopa(this.game, 106 * PARAMS.BLOCKWIDTH, 12.5 * PARAMS.BLOCKWIDTH, 1);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 113 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 114.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 123 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 124.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 127 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);
        goomba = new Goomba(this.game, 128.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(goomba);

        this.mario.x = x;
        this.mario.y = this.mario.size ? y - PARAMS.BLOCKWIDTH : y;
        this.game.addEntity(this.mario);
    };

    loadBonusLevelOne() {
        this.game.entities = [];
        this.x = 0;

        let ground = new Ground(this.game, 0, 14 * PARAMS.BLOCKWIDTH, 17 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);

        let box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 4 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 7 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 0 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);

        box = new Brick(this.game, 4 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 6 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 7 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 8 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 9 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 10 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);

        box = new Brick(this.game, 4 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 5 * PARAMS.BLOCKWIDTH, 11* PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 6 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 7 * PARAMS.BLOCKWIDTH, 11* PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 8 * PARAMS.BLOCKWIDTH, 11* PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 9 * PARAMS.BLOCKWIDTH, 11* PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 10 * PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);

        box = new Brick(this.game, 4 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 5 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 6 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 7 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 8 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 9 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 10 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);

        box = new Brick(this.game, 4 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 6 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 7 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 8 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 9 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);
        box = new Brick(this.game, 10 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, 1, "None");
        this.game.addEntity(box);

        let coin = new Coin(this.game, 4 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 5 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 6 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 7 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 8 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 9 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 10 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);

        coin = new Coin(this.game, 4 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 5 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 6 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 7 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 8 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 9 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 10 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);

        coin = new Coin(this.game, 5 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 6 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 7 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 8 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);
        coin = new Coin(this.game, 9 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(coin);

        let tube = new Tube(this.game, 15 * PARAMS.BLOCKWIDTH, -1 * PARAMS.BLOCKWIDTH, 14);
        this.game.addEntity(tube);
        tube = new SideTube(this.game, 13 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(tube);

        this.mario.x = 2.5 * PARAMS.BLOCKWIDTH;
        this.mario.y = 0 * PARAMS.BLOCKWIDTH;
        this.mario.state = 4; // falling
        this.game.addEntity(this.mario);
    };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;
    
        if (this.mario.dead && this.mario.y > PARAMS.BLOCKWIDTH * 16) {
            this.mario.dead = false;
            this.loadLevelOne(2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
        };
    };

    draw(ctx) {
        ctx.font = PARAMS.BLOCKWIDTH/2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText((this.score + "").padStart(8,"0"), 1.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("x" + (this.coins < 10 ? "0" : "") + this.coins, 6.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("WORLD", 9 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText("1-1", 9.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("TIME", 12.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText("400", 13 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);

        this.coinAnimation.drawFrame(this.game.clockTick, ctx, 6 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 3);

        if (PARAMS.DEBUG) {
            let xV = "xV=" + Math.floor(this.game.mario.velocity.x);
            let yV = "yV=" + Math.floor(this.game.mario.velocity.y);
            ctx.fillText(xV, 1.5 * PARAMS.BLOCKWIDTH, 2.5 * PARAMS.BLOCKWIDTH);
            ctx.fillText(yV, 1.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);

            ctx.translate(0, -10); // hack to move elements up by 10 pixels instead of adding -10 to all y coordinates below
            ctx.strokeStyle = "White";
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.game.left ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6 * PARAMS.BLOCKWIDTH - 2, 2.5 * PARAMS.BLOCKWIDTH - 2, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("L", 6 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
            ctx.strokeStyle = this.game.down ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("D", 6.5 * PARAMS.BLOCKWIDTH + 2, 3.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.strokeStyle = this.game.up ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH - 4, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("U", 6.5 * PARAMS.BLOCKWIDTH + 2, 2.5 * PARAMS.BLOCKWIDTH - 2);
            ctx.strokeStyle = this.game.right ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(7 * PARAMS.BLOCKWIDTH + 2, 2.5 * PARAMS.BLOCKWIDTH - 2, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("R", 7 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);

            ctx.strokeStyle = this.game.A ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(8.25 * PARAMS.BLOCKWIDTH + 2, 2.75 * PARAMS.BLOCKWIDTH, 0.25 * PARAMS.BLOCKWIDTH + 4, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillText("A", 8 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);
            ctx.strokeStyle = this.game.B ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(9 * PARAMS.BLOCKWIDTH + 2, 2.75 * PARAMS.BLOCKWIDTH, 0.25 * PARAMS.BLOCKWIDTH + 4, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillText("B", 8.75 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);

            ctx.translate(0, 10);
            ctx.strokeStyle = "White";
            ctx.fillStyle = ctx.strokeStyle;

            this.minimap.draw(ctx);
        }
    };
};

class Minimap {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });
    };

    update() {

    };

    draw(ctx) {
        ctx.strokeStyle = "Black";
        ctx.strokeRect(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
        for (var i = 0; i < this.game.entities.length; i++) {
            this.game.entities[i].drawMinimap(ctx, this.x, this.y);
        }
    };
};
