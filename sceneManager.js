class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.loadLevelOne();
    };

    loadLevelOne() {
        let background = new BigHill(this.game, 0, 11.5 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new BigBush(this.game, 11.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Hill(this.game, 16 * PARAMS.BLOCKWIDTH, 12.75 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Bush(this.game, 23.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Cloud(this.game, 8.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Cloud(this.game, 19.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new BigCloud(this.game, 27.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);


        let ground = new Ground(this.game, 0, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 71 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 88 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 74 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 164 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);

        this.mario = new Mario(gameEngine, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        gameEngine.addEntity(this.mario);

    };

    update() {
        let midpoint = 600 - PARAMS.BLOCKWIDTH / 2; // canvas width is 1200

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;
    };

    draw(ctx) {

    };
};

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

class BigHill { 
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 86, 0, 80, 40, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};

class Hill {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 169, 20, 48, 20, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};

class BigBush {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 220, 24, 64, 16, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};


class Bush {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 288, 24, 32, 20, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};

class BigCloud {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 144, 69, 64, 24, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};


class Cloud {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.animation = new Animator(spritesheet, 211, 69, 32, 24, 1, 0.33, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};
