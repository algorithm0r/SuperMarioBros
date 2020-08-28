// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor() {
        this.entities = [];
        this.ctx = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;

        this.left = null;
        this.right = null;
        this.up = null;
        this.down = null;
        this.A = null;
        this.B = null;
    };

    init(ctx) { // called after page has loaded
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        })();
    };

    startInput() {
        var that = this;

        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    this.left = true;
                    break;
                case "ArrowRight":
                case "KeyD":
                    this.right = true;
                    break;
                case "ArrowUp":
                case "KeyW":
                    this.up = true;
                    break;
                case "ArrowDown":
                case "KeyS":
                    this.up = true;
                    break;
                case "AltLeft":
                case "AltRight":
                    this.B = true;
                    break;
                case "Space":
                    this.A = true;
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    this.left = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    this.right = false;
                    break;
                case "ArrowUp":
                case "KeyW":
                    this.up = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    this.up = false;
                    break;
                case "AltLeft":
                case "AltRight":
                    this.B = false;
                    break;
                case "Space":
                    this.A = false;
                    break;
            }
        }, false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.save();
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);
        }
    };

    update() {
        var entitiesCount = this.entities.length;

        for (var i = 0; i < entitiesCount; i++) {
            var entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        for (var i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
};