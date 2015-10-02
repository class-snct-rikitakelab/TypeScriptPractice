/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Star = (function (_super) {
    __extends(Star, _super);
    function Star(game, constants) {
        _super.call(this, game, constants);
        this.constants = constants;
    }
    Star.prototype.setPhysical = function (constants) {
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = constants.collideWorldBounce;
        this.body.bounce.y = constants.bounceV;
        this.body.gravity.y = constants.gravityV;
    };
    Star.prototype.onOverlap = function (partner) {
        this.kill();
    };
    return Star;
})(SpriteObject);
//# sourceMappingURL=Star.js.map