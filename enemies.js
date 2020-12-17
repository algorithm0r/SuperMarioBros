class Goomba {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.velocity = { x: -PARAMS.BITWIDTH, y: PARAMS.BLOCKWIDTH * 3 }; // pixels per second
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemies.png");
        this.animation = new Animator(this.spritesheet, 0, 4, 16, 16, 2, 0.2, 14, false, true);
        this.paused = true;
        this.dead = false;
        this.deadCounter = 0;
        this.flickerFlag = true;
        this.updateBB();
    };

    updateBB() {
            this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {
        const FALL_ACC = 26.25;
        const MAX_FALL = 270;
        if (this.dead) {
            this.deadCounter += this.game.clockTick;
            if (this.deadCounter > 0.5) this.removeFromWorld = true;  // flicker for half a second
        }
        if (this.paused && this.game.camera.x > this.x - PARAMS.CANVAS_WIDTH) {
            this.paused = false;
        }
        if (!this.paused && !this.dead) {
            this.velocity.y += FALL_ACC * this.game.clockTick;
            this.x += this.game.clockTick * this.velocity.x * PARAMS.SCALE;
            this.y += this.game.clockTick * this.velocity.y * PARAMS.SCALE;
            this.updateBB();

            var that = this;
            this.game.entities.forEach(function (entity) {
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Mario) {

                    } else if ((entity instanceof Ground || entity instanceof Brick || entity instanceof Block || entity instanceof Tube)
                        && (that.BB.bottom - that.velocity.y * that.game.clockTick * PARAMS.SCALE) <= entity.BB.top) {
                        that.y = entity.BB.top - PARAMS.BLOCKWIDTH;
                        that.velocity.y = 0;
                        that.updateBB();
                    } else if (entity !== that) {
                        console.log("collide");
                        that.velocity.x = -that.velocity.x;
                    }
                };
            });
       }
     };

    draw(ctx) {
        if (this.dead) {
            if (this.flickerFlag) {
                ctx.drawImage(this.spritesheet,
                    0, 4, //source from sheet
                    16, 16,
                    this.x - this.game.camera.x, this.y + PARAMS.BLOCKWIDTH * 3 / 4,
                    PARAMS.BLOCKWIDTH,
                    PARAMS.BLOCKWIDTH / 4);
            }
            this.flickerFlag = !this.flickerFlag;
        } else {
            this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
        }
    };
};