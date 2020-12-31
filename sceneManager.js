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

    loadLevelOne() {
        let width = PARAMS.BLOCKWIDTH;        
        this.x = 0;
        this.mario = new Mario(gameEngine, 2.5 * width, 0 * width);
        this.game.addEntity(this.mario);

        // Might need a variable for warping levels; not sure yet
        let currLevel = new WorldOneOne(this.game, width, this.mario).loadLevel();
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