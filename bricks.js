class Ground {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bricks.png");

        this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH * 2);
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

class Brick {
    constructor(game, x, y, prize) {
        Object.assign(this, { game, x, y, prize });

        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/bricks.png"), 16, 0, 16, 16, 1, 0.33, 0, false, true);

        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};

class QuestionBox {
    constructor(game, x, y, prize, invisible) {
        Object.assign(this, { game, x, y, prize, invisible });

        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/items.png"), 4, 4, 16, 16, 3, 0.1, 14, true, true);

        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        if (!this.invisible) this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};

class Block {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bricks.png");

        this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
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

        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH * 2, PARAMS.BLOCKWIDTH * (size + 1));
    };
    
    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 309, 417, 32, 16, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 2, PARAMS.BLOCKWIDTH);
        let i = 0;
        for (; i < this.size; i++) {
            ctx.drawImage(this.spritesheet, 309, 433.5, 32, 15, this.x - this.game.camera.x, this.y + PARAMS.BLOCKWIDTH * (i + 1), PARAMS.BLOCKWIDTH * 2, PARAMS.BLOCKWIDTH);
        }
    };
};