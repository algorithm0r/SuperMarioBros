class TransitionScreen {
    constructor(game, level, x, y, gameOver) {
        Object.assign(this, { game, level, x, y, gameOver });

        this.elapsed = 0;
    };

    update() {
        this.elapsed += this.game.clockTick;

        if (this.elapsed > 2) this.game.camera.loadLevel(this.level, this.x, this.y, false, this.gameOver);
    };

    draw(ctx) {
        ctx.fillStyle = "Black";
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        ctx.font = PARAMS.BLOCKWIDTH / 2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";

        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText((this.game.camera.score + "").padStart(8, "0"), 1.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("x" + (this.game.camera.coins < 10 ? "0" : "") + this.game.camera.coins, 6.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("WORLD", 9 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText(this.level.label, 9.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        ctx.fillText("TIME", 12.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        ctx.fillText("400", 13 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);

        if (this.gameOver) {
            ctx.fillText("GAME OVER", 6 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH);
        }
        else {
            ctx.fillText("WORLD " + this.level.label, 5.5 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH);
            ctx.fillText("x  " + this.game.camera.lives, 7.5 * PARAMS.BLOCKWIDTH, 7.5 * PARAMS.BLOCKWIDTH);
            ctx.drawImage(this.game.mario.spritesheet, 210, 0, 16, 16, 6 * PARAMS.BLOCKWIDTH, 6.5 * PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        }
    };

    drawMinimap() {

    };
};
