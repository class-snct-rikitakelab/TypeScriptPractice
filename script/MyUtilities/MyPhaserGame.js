/// <reference path="../reference.ts"/>
var ASSET_LOADER = (function () {
    function ASSET_LOADER() {
        this.enum = {
            KEY: 0,
            FILE_NAME: 1,
            FRAME_WIDTH: 2,
            FRAME_HEIGHT: 3,
        };
        this.images = {
            address: "",
            assets: [
                ["", ""]
            ],
        };
        this.spritesheets = {
            address: "",
            assets: [
                ["", "", 0, 0]
            ]
        };
    }
    ASSET_LOADER.prototype.load = function (loader) {
        this.loadImage(loader);
        this.loadSpriteSheet(loader);
        this.loadAudio(loader);
    };
    ASSET_LOADER.prototype.loadImage = function (loader) {
        var _this = this;
        this.images.assets.forEach(function (asset) {
            loader.image(asset[_this.enum.KEY], _this.images.address + asset[_this.enum.FILE_NAME]);
        });
    };
    ASSET_LOADER.prototype.loadSpriteSheet = function (loader) {
        var _this = this;
        this.spritesheets.assets.forEach(function (asset) {
            loader.spritesheet(asset[_this.enum.KEY], _this.spritesheets.address + asset[_this.enum.FILE_NAME], asset[_this.enum.FRAME_WIDTH], asset[_this.enum.FRAME_HEIGHT]);
        });
    };
    ASSET_LOADER.prototype.loadAudio = function (loader) {
    };
    return ASSET_LOADER;
})();
var PhaserGame = (function () {
    function PhaserGame(assets, constants) {
        var _this = this;
        this.constants = constants;
        var gc = this.constants;
        this.game = new Phaser.Game(gc.width, gc.height, Phaser.AUTO, gc.renderer, {
            preload: function () { assets.load(_this.game.load); },
            create: this.create, update: this.update
        });
    }
    PhaserGame.prototype.create = function () {
    };
    PhaserGame.prototype.update = function () {
    };
    return PhaserGame;
})();
//# sourceMappingURL=MyPhaserGame.js.map