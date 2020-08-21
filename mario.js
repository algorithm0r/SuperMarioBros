class Mario {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });

        // facing right
        this.walkAnim = new Animator(spritesheet, 239, 0, 16, 16, 3, 0.33, 14, false, true);
        this.walkAnimBig = new Animator(spritesheet, 239, 52, 16, 32, 3, 0.33, 14, true, true);
        this.walkAnimSuper = new Animator(spritesheet, 237, 122, 16, 32, 3, 0.33, 9, true, true);

        // facing left
        this.walkAnimLeft = new Animator(spritesheet, 89, 0, 16, 16, 3, 0.33, 14, true, true);
        this.walkAnimBigLeft = new Animator(spritesheet, 90, 52, 16, 32, 3, 0.33, 14, false, true);
        this.walkAnimSuperLeft = new Animator(spritesheet, 102, 122, 16, 32, 3, 0.33, 9, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.walkAnim.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 4);
        this.walkAnimBig.drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y, 4);
        this.walkAnimSuper.drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y, 4);

        this.walkAnimLeft.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y + 75, 4);
        this.walkAnimBigLeft.drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y + 150, 4);
        this.walkAnimSuperLeft.drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y + 150, 4);
    };
};