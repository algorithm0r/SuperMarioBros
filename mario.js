class Mario {
    constructor(game, x, y, luigi) {
        Object.assign(this, { game, x, y });

        this.game.mario = this;

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario.png");
        if (luigi) this.spritesheet = ASSET_MANAGER.getAsset("./sprites/luigi.png");

        // mario's state variables
        this.size = 0; // 0 = little, 1 = big, 2 = super, 3 = little invincible, 4 = big invincible, 5 = super invincible
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = skidding, 4 = jumping/falling, 

        this.velocity = { x: 0, y: 0 };
        this.fallAcc = 562.5;

        this.updateBB();

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

    updateBB() {
        if (this.size === 0 || this.size === 3) {
            this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        }
        else {
            this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2);
        }
    };

    update() {

        const TICK = this.game.clockTick;

        // I used this page to approximate my constants
        // https://web.archive.org/web/20130807122227/http://i276.photobucket.com/albums/kk21/jdaster64/smb_playerphysics.png
        // I converted these values from hex and into units of pixels and seconds.
        
        const MIN_WALK = 4.453125;
        const MAX_WALK = 93.75;
        const MAX_RUN = 153.75;
        const ACC_WALK = 133.59375;
        const ACC_RUN = 200.390625;
        const DEC_REL = 182.8125;
        const DEC_SKID = 365.625;
        const MIN_SKID = 33.75;

        const STOP_FALL = 1575;
        const WALK_FALL = 1800;
        const RUN_FALL = 2025;
        const STOP_FALL_A = 450;
        const WALK_FALL_A = 421.875;
        const RUN_FALL_A = 562.5;

        const MAX_FALL = 270;

        // update velocity

        if (this.state < 4) { // not jumping
            // ground physics
            if (Math.abs(this.velocity.x) < MIN_WALK) {  // slower than a walk // starting, stopping or turning around
                this.velocity.x = 0;
                this.state = 0;
                if (this.game.left) {
                    this.velocity.x -= MIN_WALK;
                }
                if (this.game.right) {
                    this.velocity.x += MIN_WALK;
                }
            }
            else if (Math.abs(this.velocity.x) >= MIN_WALK) {  // faster than a walk // accelerating or decelerating
                if (this.facing === 0) {
                    if (this.game.right && !this.game.left) {
                        if (this.game.B) {
                            this.velocity.x += ACC_RUN * TICK;
                        } else this.velocity.x += ACC_WALK * TICK;
                    } else if (this.game.left && !this.game.right) {
                        this.velocity.x -= DEC_SKID * TICK;
                        this.state = 3;
                    } else {
                        this.velocity.x -= DEC_REL * TICK;
                    }
                }
                if (this.facing === 1) {
                    if (this.game.left && !this.game.right) {
                        if (this.game.B) {
                            this.velocity.x -= ACC_RUN * TICK;
                        } else this.velocity.x -= ACC_WALK * TICK;
                    } else if (this.game.right && !this.game.left) {
                        this.velocity.x += DEC_SKID * TICK;
                        this.state = 3;
                    } else {
                        this.velocity.x += DEC_REL * TICK;
                    }
                }
            }

            this.velocity.y += this.fallAcc * TICK;

            if (this.game.A) { // jump
                if (Math.abs(this.velocity.x) < 16) {
                    this.velocity.y = -240;
                    this.fallAcc = STOP_FALL;
                }
                else if (Math.abs(this.velocity.x) < 40) {
                    this.velocity.y = -240;
                    this.fallAcc = WALK_FALL;
                }
                else {
                    this.velocity.y = -300;
                    this.fallAcc = RUN_FALL;
                }
                this.state = 4;
            }
        } else {
            // air physics
            // vertical physics
            if (this.velocity.y < 0 && this.game.A) { // holding A while jumping jumps higher
                if (this.fallAcc === STOP_FALL) this.velocity.y -= (STOP_FALL - STOP_FALL_A) * TICK;
                if (this.fallAcc === WALK_FALL) this.velocity.y -= (WALK_FALL - WALK_FALL_A) * TICK;
                if (this.fallAcc === RUN_FALL) this.velocity.y -= (RUN_FALL - RUN_FALL_A) * TICK;
            }
            this.velocity.y += this.fallAcc * TICK;

            // horizontal physics
            if (this.game.right && !this.game.left) {
                if (Math.abs(this.velocity.x) > MAX_WALK) {
                    this.velocity.x += ACC_RUN * TICK;
                } else this.velocity.x += ACC_WALK * TICK;
            } else if (this.game.left && !this.game.right) {
                if (Math.abs(this.velocity.x) > MAX_WALK) {
                    this.velocity.x -= ACC_RUN * TICK;
                } else this.velocity.x -= ACC_WALK * TICK;
            } else {

            }

        }

        // max speed calculation
        if (this.velocity.y >= MAX_FALL) this.velocity.y = MAX_FALL;
        if (this.velocity.y <= -MAX_FALL) this.velocity.y = -MAX_FALL;

        if (this.velocity.x >= MAX_RUN) this.velocity.x = MAX_RUN;
        if (this.velocity.x <= -MAX_RUN) this.velocity.x = -MAX_RUN;
        if (this.velocity.x >= MAX_WALK && !this.game.B) this.velocity.x = MAX_WALK;
        if (this.velocity.x <= -MAX_WALK && !this.game.B) this.velocity.x = -MAX_WALK;


        // update position
        this.x += this.velocity.x * TICK * PARAMS.SCALE;
        this.y += this.velocity.y * TICK * PARAMS.SCALE;
        this.updateBB();

        // collision
        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (that.velocity.y > 0) { // falling
                    if ((entity instanceof Ground || entity instanceof Brick || entity instanceof Block || entity instanceof Tube) // landing
                        && (that.BB.bottom - that.velocity.y * TICK * PARAMS.SCALE) <= entity.BB.top) {
                        if (that.size === 0 || that.size === 3) {
                            that.y = entity.BB.top - PARAMS.BLOCKWIDTH;
                            that.velocity.y === 0;
                        } else {
                            that.y = entity.BB.top - 2 * PARAMS.BLOCKWIDTH;
                            that.velocity.y === 0;
                        }
                        that.state = 0;
                        that.updateBB();
                    }
                    if ((entity instanceof Goomba) // squish Goomba
                        && (that.BB.bottom - that.velocity.y * TICK * PARAMS.SCALE) <= entity.BB.top
                        && !entity.dead) {
                        entity.dead = true;
                        that.velocity.y = -240; // bounce
                    }
                }
                if (that.velocity.y < 0) { // jumping
                    if ((entity instanceof Brick) // hit ceiling
                        && (that.BB.top - that.velocity.y * TICK * PARAMS.SCALE) >= entity.BB.bottom
                        && that.BB.collide(entity.leftBB) && that.BB.collide(entity.rightBB)) {
                        entity.bounce = true;
                        that.velocity.y = 0;
                    }
                }
                if (entity instanceof Brick && that.BB.collide(entity.topBB) && that.BB.collide(entity.bottomBB)) {
                    if (that.game.mario.facing === 0) { // facing right
                        that.x = entity.BB.left - PARAMS.BLOCKWIDTH;
                    } else {
                        that.x = entity.BB.right;
                    }
                    that.velocity.x = 0;
                    that.updateBB();
                }
                if ((entity instanceof Tube || entity instanceof Block || entity instanceof Ground) && that.BB.bottom > entity.BB.top) {
                    if (that.BB.collide(entity.leftBB)) {
                        that.x = entity.BB.left - PARAMS.BLOCKWIDTH;
                    } else {
                        that.x = entity.BB.right;
                    }
                    if (!that.game.right && !that.game.left) {
                        that.velocity.x = 0;
                    } else {
                        that.velocity.x = Math.pow(-1, that.facing) * MIN_WALK;
                    }
                    that.updateBB();
                }
                if (entity instanceof Mushroom && !entity.emerging) {
                    entity.removeFromWorld = true;
                    that.y -= PARAMS.BLOCKWIDTH;
                    that.size = 1;
                    that.game.addEntity(new Score(that.game, that.x, that.y, 1000));
                }
            }
        });


        // update state
        if (this.state < 3) {
            if (Math.abs(this.velocity.x) > MAX_WALK) this.state = 2;
            else if (Math.abs(this.velocity.x) >= MIN_WALK) this.state = 1;
            else this.state = 0;
        }

        if (this.velocity.x < 0) this.facing = 1;
        if (this.velocity.x > 0) this.facing = 0;
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
        if (this.state === 4) {
            this.jumpAnim[this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        }
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};