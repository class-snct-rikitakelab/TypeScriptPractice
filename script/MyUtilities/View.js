/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteObject = (function (_super) {
    __extends(SpriteObject, _super);
    function SpriteObject(game, constants, models) {
        _super.call(this, game, constants.x, constants.y, constants.images[constants.initImage]);
        this.models = models;
        game.world.add(this);
        this.jq = $(this);
        this.setSize(constants.width, constants.height);
        this.setFrameAnimation();
        this.setPhysical(constants);
    }
    SpriteObject.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    SpriteObject.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    SpriteObject.prototype.update = function () {
    };
    SpriteObject.prototype.onCollide = function (partner) {
    };
    SpriteObject.prototype.onOverlap = function (partner) {
    };
    SpriteObject.prototype.setFrameAnimation = function () {
    };
    SpriteObject.prototype.setPhysical = function (constants) {
    };
    return SpriteObject;
})(Phaser.Sprite);
//# sourceMappingURL=View.js.map