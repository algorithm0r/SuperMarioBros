class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;
        this.coins = 0;
        this.lives = 3;

        this.coinAnimation = new Animator(ASSET_MANAGER.getAsset("./sprites/coins.png"), 0, 160, 8, 8, 4, 0.2, 0, false, true);

        this.loadLevelOne();
    };

    addCoin() {
        if (this.coins++ === 100) {
            this.coins = 0;
            this.lives++;
        }
    };

    clearEntities() {
        this.game.entities = [this];
    };

    async loadLevelFromFile(fileName) {
        let width = PARAMS.BLOCKWIDTH;

        await fetch(`levels/${fileName}`)
            .then(response => response.text())        
            .then((response) => {
                response.split(/\r?\n/)
                .forEach(element => {
                    let line = element.split(" ");
                    let item = line[0];
                    switch(item) {
                        case 'tube':
                            this.game.addEntity(new Tube(this.game, line[1] * width, line[2] * width, line[3]));
                            break;
                        case 'bric':
                            this.game.addEntity(new Brick(this.game, line[1] * width, line[2] * width, line[3], String(line[4])));
                            break;
                        case 'bloc':
                            this.game.addEntity(new Block(this.game, line[1] * width, line[2] * width, line[3] * width));
                            break;
                        case 'grou':
                            this.game.addEntity(new Ground(this.game, line[1] * width, line[2] * width, line[3] * width));
                            break;
                        case 'bush':
                            this.game.addEntity(new Bush(this.game, line[1] * width, line[2] * width, line[3]));
                            break;
                        case 'hill':
                            this.game.addEntity(new Hill(this.game, line[1] * width, line[2] * width));
                            break;
                        case 'bhil':
                            this.game.addEntity(new BigHill(this.game, line[1] * width, line[2] * width));
                            break;
                        case 'clou':
                            this.game.addEntity(new Cloud(this.game, line[1] * width, line[2] * width, line[3]));
                            break;
                        case 'koop':
                            this.game.addEntity(new Koopa(this.game, line[1] * width, line[2] * width, line[3] * width));
                            break;
                        case 'goom':
                            this.game.addEntity(new Goomba(this.game, line[1] * width, line[2] * width));
                            break;
                        default:
                            break;
                    }
                });
            }).catch(error => console.error(error));
    }

    loadLevelOne() {
        let width = PARAMS.BLOCKWIDTH;        
        this.loadLevelFromFile("1-1.txt");
        this.mario = new Mario(gameEngine, 2.5 * width, 0 * width);
        gameEngine.addEntity(this.mario);   
    };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;

        if (this.mario.dead && this.mario.y > PARAMS.BLOCKWIDTH * 16) {
            this.clearEntities();
            this.loadLevelOne();
        };
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
            let xV = "xV=" + this.game.mario.velocity.x;
            let yV = "yV=" + this.game.mario.velocity.y;
            ctx.fillText(xV, 1.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH);
            ctx.fillText(yV, 1.5 * PARAMS.BLOCKWIDTH, 2.5 * PARAMS.BLOCKWIDTH);
        }
    };
};
