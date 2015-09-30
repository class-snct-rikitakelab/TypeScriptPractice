/// <reference path="../reference.ts"/>
var PhaserObject = (function () {
    function PhaserObject(game, constants, platform) {
        this.constants = constants;
        this.object = game.add.sprite(this.constants.x, this.constants.y, this.constants.images[this.constants.initImage], platform ? platform : null);
        this.setSize(this.constants.width, this.constants.height);
    }
    PhaserObject.prototype.setSize = function (width, height) {
        this.object.width = width;
        this.object.height = height;
    };
    return PhaserObject;
})();
