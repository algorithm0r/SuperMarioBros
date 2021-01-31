class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;
        this.coins = 0;
        this.lives = 3;

        this.coinAnimation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 160, 8, 8, 4, 0.2, 0, false, true);

        this.minimap = new Minimap(this.game, 1.5 * PARAMS.BLOCKWIDTH, 3.5 * PARAMS.BLOCKWIDTH, 224 * PARAMS.SCALE);

        this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);

        this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
    };

    loadLevel(level, x, y) {
        this.game.entities = [];
        this.x = 0;

        if (level.bighills) {
            for (var i = 0; i < level.bighills.length; i++) {
                let hill = level.bighills[i];
                this.game.addEntity(new BigHill(this.game, hill.x * PARAMS.BLOCKWIDTH, hill.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.hills) {
            for (var i = 0; i < level.hills.length; i++) {
                let hill = level.hills[i];
                this.game.addEntity(new Hill(this.game, hill.x * PARAMS.BLOCKWIDTH, hill.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.bushes) {
            for (var i = 0; i < level.bushes.length; i++) {
                let bush = level.bushes[i];
                this.game.addEntity(new Bush(this.game, bush.x * PARAMS.BLOCKWIDTH, bush.y * PARAMS.BLOCKWIDTH, bush.size));
            }
        }
        if (level.clouds) {
            for (var i = 0; i < level.clouds.length; i++) {
                let cloud = level.clouds[i];
                this.game.addEntity(new Cloud(this.game, cloud.x * PARAMS.BLOCKWIDTH, cloud.y * PARAMS.BLOCKWIDTH, cloud.size));
            }
        }
        if (level.ground) {
            for (var i = 0; i < level.ground.length; i++) {
                let ground = level.ground[i];
                this.game.addEntity(new Ground(this.game, ground.x * PARAMS.BLOCKWIDTH, ground.y * PARAMS.BLOCKWIDTH, ground.size * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.bricks) {
            for (var i = 0; i < level.bricks.length; i++) {
                let brick = level.bricks[i];
                this.game.addEntity(new Brick(this.game, brick.x * PARAMS.BLOCKWIDTH, brick.y * PARAMS.BLOCKWIDTH, brick.type, brick.prize));
            }
        }
        if (level.blocks) {
            for (var i = 0; i < level.blocks.length; i++) {
                let block = level.blocks[i];
                this.game.addEntity(new Block(this.game, block.x * PARAMS.BLOCKWIDTH, block.y * PARAMS.BLOCKWIDTH, block.size * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.tubes) {
            for (var i = 0; i < level.tubes.length; i++) {
                let tube = level.tubes[i];
                if (!tube.side) {
                    this.game.addEntity(new Tube(this.game, tube.x * PARAMS.BLOCKWIDTH, tube.y * PARAMS.BLOCKWIDTH, tube.size, tube.destination, tube.enemyType));
                } else {
                    this.game.addEntity(new SideTube(this.game, tube.x * PARAMS.BLOCKWIDTH, tube.y * PARAMS.BLOCKWIDTH));
                }
            }
        }
        if (level.goombas) {
            for (var i = 0; i < level.goombas.length; i++) {
                let goomba = level.goombas[i];
                this.game.addEntity(new Goomba(this.game, goomba.x * PARAMS.BLOCKWIDTH, goomba.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.koopas) {
            for (var i = 0; i < level.koopas.length; i++) {
                let koopa = level.koopas[i];
                this.game.addEntity(new Koopa(this.game, koopa.x * PARAMS.BLOCKWIDTH, koopa.y * PARAMS.BLOCKWIDTH, koopa.facing));
            }
        }
        if (level.pirahnaplant) {
            for (var i=0; i<level.pirahnaplant.length; i++) {
                let pirahnaplant = level.pirahnaplant[i];
                this.game.addEntity(new PirahnaPlant(this.game, 23 + pirahnaplant.x  * PARAMS.BLOCKWIDTH, pirahnaplant.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.coins) {
            for (var i = 0; i < level.coins.length; i++) {
                let coin = level.coins[i];
                this.game.addEntity(new Coin(this.game, coin.x * PARAMS.BLOCKWIDTH, coin.y * PARAMS.BLOCKWIDTH));
            }
        }
        this.mario.x = x;
        this.mario.y = y;
        this.game.addEntity(this.mario);
    };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;
    
        if (this.mario.dead && this.mario.y > PARAMS.BLOCKWIDTH * 16) {
            this.mario.dead = false;
            this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
        };
    };

    addCoin() {
        if (this.coins++ === 100) {
            this.coins = 0;
            this.lives++;
        }
    };

    draw(ctx) {
        ctx.font = PARAMS.BLOCKWIDTH/2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText((this.score + "").padStart(8,"0"), 1.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("x" + (this.coins < 10 ? "0" : "") + this.coins, 6.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("WORLD", 9 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText("1-1", 9.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("TIME", 12.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText("400", 13 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);

        this.coinAnimation.drawFrame(this.game.clockTick, ctx, 6 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 3);

        if (PARAMS.DEBUG) {
            let xV = "xV=" + Math.floor(this.game.mario.velocity.x);
            let yV = "yV=" + Math.floor(this.game.mario.velocity.y);
            ctx.fillText(xV, 1.5 * PARAMS.BLOCKWIDTH, 2.5 * PARAMS.BLOCKWIDTH);
            ctx.fillText(yV, 1.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);

            ctx.translate(0, -10); // hack to move elements up by 10 pixels instead of adding -10 to all y coordinates below
            ctx.strokeStyle = "White";
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.game.left ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6 * PARAMS.BLOCKWIDTH - 2, 2.5 * PARAMS.BLOCKWIDTH - 2, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("L", 6 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH);
            ctx.strokeStyle = this.game.down ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("D", 6.5 * PARAMS.BLOCKWIDTH + 2, 3.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.strokeStyle = this.game.up ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(6.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH - 4, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("U", 6.5 * PARAMS.BLOCKWIDTH + 2, 2.5 * PARAMS.BLOCKWIDTH - 2);
            ctx.strokeStyle = this.game.right ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.strokeRect(7 * PARAMS.BLOCKWIDTH + 2, 2.5 * PARAMS.BLOCKWIDTH - 2, 0.5 * PARAMS.BLOCKWIDTH + 2, 0.5 * PARAMS.BLOCKWIDTH + 2);
            ctx.fillText("R", 7 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);

            ctx.strokeStyle = this.game.A ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(8.25 * PARAMS.BLOCKWIDTH + 2, 2.75 * PARAMS.BLOCKWIDTH, 0.25 * PARAMS.BLOCKWIDTH + 4, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillText("A", 8 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);
            ctx.strokeStyle = this.game.B ? "White" : "Grey";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(9 * PARAMS.BLOCKWIDTH + 2, 2.75 * PARAMS.BLOCKWIDTH, 0.25 * PARAMS.BLOCKWIDTH + 4, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillText("B", 8.75 * PARAMS.BLOCKWIDTH + 4, 3 * PARAMS.BLOCKWIDTH);

            ctx.translate(0, 10);
            ctx.strokeStyle = "White";
            ctx.fillStyle = ctx.strokeStyle;

            this.minimap.draw(ctx);
        }
    };
};

class Minimap {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });
    };

    update() {

    };

    draw(ctx) {
        ctx.strokeStyle = "Black";
        ctx.strokeRect(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
        for (var i = 0; i < this.game.entities.length; i++) {
            this.game.entities[i].drawMinimap(ctx, this.x, this.y);
        }
    };
};
