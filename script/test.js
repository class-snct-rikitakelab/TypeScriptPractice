/// <reference path="reference.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.count = 0;
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update,
        });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.audio("GameMusic", ["assets/sound/once.mp3"]);
    };
    SimpleGame.prototype.create = function () {
        var _this = this;
        this.count = 0;
        this.sound1 = this.game.add.audio('GameMusic');
        this.sound2 = this.game.add.audio('GameMusic');
        this.sound1.play();
        this.sound1.onPlay.add(function () {
            _this.game.debug.text("play", 100, 100);
        });
    };
    SimpleGame.prototype.update = function () {
        this.count++;
        if (this.count == 500) {
            this.game.debug.text("play", 100, 150);
            this.sound2.play();
        }
        this.game.debug.text(this.count.toString(), 100, 100);
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=test.js.map