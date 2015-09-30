/// <reference path="../reference.ts"/>
var Player = (function () {
    function Player(game, constants) {
        var collisionObjects = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            collisionObjects[_i - 2] = arguments[_i];
        }
        this.game = game;
        this.constants = constants;
        this.sprite = this.game.add.sprite(this.constants.x, this.constants.y, this.constants.images[this.constants.initImage]);
        this.collisionObjects = collisionObjects;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.setAnimation();
        this.setPhysical();
    }
    Player.prototype.update = function () {
        this.collision();
        this.sprite.body.velocity.x = 0;
        if (this.cursors.left.isDown) {
            this.sprite.body.velocity.x = -150;
            this.sprite.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            this.sprite.body.velocity.x = 150;
            this.sprite.animations.play('right');
        }
        else {
            this.sprite.animations.stop();
            this.sprite.frame = 4;
        }
        if (this.cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.body.velocity.y = -350;
        }
    };
    Player.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 300;
    };
    Player.prototype.setAnimation = function () {
        this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
        this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
    };
    Player.prototype.addCollision = function (object) {
        this.collisionObjects.push(object);
    };
    Player.prototype.collision = function () {
        for (var _i = 0, _a = this.collisionObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            this.game.physics.arcade.collide(this.sprite, object);
        }
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map