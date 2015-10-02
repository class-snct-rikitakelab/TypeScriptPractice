/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground(game, constants) {
        _super.call(this, game, constants.x, constants.y, constants.images[constants.initImage]);
        this.constants = constants;
        game.world.add(this);
        this.setPhysics();
        this.setSize(constants.width, constants.height);
    }
    Ground.prototype.setPhysics = function () {
        this.game.physics.arcade.enableBody(this);
        this.body.immovable = this.constants.immovable;
    };
    Ground.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    return Ground;
})(Phaser.Sprite);
var Star = (function (_super) {
    __extends(Star, _super);
    function Star(game, constants) {
        _super.call(this, game, constants.x, constants.y, constants.images[constants.initImage]);
        this.constants = constants;
        game.world.add(this);
        this.setSize(this.constants.width, this.constants.height);
        this.setPhysical();
    }
    Star.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    Star.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Star.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 20;
        this.body.bounce.y = 0.7 + Math.random() * 0.2;
    };
    Star.prototype.checkCount = function (score) {
        if (1)
            return score;
        return score + 10;
    };
    return Star;
})(Phaser.Sprite);
var Starr = (function () {
    function Starr(game, constants) {
        var collisionObjects = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            collisionObjects[_i - 2] = arguments[_i];
        }
        this.game = game;
        this.constants = constants;
        this.collisionObjects = [];
        this.object = game.add.sprite(this.constants.x, this.constants.y, this.constants.images[this.constants.initImage]);
        this.collisionObjects = collisionObjects;
        this.setSize(this.constants.width, this.constants.height);
        this.setPhysical();
    }
    Starr.prototype.setSize = function (width, height) {
        this.object.width = width;
        this.object.height = height;
    };
    Starr.prototype.setPosition = function (x, y) {
        this.object.x = x;
        this.object.y = y;
    };
    Starr.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this.object);
        this.object.body.collideWorldBounds = true;
        this.object.body.gravity.y = 20;
        this.object.body.bounce.y = 0.7 + Math.random() * 0.2;
    };
    Starr.prototype.update = function (score) {
        this.collision();
        var get = this.game.physics.arcade.overlap(this.object, this.overlapObject, this.overlapFunction, null, this);
        if (get)
            return score + 10;
        return score;
    };
    Starr.prototype.addCollision = function (object) {
        this.collisionObjects.push(object);
    };
    Starr.prototype.collision = function () {
        for (var _i = 0, _a = this.collisionObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            this.game.physics.arcade.collide(this.object, object);
        }
    };
    Starr.prototype.setOverlapObject = function (object) {
        this.overlapObject = object;
    };
    Starr.prototype.overlapFunction = function () {
        this.object.kill();
    };
    return Starr;
})();
//# sourceMappingURL=PhaserGroupObject.js.map