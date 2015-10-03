/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, constants) {
        var subject = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            subject[_i - 2] = arguments[_i];
        }
        _super.call(this, game, constants);
        this.constants = constants;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jq = $(this);
        this.createScoreText();
        this.score = subject[0];
        this.pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
        this.game.input.onTap.add(this.tapJump, this);
    }
    Player.prototype.createScoreText = function () {
        this.scoreText = this.game.add.text(this.x, this.y, 'Score: 0', this.constants.ScoreFont);
        this.scoreText.anchor.setTo(0.5, 0.5);
    };
    Player.prototype.setFrameAnimation = function () {
        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
        this.animations.add("stop", [4], 0, true);
    };
    Player.prototype.setPhysical = function (constants) {
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = constants.collideWorldBounce;
        this.body.bounce.y = constants.bounceV;
        this.body.gravity.y = constants.gravityV;
    };
    Player.prototype.moveHorizontally = function (animation, velocity) {
        this.body.velocity.x = velocity;
        this.animations.play(animation);
    };
    Player.prototype.moveVertically = function (animation, velocity) {
        this.body.velocity.y = velocity;
        this.animations.play(animation);
    };
    Player.prototype.jump = function () {
        this.moveVertically("stop", -this.constants.velocityV);
        this.game.sound.play("jump");
    };
    Player.prototype.tapJump = function (pointer, doubleTap) {
        if (this.body.touching.down && doubleTap)
            this.jump();
    };
    Player.prototype.update = function () {
        this.updatePosition();
        this.updateScoreText();
    };
    Player.prototype.updatePosition = function () {
        var isLeft = this.cursors.left.isDown || (this.pointer.isDown && this.pointer.x < this.x);
        var isRight = this.cursors.right.isDown || (this.pointer.isDown && this.pointer.x > this.x + this.width);
        if (isLeft) {
            this.moveHorizontally("left", -this.constants.velocityH);
        }
        else if (isRight) {
            this.moveHorizontally("right", this.constants.velocityH);
        }
        else {
            this.moveHorizontally("stop", 0);
        }
        if (this.cursors.up.isDown && this.body.touching.down)
            this.jump();
    };
    Player.prototype.updateScoreText = function () {
        this.scoreText.x = this.x + this.width / 2;
        this.scoreText.y = this.y;
        this.scoreText.text = "Score: " + this.score.getScore().toString();
    };
    Player.prototype.onOverlap = function (partner) {
        this.jq.trigger(this.constants.correctStarEvent);
    };
    Player.prototype.onCorrectStar = function (handler) {
        this.jq.bind(this.constants.correctStarEvent, handler);
    };
    return Player;
})(SpriteObject);
//# sourceMappingURL=Player.js.map