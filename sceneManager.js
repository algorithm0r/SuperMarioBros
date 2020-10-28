class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.loadLevelOne();
    };

    loadLevelOne() {
        let background = new BigHill(this.game, 0, 11.5 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new BigBush(this.game, 11.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Hill(this.game, 16 * PARAMS.BLOCKWIDTH, 12.75 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Bush(this.game, 23.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Cloud(this.game, 8.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new Cloud(this.game, 19.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);
        background = new BigCloud(this.game, 27.5 * PARAMS.BLOCKWIDTH, 3 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/tiles.png"));
        this.game.addEntity(background);

        let ground = new Ground(this.game, 0, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 71 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 88 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 74 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);
        ground = new Ground(this.game, 164 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(ground);

        let brick = new Brick(this.game, 20 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/bricks.png"));
        this.game.addEntity(brick);
        brick = new Brick(this.game, 22 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/bricks.png"));
        this.game.addEntity(brick);
        brick = new Brick(this.game, 24 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/bricks.png"));
        this.game.addEntity(brick);

        let box = new QuestionBox(this.game, 21 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/items.png"), "Growth");
        this.game.addEntity(box);
        box = new QuestionBox(this.game, 23 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/items.png"), "Coin");
        this.game.addEntity(box);
        box = new QuestionBox(this.game, 22 * PARAMS.BLOCKWIDTH, 7 * PARAMS.BLOCKWIDTH, ASSET_MANAGER.getAsset("./sprites/items.png"), "Coins");
        this.game.addEntity(box);


        this.mario = new Mario(gameEngine, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        gameEngine.addEntity(this.mario);

    };

    update() {
        let midpoint = 600 - PARAMS.BLOCKWIDTH / 2; // canvas width is 1200

        if (this.x < this.mario.x - midpoint) this.x = this.mario.x - midpoint;
    };

    draw(ctx) {

    };
};
