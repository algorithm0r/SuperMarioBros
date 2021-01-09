class BigHill { 
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tiles.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 86, 0, 80, 40, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 5, PARAMS.BLOCKWIDTH * 2.5);
    };
};

class Hill {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tiles.png");
    };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 169, 20, 48, 20, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 3, PARAMS.BLOCKWIDTH * 1.25);
    };
};

class Bush {
    constructor(game, x, y, size) {
        Object.assign(this, { game, x, y, size });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tiles.png");
   };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 288, 24, 8, 24, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 0.5, PARAMS.BLOCKWIDTH * 1.5);
        let i = 0;
        for (; i < this.size; i++) {
            ctx.drawImage(this.spritesheet, 296, 24, 16, 24, this.x - this.game.camera.x + PARAMS.BLOCKWIDTH * (i + 0.5), this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 1.5);
        }
        ctx.drawImage(this.spritesheet, 312, 24, 8, 24, this.x - this.game.camera.x + PARAMS.BLOCKWIDTH * (i + 0.5), this.y, PARAMS.BLOCKWIDTH * 0.5, PARAMS.BLOCKWIDTH * 1.5);
    };
};

class Cloud {
    constructor(game, x, y, size) {
        Object.assign(this, { game, x, y, size });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tiles.png");
   };

    update() {

    };

    drawMinimap(ctx, mmX, mmY) {
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 211, 69, 8, 24, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH * 0.5, PARAMS.BLOCKWIDTH * 1.5);
        let i = 0;
        for (; i < this.size; i++) {
            ctx.drawImage(this.spritesheet, 219, 69, 16, 24, this.x - this.game.camera.x + PARAMS.BLOCKWIDTH * (i + 0.5), this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 1.5);
        }
        ctx.drawImage(this.spritesheet, 235, 69, 8, 24, this.x - this.game.camera.x + PARAMS.BLOCKWIDTH * (i + 0.5), this.y, PARAMS.BLOCKWIDTH * 0.5, PARAMS.BLOCKWIDTH * 1.5);
    };
};
