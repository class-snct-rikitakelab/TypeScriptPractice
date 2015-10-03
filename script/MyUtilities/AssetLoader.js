/// <reference path="../reference.ts"/>
var AssetLoader = (function () {
    function AssetLoader() {
        this.preloadBarFile = 'assets/image/preloadBar.png';
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
        this.audio = {
            address: "",
            assets: [
                ["", []]
            ]
        };
    }
    AssetLoader.prototype.load = function (game) {
        game.load.image("preloadBar", this.preloadBarFile);
        game.load.setPreloadSprite(this.preloadBar(game));
        this.loadImage(game.load);
        this.loadSpriteSheet(game.load);
        this.loadAudio(game.load);
    };
    AssetLoader.prototype.preloadBar = function (game) {
        var bar = game.add.sprite(game.width / 2, game.height / 2, "preloadBar");
        bar.pivot.x = bar.width / 2;
        bar.pivot.y = bar.height / 2;
        return bar;
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
        var _this = this;
        this.audio.assets.forEach(function (asset) {
            asset[_this.enum.FILE_NAME] = asset[_this.enum.FILE_NAME].map(function (value) {
                return _this.audio.address + value;
            });
            loader.audio(asset[_this.enum.KEY], asset[_this.enum.FILE_NAME]);
        });
    };
    return AssetLoader;
})();
//# sourceMappingURL=AssetLoader.js.map