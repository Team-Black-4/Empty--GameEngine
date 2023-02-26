﻿const game = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./assets/background/pirategametitle.png");
ASSET_MANAGER.queueDownload("./assets/background/piratedeathscreen.png");
ASSET_MANAGER.queueDownload("./assets/background/1 Tiles/Map_tile_01.png");
ASSET_MANAGER.queueDownload("./assets/background/2 Objects/Houses/shop.png");
ASSET_MANAGER.queueDownload("./assets/background/1 Tiles/Map_tile_54.png");
ASSET_MANAGER.queueDownload("./assets/player/mobshipw.png");
ASSET_MANAGER.queueDownload("./assets/enemies/slime.png");
ASSET_MANAGER.queueDownload("./assets/items/coin.png");
ASSET_MANAGER.queueDownload("./assets/items/cannonicon.png");
ASSET_MANAGER.queueDownload("./assets/items/healthboosticon.png");
ASSET_MANAGER.queueDownload("./assets/background/2 Objects/Rocks/rocksprite.png");
ASSET_MANAGER.queueDownload("./assets/player/ship.png");
ASSET_MANAGER.queueDownload("./assets/projectiles/cannonball.png");
ASSET_MANAGER.queueDownload("./assets/projectiles/fireball.png");
ASSET_MANAGER.queueDownload("./assets/projectiles/harpoon.png");
ASSET_MANAGER.queueDownload("./assets/projectiles/spear.png");
ASSET_MANAGER.queueDownload("./assets/enemies/monster.png");
ASSET_MANAGER.queueDownload("./assets/enemies/monster1.png");
ASSET_MANAGER.queueDownload("./assets/enemies/monster2.png");
ASSET_MANAGER.queueDownload("./assets/background/2 Objects/Houses/shop.png");



ASSET_MANAGER.downloadAll(() => {

    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    PARAMS.TILEWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
    PARAMS.TILEHEIGHT = PARAMS.BITWIDTH * PARAMS.SCALE;

    PARAMS.CANVAS_WIDTH = canvas.width;
    PARAMS.CANVAS_HEIGHT = canvas.height;


    game.init(ctx);
    this.scene = new SceneManager(game);
    game.addEntity(scene);
    this.scene.loadTitle();
    game.start();
});
