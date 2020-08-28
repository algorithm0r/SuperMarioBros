class Mario {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });

        // mario's state variables
        this.size = 0; // 0 = little, 1 = big, 2 = super, 3 = little invincible, 4 = big invincible, 5 = super invincible
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping/falling

        this.velocity = 0;

        this.loadAnimations(spritesheet);
    };

    loadAnimations(spritesheet) {
        // idle animation
        this.idleAnim = [];

        this.idleAnim[0] = [];
        this.idleAnim[1] = [];
        this.idleAnim[2] = [];

        // facing right
        this.idleAnim[0][0] = new Animator(spritesheet, 209, 0, 16, 16, 1, 0.33, 14, false, true);
        this.idleAnim[1][0] = new Animator(spritesheet, 209, 52, 16, 32, 1, 0.33, 14, false, true);
        this.idleAnim[2][0] = new Animator(spritesheet, 209, 122, 16, 32, 1, 0.33, 14, false, true);

        // facing left
        this.idleAnim[0][1] = new Animator(spritesheet, 180, 0, 16, 16, 1, 0.33, 14, false, true);
        this.idleAnim[1][1] = new Animator(spritesheet, 180, 52, 16, 32, 1, 0.33, 14, false, true);
        this.idleAnim[2][1] = new Animator(spritesheet, 180, 122, 16, 32, 1, 0.33, 14, false, true);

        // walk animation
        this.walkAnim = [];

        this.walkAnim[0] = [];
        this.walkAnim[1] = [];
        this.walkAnim[2] = [];

        // facing right
        this.walkAnim[0][0] = new Animator(spritesheet, 239, 0, 16, 16, 3, 0.33, 14, false, true);
        this.walkAnim[1][0] = new Animator(spritesheet, 239, 52, 16, 32, 3, 0.33, 14, true, true);
        this.walkAnim[2][0] = new Animator(spritesheet, 237, 122, 16, 32, 3, 0.33, 9, true, true);

        // facing left
        this.walkAnim[0][1] = new Animator(spritesheet, 89, 0, 16, 16, 3, 0.33, 14, true, true);
        this.walkAnim[1][1] = new Animator(spritesheet, 90, 52, 16, 32, 3, 0.33, 14, false, true);
        this.walkAnim[2][1] = new Animator(spritesheet, 102, 122, 16, 32, 3, 0.33, 9, false, true);

        // jump animation
        this.jumpAnim = [];

        this.jumpAnim[0] = [];
        this.jumpAnim[1] = [];
        this.jumpAnim[2] = [];

        // facing right
        this.jumpAnim[0][0] = new Animator(spritesheet, 359, 0, 16, 16, 1, 0.33, 14, false, true);
        this.jumpAnim[1][0] = new Animator(spritesheet, 359, 52, 16, 32, 1, 0.33, 14, true, true);
        this.jumpAnim[2][0] = new Animator(spritesheet, 362, 122, 16, 32, 1, 0.33, 9, true, true);

        // facing left
        this.jumpAnim[0][1] = new Animator(spritesheet, 29, 0, 16, 16, 1, 0.33, 14, true, true);
        this.jumpAnim[1][1] = new Animator(spritesheet, 30, 52, 16, 32, 1, 0.33, 14, false, true);
        this.jumpAnim[2][1] = new Animator(spritesheet, 27, 122, 16, 32, 1, 0.33, 9, false, true);

        // slide animation
        this.slideAnim = [];

        this.slideAnim[0] = [];
        this.slideAnim[1] = [];
        this.slideAnim[2] = [];

        // facing right
        this.slideAnim[0][0] = new Animator(spritesheet, 60, 0, 16, 16, 1, 0.33, 14, false, true);
        this.slideAnim[1][0] = new Animator(spritesheet, 329, 52, 16, 32, 1, 0.33, 14, false, true);
        this.slideAnim[2][0] = new Animator(spritesheet, 337, 122, 16, 32, 1, 0.33, 14, false, true);

        // facing left
        this.slideAnim[0][1] = new Animator(spritesheet, 331, 0, 16, 16, 1, 0.33, 14, false, true);
        this.slideAnim[1][1] = new Animator(spritesheet, 60, 52, 16, 32, 1, 0.33, 14, false, true);
        this.slideAnim[2][1] = new Animator(spritesheet, 52, 122, 16, 32, 1, 0.33, 14, false, true);

        // duck animation
        this.duckAnim = [];

        this.duckAnim[0] = [];
        this.duckAnim[1] = [];
        this.duckAnim[2] = [];

        // facing right
        this.duckAnim[0][0] = new Animator(spritesheet, 209, 0, 16, 16, 1, 0.33, 14, false, true);
        this.duckAnim[1][0] = new Animator(spritesheet, 389, 48, 16, 32, 1, 0.33, 14, false, true);
        this.duckAnim[2][0] = new Animator(spritesheet, 389, 118, 16, 32, 1, 0.33, 14, false, true);

        // facing left
        this.duckAnim[0][1] = new Animator(spritesheet, 180, 0, 16, 16, 1, 0.33, 14, false, true);
        this.duckAnim[1][1] = new Animator(spritesheet, 0, 48, 16, 32, 1, 0.33, 14, false, true);
        this.duckAnim[2][1] = new Animator(spritesheet, 0, 118, 16, 32, 1, 0.33, 14, false, true);
    };

    update() {
        // update velocity
        // update position


    };

    draw(ctx) {
        this.idleAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y + 300, 2);
        this.idleAnim[1][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y + 300, 2);
        this.idleAnim[2][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y + 300, 2);

        this.idleAnim[0][1].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y + 450, 2);
        this.idleAnim[1][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y + 450, 2);
        this.idleAnim[2][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y + 450, 2);

        this.walkAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 2);
        this.walkAnim[1][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y, 2);
        this.walkAnim[2][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y, 2);

        this.walkAnim[0][1].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y + 150, 2);
        this.walkAnim[1][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y + 150, 2);
        this.walkAnim[2][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y + 150, 2);

        this.slideAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 300, this.y, 2);
        this.slideAnim[1][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 400, this.y, 2);
        this.slideAnim[2][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 500, this.y, 2);

        this.slideAnim[0][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 300, this.y + 150, 2);
        this.slideAnim[1][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 400, this.y + 150, 2);
        this.slideAnim[2][1].drawFrame(this.game.clockTick, this.game.ctx, this.x + 500, this.y + 150, 2);
    };
};