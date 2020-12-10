class Goomba {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.velocity = { x: -PARAMS.BITWIDTH, y: PARAMS.BLOCKWIDTH * 3 }; // pixels per second
        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/enemies.png"), 0, 4, 16, 16, 2, 0.2, 14, false, true);
        this.paused = true;
        this.updateBB();
    };

    updateBB() {
            this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {
        const FALL_ACC = 26.25;
        const MAX_FALL = 270;

        if (this.paused && this.game.camera.x > this.x - PARAMS.CANVAS_WIDTH) {
            this.paused = false;
        }
        if (!this.paused) {
            this.velocity.y += FALL_ACC * this.game.clockTick;
            this.x += this.game.clockTick * this.velocity.x * PARAMS.SCALE;
            this.y += this.game.clockTick * this.velocity.y * PARAMS.SCALE;
            this.updateBB();

            var that = this;
            this.game.entities.forEach(function (entity) {
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Mario) {

                    } else if ((entity instanceof Ground || entity instanceof Brick || entity instanceof Block || entity instanceof QuestionBox || entity instanceof Tube)
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
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    };
};