var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/mario.png");
ASSET_MANAGER.queueDownload("./sprites/luigi.png");
ASSET_MANAGER.queueDownload("./sprites/enemies.png");
ASSET_MANAGER.queueDownload("./sprites/tiles.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new Mario(gameEngine, 50, 50, ASSET_MANAGER.getAsset("./sprites/mario.png")));

	gameEngine.start();
});
