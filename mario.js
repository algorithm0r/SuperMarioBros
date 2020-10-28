class Mario {
    constructor(game, x, y, luigi) {
        Object.assign(this, { game, x, y });

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario.png");
        if (luigi) this.spritesheet = ASSET_MANAGER.getAsset("./sprites/luigi.png");

        // mario's state variables
        this.size = 0; // 0 = little, 1 = big, 2 = super, 3 = little invincible, 4 = big invincible, 5 = super invincible
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = skidding, 4 = jumping/falling, 

        this.velocityX = 0;
        this.velocityY = 0;

        this.loadAnimations(this.spritesheet);
    };

    loadAnimations(spritesheet) {
        // idle animation
        this.idleAnim = [];

        this.idleAnim[0] = [];
        this.idleAnim[1] = [];
        this.idleAnim[2] = [];

        // facing right
        this.idleAnim[0][0] = new Animator(spritesheet, 210, 0, 16, 16, 1, 0.33, 14, false, true);
        this.idleAnim[1][0] = new Animator(spritesheet, 209, 52, 16, 32, 1, 0.33, 14, false, true);
        this.idleAnim[2][0] = new Animator(spritesheet, 209, 122, 16, 32, 1, 0.33, 14, false, true);

        // facing left
        this.idleAnim[0][1] = new Animator(spritesheet, 179, 0, 16, 16, 1, 0.33, 14, false, true);
        this.idleAnim[1][1] = new Animator(spritesheet, 180, 52, 16, 32, 1, 0.33, 14, false, true);
        this.idleAnim[2][1] = new Animator(spritesheet, 180, 122, 16, 32, 1, 0.33, 14, false, true);

        // walk animation
        this.walkAnim = [];

        this.walkAnim[0] = [];
        this.walkAnim[1] = [];
        this.walkAnim[2] = [];

        // facing right
        this.walkAnim[0][0] = new Animator(spritesheet, 239, 0, 16, 16, 3, 0.10, 14, false, true);
        this.walkAnim[1][0] = new Animator(spritesheet, 239, 52, 16, 32, 3, 0.10, 14, true, true);
        this.walkAnim[2][0] = new Animator(spritesheet, 237, 122, 16, 32, 3, 0.10, 9, true, true);

        // facing left
        this.walkAnim[0][1] = new Animator(spritesheet, 89, 0, 16, 16, 3, 0.10, 14, true, true);
        this.walkAnim[1][1] = new Animator(spritesheet, 90, 52, 16, 32, 3, 0.10, 14, false, true);
        this.walkAnim[2][1] = new Animator(spritesheet, 102, 122, 16, 32, 3, 0.10, 9, false, true);

        // run animation
        this.runAnim = [];

        this.runAnim[0] = [];
        this.runAnim[1] = [];
        this.runAnim[2] = [];

        // facing right
        this.runAnim[0][0] = new Animator(spritesheet, 239, 0, 16, 16, 3, 0.05, 14, false, true);
        this.runAnim[1][0] = new Animator(spritesheet, 239, 52, 16, 32, 3, 0.05, 14, true, true);
        this.runAnim[2][0] = new Animator(spritesheet, 237, 122, 16, 32, 3, 0.05, 9, true, true);

        // facing left
        this.runAnim[0][1] = new Animator(spritesheet, 89, 0, 16, 16, 3, 0.05, 14, true, true);
        this.runAnim[1][1] = new Animator(spritesheet, 90, 52, 16, 32, 3, 0.05, 14, false, true);
        this.runAnim[2][1] = new Animator(spritesheet, 102, 122, 16, 32, 3, 0.05, 9, false, true);

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
        this.slideAnim[0][0] = new Animator(spritesheet, 59, 0, 16, 16, 1, 0.33, 14, false, true);
        this.slideAnim[1][0] = new Animator(spritesheet, 329, 52, 16, 32, 1, 0.33, 14, false, true);
        this.slideAnim[2][0] = new Animator(spritesheet, 337, 122, 16, 32, 1, 0.33, 14, false, true);

        // facing left
        this.slideAnim[0][1] = new Animator(spritesheet, 330, 0, 16, 16, 1, 0.33, 14, false, true);
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

        const speedFactor = 2 * PARAMS.SCALE;

        const TICK = this.game.clockTick;

        const MIN_WALK = 4.453125;
        const MAX_WALK = 93.75;
        const MAX_RUN = 153.75;
        const ACC_WALK = 2.2265625;
        const ACC_RUN = 3.33984375;
        const DEC_REL = 3.046875;
        const DEC_SKID = 6.796875;
        const MIN_SKID = 33.75;

        // update velocity

        if (this.game.left) { console.log("left");}

        // ground physics
        if (this.state < 4) { // not jumping
            if (Math.abs(this.velocityX) < MIN_WALK) {  // slower than a walk // starting, stopping or turning around
                this.velocityX = 0;
                this.state = 0;
                if (this.game.left) {
                    this.velocityX -= MIN_WALK;
                }
                if (this.game.right) {
                    this.velocityX += MIN_WALK;
                }
            }
            else if (Math.abs(this.velocityX) >= MIN_WALK) {  // faster than a walk // accelerating or decelerating
                if (this.facing === 0) {
                    if (this.game.right && !this.game.left) {
                        if (this.game.B) {
                            this.velocityX += ACC_RUN * TICK * speedFactor;
                        } else this.velocityX += ACC_WALK * TICK * speedFactor;
                    } else if (this.game.left && !this.game.right) {
                        this.velocityX -= DEC_SKID * TICK * speedFactor;
                        this.state = 3;
                    } else {
                        this.velocityX -= DEC_REL * TICK * speedFactor;
                    }
                }
                if (this.facing === 1) {
                    if (this.game.left && !this.game.right) {
                        if (this.game.B) {
                            this.velocityX -= ACC_RUN * TICK * speedFactor;
                        } else this.velocityX -= ACC_WALK * TICK * speedFactor;
                    } else if (this.game.right && !this.game.left) {
                        this.velocityX += DEC_SKID * TICK * speedFactor;
                        this.state = 3;
                    } else {
                        this.velocityX += DEC_REL * TICK * speedFactor;
                    }
                }
            }

            // max speed calculation
            if (this.velocityX >= MAX_RUN) this.velocityX = MAX_RUN;
            if (this.velocityX <= -MAX_RUN) this.velocityX = -MAX_RUN;
            if (this.velocityX >= MAX_WALK && !this.game.B) this.velocityX = MAX_WALK;
            if (this.velocityX <= -MAX_WALK && !this.game.B) this.velocityX = -MAX_WALK;

        }
        // update position
        this.x += this.velocityX * TICK * speedFactor;
        this.y += this.velocityY * TICK * speedFactor;

        // update state
        if (this.state != 3) {
            if (Math.abs(this.velocityX) > MAX_WALK) this.state = 2;
            else if (Math.abs(this.velocityX) >= MIN_WALK) this.state = 1;
            else this.state = 0;
        }

        if (this.velocityX < 0) this.facing = 1;
        if (this.velocityX > 0) this.facing = 0;


    };

    draw(ctx) {
        if (this.state === 0) {
            this.idleAnim[this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        }

        if (this.state === 1) {
            this.walkAnim[this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        }

        if (this.state === 2) {
            this.runAnim[this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        }

        if (this.state === 3) {
            this.slideAnim[this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        }
    };
};