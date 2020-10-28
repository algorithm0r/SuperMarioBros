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
