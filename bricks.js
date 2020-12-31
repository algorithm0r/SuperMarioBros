class Ground {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bricks.png");

        this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH * 2);
        this.leftBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
        this.rightBB = new BoundingBox(this.x + this.w - PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
    };

    update() {
    };

    draw(ctx) {
        let brickCount = this.w / PARAMS.BLOCKWIDTH;
        for (var i = 0; i < brickCount; i++) {
            ctx.drawImage(this.spritesheet,0,0, 16,16, this.x + i * PARAMS.BLOCKWIDTH - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
            ctx.drawImage(this.spritesheet, 0,0,16,16, this.x + i * PARAMS.BLOCKWIDTH - this.game.camera.x, this.y + PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        }
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};

class Brick { // type 0 = invis, 1 = brick, 2 = question, 3 = block
    constructor(game, x, y, type, prize) {
        Object.assign(this, { game, x, y, prize, type });

        this.bounce = false;

        this.velocity = 0;

        this.startTime = 0;

        this.animation = [];

        this.animation.push(null);
        this.animation.push(new Animator(ASSET_MANAGER.getAsset("./sprites/bricks.png"), 16, 0, 16, 16, 1, 0.33, 0, false, true));
        this.animation.push(new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 80, 16, 16, 4, 1/8, 0, false, true));
        this.animation.push(new Animator(ASSET_MANAGER.getAsset("./sprites/bricks.png"), 48, 0, 16, 16, 1, 1, 0, false, true));

        this.BB = new BoundingBox(this.x + PARAMS.BLOCKWIDTH / 8, this.y, PARAMS.BLOCKWIDTH * 3 / 4, PARAMS.BLOCKWIDTH);
        this.leftBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH / 2, PARAMS.BLOCKWIDTH);
        this.rightBB = new BoundingBox(this.x + PARAMS.BLOCKWIDTH / 2, this.y, PARAMS.BLOCKWIDTH / 2, PARAMS.BLOCKWIDTH);
        this.topBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH / 2);
        this.bottomBB = new BoundingBox(this.x, this.y + PARAMS.BLOCKWIDTH / 2, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH / 2);
    };

    update() {
        const FALL_ACC = 562.5;

        this.velocity += FALL_ACC * this.game.clockTick;
        this.y += this.game.clockTick * this.velocity * PARAMS.SCALE;

        if (this.bounce && this.type < 3) {
            this.bounce = false;
            this.velocity = - 80;

            switch (this.prize) {
                case 'Coins':
                    if (this.startTime === 0) this.startTime = Date.now();
                    if (Date.now() - this.startTime < 3000) { 
                        this.game.addEntity(new CoinPop(this.game, this.x, this.BB.top - PARAMS.BLOCKWIDTH));
                        break;
                    }
                case 'Coin':
                    this.game.addEntity(new CoinPop(this.game, this.x, this.BB.top - PARAMS.BLOCKWIDTH));
                    this.type = 3;
                    break;
                case 'Growth':
                    if (this.game.mario.size === 0) {
                        this.game.addEntity(new Mushroom(this.game, this.x, this.BB.top, this, 'Growth'));
                    }
                    this.type = 3;
                    break;
                case '1up':
                    this.game.addEntity(new Mushroom(this.game, this.x, this.BB.top, this, '1up'));
                    this.type = 3;
                    break;
                default:
                    break;
            }
        
        }

        if (this.y > this.BB.top) this.y = this.BB.top;

    };

    draw(ctx) {
        if (this.type > 0) {
            this.animation[this.type].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        }

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};

class Block {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bricks.png");

        this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
        this.leftBB = new BoundingBox(this.x, this.y, this.w / 2, PARAMS.BLOCKWIDTH);
        this.rightBB = new BoundingBox(this.x + this.w / 2, this.y, this.w / 2, PARAMS.BLOCKWIDTH);
    };

    update() {
    };

    draw(ctx) {
        let brickCount = this.w / PARAMS.BLOCKWIDTH;
        for (var i = 0; i < brickCount; i++) {
            ctx.drawImage(this.spritesheet, 64, 0, 16, 16, this.x + i * PARAMS.BLOCKWIDTH - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        }
    };
};

class Tube {
    constructor(game, x, y, size, destination) {
        Object.assign(this, { game, x, y, size, destination });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tiles.png");

        this.BB = new BoundingBox(this.x + PARAMS.BLOCKWIDTH / 8, this.y, PARAMS.BLOCKWIDTH * 2 - PARAMS.BLOCKWIDTH * 2 / 8, PARAMS.BLOCKWIDTH * (size + 1));
        this.leftBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * (size + 1));
        this.rightBB = new BoundingBox(this.x + PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * (size + 1));
    };
    
    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 309, 417, 32, 16, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 2, PARAMS.BLOCKWIDTH);
        let i = 0;
        for (; i < this.size; i++) {
            ctx.drawImage(this.spritesheet, 309, 433.5, 32, 15, this.x - this.game.camera.x, this.y + PARAMS.BLOCKWIDTH * (i + 1), PARAMS.BLOCKWIDTH * 2, PARAMS.BLOCKWIDTH);
        }

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};