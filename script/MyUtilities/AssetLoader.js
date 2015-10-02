/// <reference path="../reference.ts"/>
var AssetLoader = (function () {
    function AssetLoader() {
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
    AssetLoader.prototype.load = function (loader) {
        this.loadImage(loader);
        this.loadSpriteSheet(loader);
        this.loadAudio(loader);
    };
    AssetLoader.prototype.loadImage = function (loader) {
        var _this = this;
        this.images.assets.forEach(function (asset) {
            loader.image(asset[_this.enum.KEY], _this.images.address + asset[_this.enum.FILE_NAME]);
        });
    };
    AssetLoader.prototype.loadSpriteSheet = function (loader) {
        var _this = this;
        this.spritesheets.assets.forEach(function (asset) {
            loader.spritesheet(asset[_this.enum.KEY], _this.spritesheets.address + asset[_this.enum.FILE_NAME], asset[_this.enum.FRAME_WIDTH], asset[_this.enum.FRAME_HEIGHT]);
        });
    };
    AssetLoader.prototype.loadAudio = function (loader) {
    };
    return AssetLoader;
})();
//# sourceMappingURL=AssetLoader.js.map