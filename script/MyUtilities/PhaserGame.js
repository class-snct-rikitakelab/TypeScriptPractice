/// <reference path="../reference.ts"/>
var PhaserGame = (function () {
    function PhaserGame(assets, constants) {
        var _this = this;
        this.constants = constants;
        var gc = this.constants;
        this.game = new Phaser.Game(gc.width, gc.height, Phaser.AUTO, gc.renderer, {
            preload: function () { assets.load(_this.game); },
            create: this.create, update: this.update
        });
    }
    PhaserGame.prototype.create = function () {
    };
    PhaserGame.prototype.update = function () {
    };
    return PhaserGame;
})();
//# sourceMappingURL=PhaserGame.js.map