/// <reference path="../reference.ts"/>
var PhaserGroupObject = (function () {
    function PhaserGroupObject(group, constants, immovable) {
        this.constants = constants;
        this.object = group.create(this.constants.x, this.constants.y, this.constants.images[this.constants.initImage]);
        this.object.body.immovable = immovable;
        this.setSize(this.constants.width, this.constants.height);
    }
    PhaserGroupObject.prototype.setSize = function (width, height) {
        this.object.width = width;
        this.object.height = height;
    };
    PhaserGroupObject.prototype.setPosition = function (x, y) {
        this.object.x = x;
        this.object.y = y;
    };
    return PhaserGroupObject;
})();
var Star = (function () {
    function Star(game, constants) {
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
    Star.prototype.setSize = function (width, height) {
        this.object.width = width;
        this.object.height = height;
    };
    Star.prototype.setPosition = function (x, y) {
        this.object.x = x;
        this.object.y = y;
    };
    Star.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this.object);
        this.object.body.collideWorldBounds = true;
        this.object.body.gravity.y = 20;
        this.object.body.bounce.y = 0.7 + Math.random() * 0.2;
    };
    Star.prototype.update = function (score) {
        this.collision();
        var get = this.game.physics.arcade.overlap(this.object, this.overlapObject, this.overlapFunction, null, this);
        if (get)
            return score + 10;
        return score;
    };
    Star.prototype.addCollision = function (object) {
        this.collisionObjects.push(object);
    };
    Star.prototype.collision = function () {
        for (var _i = 0, _a = this.collisionObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            this.game.physics.arcade.collide(this.object, object);
        }
    };
    Star.prototype.setOverlapObject = function (object) {
        this.overlapObject = object;
    };
    Star.prototype.overlapFunction = function () {
        this.object.kill();
    };
    return Star;
})();
//# sourceMappingURL=PhaserGroupObject.js.map