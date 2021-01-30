class Goomba {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.velocity = { x: -PARAMS.BITWIDTH, y: 0 }; // pixels per second
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemies.png");
        this.animation = new Animator(this.spritesheet, 0, 4, 16, 16, 2, 0.2, 14, false, true);
        this.paused = true;
        this.dead = false;
        this.deadCounter = 0;
        this.flickerFlag = true;
        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {
        const FALL_ACC = 1800;

        if (this.dead) {
            if (this.deadCounter === 0) this.game.addEntity(new Score(this.game, this.x, this.y, 100));
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
                    if (entity instanceof Mario || entity instanceof Mushroom) {

                    } else if ((entity instanceof Ground || entity instanceof Brick || entity instanceof Block || entity instanceof Tube)
                        && that.lastBB.bottom <= entity.BB.top) {
                        that.y = entity.BB.top - PARAMS.BLOCKWIDTH;
                        that.velocity.y = 0;
                        that.updateBB();
                    } else if (entity !== that) {
                        that.velocity.x = -that.velocity.x;
                    }
                };
            });
       }
     };

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Tan";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE);
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
            if (PARAMS.DEBUG) {
                ctx.strokeStyle = 'Red';
                ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
            }
       }
    };
};

class Koopa {
    constructor(game, x, y, facing) {
        Object.assign(this, { game, x, y, facing });
        this.velocity = { x: Math.pow(-1, this.facing)*PARAMS.BITWIDTH, y: 0 }; // pixels per second
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemies.png");
        this.animations = [];
        this.animations.push(new Animator(this.spritesheet, 210, 0, 16, 24, 2, 0.2, 14, false, true));
        this.animations.push(new Animator(this.spritesheet, 150, 0, 16, 24, 2, 0.2, 14, false, true));
        this.paused = true;
        this.dead = false;
        this.deadCounter = 0;
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, (1 + 7/16) * PARAMS.BLOCKWIDTH);
    };

    update() {
        const FALL_ACC = 1800;

        if (this.dead) {
            if (this.deadCounter === 0) this.game.addEntity(new Score(this.game, this.x, this.y, 100));
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
                        that.y = entity.BB.top - PARAMS.BLOCKWIDTH * (1 + 7 / 16);
                        that.velocity.y = 0;
                        that.updateBB();
                    } else if (entity !== that) {
                        that.velocity.x = -that.velocity.x;
                        that.facing = (that.facing + 1) % 2;
                    }
                };
            });
        }
    };

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "LightGreen";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE * 1.5);
    };

    draw(ctx) {
        if (this.dead) {
            
        } else {
            this.animations[this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
            if (PARAMS.DEBUG) {
                ctx.strokeStyle = 'Red';
                ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
            }
        }
    };
};

class PirahnaPlant {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemies.png");
        this.animations = new Animator(this.spritesheet, 390, 60, 15, 23, 2, 0.17, 15, false, true);
        this.maxHeight = this.y - 64;
        this.minHeight = this.y + 32;
        this.marioClose = false;
        this.emerging = true;
        this.wait = 0;
        this.paused = true;
        this.dead = false;
        this.deadCounter = 0;
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x + 2 * PARAMS.SCALE, this.y + 12 * PARAMS.SCALE, 11 * PARAMS.SCALE, 6 * PARAMS.SCALE);
    };

    update() {
        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity instanceof Mario) {
                // If Mario's x position is within 65 he is too close, else false
                that.marioClose = Math.abs(entity.x - that.x) <= 65 ? true : false;
            };
        });

        if (this.dead) {
            if (this.deadCounter === 0) this.game.addEntity(new Score(this.game, this.x, this.y, 100));
            this.deadCounter += this.game.clockTick;
            if (this.deadCounter > 0.5) this.removeFromWorld = true;  // flicker for half a second
        }

        if (this.paused && this.game.camera.x > this.x - PARAMS.CANVAS_WIDTH) {
            this.paused = false;
        }
        
        if (!this.paused && !this.dead) {
            if (this.emerging) {
                if (this.y != this.maxHeight) {
                    this.y--;
                } else if (this.wait < 90){
                    this.wait++;
                } else {
                    this.emerging = false;
                }
            } else {
                if (this.y != this.minHeight) {
                    this.y++;
                } else if (this.wait > 0) {
                    this.wait--;
                } else if (!this.marioClose) {
                    this.emerging = true;
                }
            }

            this.updateBB();
        }
    };

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "olive";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE * 1.5);
    };

    draw(ctx) {
        if (this.dead) {
            
        } else {
            this.animations.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
            if (PARAMS.DEBUG) {
                ctx.strokeStyle = 'Red';
                ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
            }
        }
    };
};