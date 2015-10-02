/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground(game, constants) {
        _super.call(this, game, constants);
        this.constants = constants;
    }
    Ground.prototype.setPhysical = function (constants) {
        this.game.physics.arcade.enableBody(this);
        this.body.immovable = constants.immovable;
    };
    return Ground;
})(SpriteObject);
//# sourceMappingURL=Ground.js.map
