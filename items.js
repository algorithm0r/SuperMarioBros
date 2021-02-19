class Coin {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);

        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 97, 16, 16, 4, 0.1, 0, false, true);
    };

    update() {
       
    };

    drawMinimap(ctx, mmX, mmY) {

    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
    };
};

class CoinPop {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.camera.addCoin();

        this.velocity = -480;

        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 112, 16, 16, 4, 0.1, 0, false, true);
    };

    update() {
        const FALL_ACC = 2025;

        this.velocity += FALL_ACC * this.game.clockTick;
        this.y += this.game.clockTick * this.velocity * PARAMS.SCALE;

        if (this.velocity > 400) {
            this.removeFromWorld = true;
            this.game.addEntity(new Score(this.game, this.x, this.y + PARAMS.BLOCKWIDTH / 2, 200));
        }
    };

    drawMinimap(ctx, mmX, mmY) {
    }

   draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
    };
};

class Score {
    constructor(game, x, y, score) {
        Object.assign(this, { game, x, y, score });

        this.game.camera.score += this.score;

        this.velocity = -2 * PARAMS.BITWIDTH;
        this.elapsed = 0;
    };

    update() {
        this.elapsed += this.game.clockTick;
        if (this.elapsed > 1) this.removeFromWorld = true;

        this.y += this.game.clockTick * this.velocity * PARAMS.SCALE;
    };

    drawMinimap(ctx, mmX, mmY) {
    }

   draw(ctx) {
        ctx.font = PARAMS.BLOCKWIDTH / 4 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";
        ctx.fillText(this.score, this.x + (this.score < 1000 ? PARAMS.BLOCKWIDTH / 8 : 0) - this.game.camera.x, this.y);
    };
};

class Mushroom {
    constructor(game, x, y, brick, type) {
        Object.assign(this, { game, x, y, brick, type });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/items.png");

        this.velocity = { x: 0, y: -PARAMS.BLOCKWIDTH };

        this.emerging = true;

        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {
        if (this.emerging) {
            this.y += this.game.clockTick * this.velocity.y * PARAMS.SCALE;

            if (this.y < this.BB.top - PARAMS.BLOCKWIDTH) {
                this.emerging = false;
                this.velocity.x = PARAMS.BLOCKWIDTH;
                this.velocity.y = 0;
            }
        } else {
            const FALL_ACC = 1800;

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
                    } else if (entity !== that && !(entity instanceof Flower)) {
                        that.velocity.x = -that.velocity.x;
                    }
                };
            });
        }
    };

    drawMinimap(ctx, mmX, mmY) {
    }

   draw(ctx) {
        if (this.type === 'Growth') {
            ctx.drawImage(this.spritesheet, 184, 34, 16, 16, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        } else {
            ctx.drawImage(this.spritesheet, 214, 34, 16, 16, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        }
        if (this.emerging) this.brick.draw(ctx);

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};

class Flower {
    constructor(game, x, y, brick) {
        Object.assign(this, { game, x, y, brick });
        this.velocity = { x: 0, y: -PARAMS.BLOCKWIDTH };
        this.emerging = true;
        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/items.png"), 4, 64, 16, 16, 4, 0.15, 14, false, true);
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    };

    update() {
        if (this.emerging) {
            this.y += this.game.clockTick * this.velocity.y * PARAMS.SCALE;

            if (this.y < this.BB.top - PARAMS.BLOCKWIDTH) {
                this.emerging = false;
                this.velocity.x = PARAMS.BLOCKWIDTH;
                this.velocity.y = 0;
            }
        } else {
            this.updateBB();
        }
    };

    drawMinimap(ctx, mmX, mmY) {
    }

   draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        if (this.emerging) this.brick.draw(ctx);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};

class Fireball {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.velocity = { x: 5 * PARAMS.BLOCKWIDTH, y: 2 * PARAMS.BLOCKWIDTH };
        if (this.game.camera.mario.facing == 1) {
            this.velocity.x *= -1;
        }
        this.emerging = true;
        this.explode = false;
        this.elapsedTime = 0;
        this.animationTime = 0.05;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/enemies.png");
        //this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/enemies.png"), 26, 150, 8, 8, 1, 0.1, 0, false, true);
        
        // fireball explodes
        this.explodeAnimation = new Animator(this.spritesheet, 360, 184, 16, 16, 3, 0.1, 14, false, false);
        this.updateBB();
    };

    updateBB() {
        if (this.explode) {
            this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        } else {
            this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH / 2, PARAMS.BLOCKWIDTH / 2);
        }
    };

    update() {
        const FALL_ACC = 1000; // 1000/2; // 1800
        this.updateBB();

        if (this.y > 768) {
            this.removeFromWorld = true;
        }

        this.elapsedTime += this.game.clockTick;
        if (this.elapsedTime > 4 * this.animationTime) {
            this.elapsedTime = 0;
        }

        if (!this.explode) {
            this.velocity.y += FALL_ACC * this.game.clockTick;
            this.x += this.game.clockTick * this.velocity.x * PARAMS.SCALE;
            this.y += this.game.clockTick * this.velocity.y * PARAMS.SCALE;
            this.updateBB();
        } else {
            this.velocity.x = 0;
            this.velocity.y = 0;
            //this.velocity.y -= FALL_ACC * this.game.clockTick;
        }

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if ((entity instanceof Ground || entity instanceof Brick || entity instanceof Block)
                    && (that.BB.bottom - that.velocity.y * that.game.clockTick * PARAMS.SCALE) <= entity.BB.top) {
                    that.y = entity.BB.top - PARAMS.BLOCKWIDTH;
                    that.velocity.y = -that.velocity.y / 2;
                    that.updateBB();
                } else if (entity instanceof Tube || entity instanceof SideTube || entity instanceof Block || 
                    (entity instanceof Brick && (that.BB.collide(entity.leftBB) || that.BB.collide(entity.rightBB)))) {
                    that.explode = true;
                } else if ((entity instanceof Goomba || entity instanceof Koopa || entity instanceof PirahnaPlant) && !entity.dead) {
                    entity.dead = true;
                    that.explode = true;
                } 
            };
        });
    };

    drawMinimap(ctx, mmX, mmY) {
    }

   draw(ctx) {
       if (this.explode) {
        this.explodeAnimation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        if (this.explodeAnimation.isDone()) {
            this.removeFromWorld = true;
        }
       } else {
        if (this.elapsedTime < this.animationTime) {
            ctx.drawImage(this.spritesheet, 26, 150, 8, 8, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH/2, PARAMS.BLOCKWIDTH/2);
        } else if (this.elapsedTime < 2 * this.animationTime) {
            ctx.drawImage(this.spritesheet, 26, 165, 8, 8, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH/2, PARAMS.BLOCKWIDTH/2);
        } else if (this.elapsedTime < 3 * this.animationTime) {
            ctx.drawImage(this.spritesheet, 41, 150, 8, 8, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH/2, PARAMS.BLOCKWIDTH/2);
        } else {
            ctx.drawImage(this.spritesheet, 41, 165, 8, 8, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH/2, PARAMS.BLOCKWIDTH/2);
        }

       }

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
}