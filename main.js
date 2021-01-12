
var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/mario.png");
ASSET_MANAGER.queueDownload("./sprites/luigi.png");
ASSET_MANAGER.queueDownload("./sprites/enemies.png");
ASSET_MANAGER.queueDownload("./sprites/tiles.png");
ASSET_MANAGER.queueDownload("./sprites/ground.png");
ASSET_MANAGER.queueDownload("./sprites/bricks.png");
ASSET_MANAGER.queueDownload("./sprites/items.png");
ASSET_MANAGER.queueDownload("./sprites/coins.png");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	PARAMS.CANVAS_WIDTH = canvas.width;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
