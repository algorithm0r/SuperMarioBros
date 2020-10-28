class Ground {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });
        console.log(x);
        console.log(y);

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
    };

    update() {
    };

    draw(ctx) {
        let brickCount = this.w / PARAMS.BLOCKWIDTH;
        for (var i = 0; i < brickCount; i++) {
            ctx.drawImage(this.spritesheet, this.x + i * PARAMS.BLOCKWIDTH - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
            ctx.drawImage(this.spritesheet, this.x + i * PARAMS.BLOCKWIDTH - this.game.camera.x, this.y + PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        }
    };
};

class Brick {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 0, 0, 16, 16, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};

class QuestionBox {
    constructor(game, x, y, spritesheet, prize) {
        Object.assign(this, { game, x, y, spritesheet, prize });

        this.animation = new Animator(spritesheet, 4, 4, 16, 16, 3, 0.1, 14, true, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};