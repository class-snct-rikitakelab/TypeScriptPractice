/// <reference path="reference.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload
        });
    }
    SimpleGame.prototype.preload = function () {
        var loader = this.game.load.image("jet", "assets/image/star.png");
    };
    SimpleGame.prototype.create = function () {
        var _this = this;
        this.jetSprite = this.game.add.sprite(50, 50, "jet");
        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;
        this.jetSprite.inputEnabled = true;
        this.jetSprite.events.onInputDown.add(function () {
            _this.jetSprite.destroy();
        });
        this.jetSprite.events.onDestroy.add(function () {
            alert("destroy!");
        });
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=test.js.map