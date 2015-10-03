/// <reference path="../reference.ts"/>
var PhaserGame = (function () {
    function PhaserGame(assets, constants) {
        var _this = this;
        this.game = new Phaser.Game(constants.width, constants.height, Phaser.AUTO, constants.renderer, {
            preload: function () { assets.load(_this.game); },
            create: this.create, update: this.update, render: this.render
        });
    }
    PhaserGame.prototype.create = function () {
    };
    PhaserGame.prototype.update = function () {
    };
    PhaserGame.prototype.render = function () {
    };
    return PhaserGame;
})();
//# sourceMappingURL=PhaserGame.js.map