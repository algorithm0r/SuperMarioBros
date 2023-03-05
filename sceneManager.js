class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;
        this.coins = 0;
        this.lives = 3;

        this.gameOver = false;

        this.title = true;
        this.credits = false;
        this.level = null;

        this.menuSelect = {
            mario: false,
            luigi: false,
            credits: false
        }
        this.menuSelectIndex = -10;
        this.creditsLineIndex = 0;
        this.menuButtonTimer = 0.15;
        this.menuButtonCooldown = 0.15;

        this.coinAnimation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 160, 8, 8, 4, 0.2, 0, false, true);

        this.minimap = new Minimap(this.game, 1.5 * PARAMS.BLOCKWIDTH, 3.5 * PARAMS.BLOCKWIDTH, 224 * PARAMS.SCALE);

        this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);

        this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, false, true);

        // NOTE: PLEASE USE THE FOLLOWING LINE TO TEST.
        // this.loadLevel(levelTwo, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, false, true);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level, x, y, transition, title) {
        this.title = title;
        this.level = level;
        this.clearEntities();
        this.x = 0;
        this.underground = level.underground;
        
        if (transition) {
            this.game.addEntity(new TransitionScreen(this.game, level, x, y, title));
        } else {
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
            if (level.bigcastles) {
                for (var i = 0; i < level.bigcastles.length; i++) {
                    let castle = level.bigcastles[i];
                    this.game.addEntity(new BigCastle(this.game, castle.x * PARAMS.BLOCKWIDTH, castle.y * PARAMS.BLOCKWIDTH, castle.size));
                }
            }
            if (level.ground) {
                for (var i = 0; i < level.ground.length; i++) {
                    let ground = level.ground[i];
                    this.game.addEntity(new Ground(this.game, ground.x * PARAMS.BLOCKWIDTH, ground.y * PARAMS.BLOCKWIDTH, ground.size * PARAMS.BLOCKWIDTH, level.underground));
                }
            }
            if (level.bricks) {
                for (var i = 0; i < level.bricks.length; i++) {
                    let brick = level.bricks[i];
                    this.game.addEntity(new Brick(this.game, brick.x * PARAMS.BLOCKWIDTH, brick.y * PARAMS.BLOCKWIDTH, brick.type, brick.prize, level.underground));
                }
            }
            if (level.flags) {
                for (var i = 0; i < level.flags.length; i++) {
                    let flag = level.flags[i];
                    this.game.addEntity(new Flag(this.game, flag.x * PARAMS.BLOCKWIDTH, flag.y * PARAMS.BLOCKWIDTH, flag.size * PARAMS.BLOCKWIDTH));
                }
            }
            if (level.blocks) {
                for (var i = 0; i < level.blocks.length; i++) {
                    let block = level.blocks[i];
                    this.game.addEntity(new Block(this.game, block.x * PARAMS.BLOCKWIDTH, block.y * PARAMS.BLOCKWIDTH, block.size * PARAMS.BLOCKWIDTH, level.underground));
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
            if (level.koopaParatroopaGreen) {
                for (var i = 0; i < level.koopaParatroopaGreen.length; i++) {
                    let koopaParatroopaGreen = level.koopaParatroopaGreen[i];
                    this.game.addEntity(new KoopaParatroopaGreen(this.game, koopaParatroopaGreen.x * PARAMS.BLOCKWIDTH, koopaParatroopaGreen.y * PARAMS.BLOCKWIDTH, koopaParatroopaGreen.facing));
                }
            }
            if (level.koopaParatroopaRed) {
                for (var i = 0; i < level.koopaParatroopaRed.length; i++) {
                    let koopaParatroopaRed = level.koopaParatroopaRed[i];
                    this.game.addEntity(new KoopaParatroopaRed(this.game, koopaParatroopaRed.x * PARAMS.BLOCKWIDTH, koopaParatroopaRed.y * PARAMS.BLOCKWIDTH, koopaParatroopaRed.facing));
                }
            }
            if (level.koopas) {
                for (var i = 0; i < level.koopas.length; i++) {
                    let koopa = level.koopas[i];
                    this.game.addEntity(new Koopa(this.game, koopa.x * PARAMS.BLOCKWIDTH, koopa.y * PARAMS.BLOCKWIDTH, koopa.facing));
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
            this.mario.removeFromWorld = false;
            this.mario.velocity = { x: 0, y: 0 };
            this.mario.state = 4 // mario enters level in falling state;

            if (level.music && !this.title) {
                ASSET_MANAGER.pauseBackgroundMusic();
                ASSET_MANAGER.playAsset(level.music);
            }

            var that = this;
            var mario = false;
            this.game.entities.forEach(function(entity) {
                if(that.mario === entity) mario = true;
            });
            if(!mario) this.game.addEntity(this.mario);

            this.time = 400;
            this.game.camera.paused = false;
        }

        if (level.lifts) {
            for (var i = 0; i < level.lifts.length; i++) {
                let lift = level.lifts[i];
                this.game.addEntity(new Lift(this.game, lift.x * PARAMS.BLOCKWIDTH, lift.y * PARAMS.BLOCKWIDTH, lift.goingDown));
            }
        }
        this.mario.x = x;
        this.mario.y = y;
        //this.game.addEntity(this.mario);

    };

    updateAudio() {
        var mute = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").value;

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);

    };

    update() {
        this.menuButtonTimer += this.game.clockTick;
        if (this.time === 99) {
            ASSET_MANAGER.pauseBackgroundMusic();
            ASSET_MANAGER.playAsset(this.level.hurry_music);
        }
        if (!this.title && !this.transition && !this.paused) {
            if (this.timer === undefined) {
                this.timer = 0;
            } else {
                this.timer += this.game.clockTick;
            }

            if (this.timer > 0.4) {
                this.time -= 1;
                this.timer = undefined;
            }
        }

        // Gamepad/keyboard title/credits menu select
        if (this.credits && (this.game.A || this.game.B)) {
            this.menuSelectIndex = 0;
        } if (!this.credits && this.menuButtonTimer > this.menuButtonCooldown) {
            if (!this.menuSelect.mario && !this.menuSelect.luigi && !this.menuSelect.credits) {
                if (this.game.up || this.game.down) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.mario = true;
                } 
            } else if (this.menuSelect.mario) {
                if (this.game.up) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.mario = false;
                    this.menuSelect.credits = true;
                } else if (this.game.down) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.mario = false;
                    this.menuSelect.luigi = true;
                }
            } else if (this.menuSelect.luigi) {
                if (this.game.up) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.luigi = false;
                    this.menuSelect.mario = true;
                } else if (this.game.down) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.luigi = false;
                    this.menuSelect.credits = true;
                }
            } else if (this.menuSelect.credits) {
                if (this.game.up) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.credits = false;
                    this.menuSelect.luigi = true;
                } else if (this.game.down) {
                    this.menuButtonTimer = 0;
                    this.menuSelect.credits = false;
                    this.menuSelect.mario = true;
                }
            }
            
        }

        // Credits scroll with gamepad/keyboard
        if (this.credits && this.menuButtonTimer > this.menuButtonCooldown) {
            if (this.game.wheel < 0  || this.game.up) {
                if (this.creditsLineIndex <= 0) {
                    this.creditsLineIndex = 0;
                } else {
                    this.creditsLineIndex--;
                }
                this.menuSelectIndex = 0;
                this.menuButtonTimer = 0;
            } 
            else if (this.game.wheel > 0 || this.game.down) {
                if (this.creditsLineIndex >= credits.text.length - 12) {
                    this.creditsLineIndex = credits.text.length - 11;
                } else {
                    this.creditsLineIndex++;
                }
                this.menuSelectIndex = 0;
                this.menuButtonTimer = 0;
            }
        }
        
        // Selecting with mouse overrides gamepad select.
        if (this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 11.5 * PARAMS.BLOCKWIDTH) {
            this.menuSelectIndex = -10;
            this.menuSelect.mario = false;
            this.menuSelect.luigi = false;
            this.menuSelect.credits = false;
        }

        // Gamepad control of debug
        if (this.game.gamepad != null && this.game.gamepad.buttons[8].pressed && this.menuButtonTimer > this.menuButtonCooldown) {
            if (document.getElementById("debug").checked) {
                document.getElementById("debug").checked = false;
            } else {
                document.getElementById("debug").checked = true;
            }
            this.menuButtonTimer = 0;
        }

        // Gamepad control of debug
        if (this.game.gamepad != null && this.game.gamepad.buttons[9].pressed && this.menuButtonTimer > this.menuButtonCooldown) {
            if (document.getElementById("mute").checked) {
                document.getElementById("mute").checked = false;
            } else {
                document.getElementById("mute").checked = true;
            }
            this.menuButtonTimer = 0;
        }

        // Gamepad control of volume slider
        if (this.game.gamepad != null && Math.abs(this.game.gamepad.axes[2]) > 0.3 && this.menuButtonTimer > this.menuButtonCooldown) {
            if (this.game.gamepad.axes[2] > 0.3) {
                document.getElementById("volume").value = parseFloat(document.getElementById("volume").value, 10) + 0.05;
            } 
            if (this.game.gamepad.axes[2] < -0.3) {
                document.getElementById("volume").value -= 0.05;
            }
            this.menuButtonTimer = 0;
        } 

        this.updateAudio();
        PARAMS.DEBUG = document.getElementById("debug").checked;

        if (this.title && !this.credits && (this.game.click || this.game.A) && (this.menuButtonTimer > this.menuButtonCooldown)) {
            if (this.menuSelect.mario || (this.game.click && this.game.click.y > 9 * PARAMS.BLOCKWIDTH && this.game.click.y < 9.5 * PARAMS.BLOCKWIDTH)) {
                this.title = false;
                this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
                this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, true);
            }
            if (this.menuSelect.luigi || (this.game.click && this.game.click.y > 10 * PARAMS.BLOCKWIDTH && this.game.click.y < 10.5 * PARAMS.BLOCKWIDTH)) {
                this.title = false;
                this.mario = new Mario(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, true);
                this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, true);
            }
            if (this.menuSelect.credits || (this.game.click && this.game.click.y > 11 * PARAMS.BLOCKWIDTH && this.game.click.y < 11.5 * PARAMS.BLOCKWIDTH)) {
                    this.credits = true;
                    this.menuButtonTimer = 0;
                    this.menuSelect.credits = false;     
            }
        } else if (this.title && this.credits && (this.game.click || this.game.A || this.game.B) && (this.menuButtonTimer > this.menuButtonCooldown)) {
            if (this.game.A || this.game.B || (this.game.click && this.game.click.y > 13.25 * PARAMS.BLOCKWIDTH && this.game.click.y < 13.75 * PARAMS.BLOCKWIDTH)) {
                    this.credits = false;
                    this.menuButtonTimer = 0;
                    this.menuSelect.mario = true;         
            }
        }

        if (this.gameOver) {
            this.gameOver = false;
            this.lives = 3;
            this.score = 0;
            this.coins = 0;
            var x = 2.5 * PARAMS.BLOCKWIDTH;
            var y = 13 * PARAMS.BLOCKWIDTH;
            this.mario = new Mario(this.game, x, y);

            this.clearEntities();

            this.game.addEntity(new TransitionScreen(this.game, levelOne, x, y, true));
        }

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;

        // NOTE: THIS FOLLOWING CODE HAS A BUG WHERE CANVAS COLOR WON'T CHANGE BACK TO BLUE.
        var canvas = document.getElementById("gameWorld");
        if (this.underground) {
            canvas.style.backgroundColor = "black";
        } else {
            canvas.style.backgroundColor = "#049cd8";
        }
    };

    addCoin() {
        if (this.coins++ === 100) {
            this.coins = 0;
            this.lives++;
        }
    };

    draw(ctx) {
        ctx.font = PARAMS.BLOCKWIDTH / 2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";

        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText((this.score + "").padStart(8,"0"), 1.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("x" + (this.coins < 10 ? "0" : "") + this.coins, 6.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("WORLD", 9 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText(this.level.label, 9.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("TIME", 12.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText(this.time, 13 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);

        if (this.title && !this.credits) { // Title Screen
            var width = 176;
            var height = 88;
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title.png"), 2.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, width * PARAMS.SCALE, height * PARAMS.SCALE);
            if ((this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 9.5 * PARAMS.BLOCKWIDTH) || this.menuSelect.mario) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title_mushroom.png"), 6 * PARAMS.BLOCKWIDTH, 8.9 * PARAMS.BLOCKWIDTH, 30, 30);
            }
            ctx.fillText("MARIO", 6.75 * PARAMS.BLOCKWIDTH, 9.5 * PARAMS.BLOCKWIDTH);
            if ((this.game.mouse && this.game.mouse.y > 10 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 10.5 * PARAMS.BLOCKWIDTH) || this.menuSelect.luigi) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title_mushroom.png"), 6 * PARAMS.BLOCKWIDTH, 9.9 * PARAMS.BLOCKWIDTH, 30, 30);
            }
            ctx.fillText("LUIGI", 6.75 * PARAMS.BLOCKWIDTH, 10.5 * PARAMS.BLOCKWIDTH);
            if ((this.game.mouse && this.game.mouse.y > 11 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 11.5 * PARAMS.BLOCKWIDTH) || this.menuSelect.credits) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title_mushroom.png"), 6 * PARAMS.BLOCKWIDTH, 10.9 * PARAMS.BLOCKWIDTH, 30, 30);
            }
            ctx.fillText("CREDITS", 6.75 * PARAMS.BLOCKWIDTH, 11.5 * PARAMS.BLOCKWIDTH);
        } else if (this.title && this.credits) { // Credits Screen 
            var width = 176;
            var height = 88;
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title.png"), 4.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, width * PARAMS.SCALE / 1.55, height * PARAMS.SCALE / 1.55);
            
            if ((this.game.mouse && this.game.mouse.y > 13.25 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 13.75 * PARAMS.BLOCKWIDTH) || this.menuSelectIndex === 0) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/title_mushroom.png"), 6.25 * PARAMS.BLOCKWIDTH, 13.1 * PARAMS.BLOCKWIDTH, 30, 30);
            }
            ctx.fillText("BACK", 7 * PARAMS.BLOCKWIDTH, 13.75 * PARAMS.BLOCKWIDTH);

            ctx.strokeStyle = "Black";
            ctx.lineWidth = 5;
            ctx.strokeRect(4 * PARAMS.BLOCKWIDTH, 5.7 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH, 7.25 * PARAMS.BLOCKWIDTH);
            ctx.lineWidth = 3;
            ctx.strokeRect(4 * PARAMS.BLOCKWIDTH, 6.7 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH, 1)
            ctx.fillText("CREDITS ↑↓", 5.5 * PARAMS.BLOCKWIDTH, 6.5 * PARAMS.BLOCKWIDTH);
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/mouse_wheel.png"), 10.75 * PARAMS.BLOCKWIDTH, 5.9 * PARAMS.BLOCKWIDTH, 30 , 30)

            // Credits box text output
            ctx.font = '15px "Press Start 2P"';
            let j = 0;
            for (let i = this.creditsLineIndex; i < credits.text.length && i < this.creditsLineIndex + 12; i++) {
                let temp = ctx.fillStyle;
                if (credits.text[i].length > 0) {
                    if (credits.text[i].includes("Students")) { 
                        ctx.fillStyle = "Black";
                    }
                    ctx.fillText(credits.text[i], 4.25 * PARAMS.BLOCKWIDTH, (7.25 + 0.5 * j) * PARAMS.BLOCKWIDTH);
                    ctx.fillStyle = temp;
                    j++;
                }
            }
        }

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
