/// <reference path="reference.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            render: this.render
        });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.audio("GameMusic", ["assets/sound/once.mp3"]);
        this.game.load.image("button", "assets/image/sky.png");
    };
    SimpleGame.prototype.render = function () {
        this.game.debug.soundInfo(this.sound, 0, 100);
    };
    SimpleGame.prototype.create = function () {
        var _this = this;
        this.sound = this.game.add.audio('GameMusic');
        this.sound.onPlay.add(function () {
            alert("Played");
        });
        this.sound.onPause.add(function () {
            alert("Paused");
        });
        this.playButton = this.game.add.button(0, 0, "button", function () {
            if (_this.sound.currentTime > 0)
                _this.sound.resume();
            else
                _this.sound.play();
        }, this);
        this.playButton.addChild(new Phaser.Text(this.game, 17, 18, "Play", { fill: '#ff0000' }));
        this.pauseButton = this.game.add.button(95, 0, "button", function () {
            _this.sound.pause();
        }, this);
        this.pauseButton.addChild(new Phaser.Text(this.game, 12, 18, "Pause", { fill: '#ff0000' }));
        this.stopButton = this.game.add.button(190, 0, "button", function () {
            if (_this.sound.isPlaying) {
                _this.sound.stop();
                _this.sound.currentTime = 0;
            }
        }, this);
        this.stopButton.addChild(new Phaser.Text(this.game, 17, 18, "Stop", { fill: '#ff0000' }));
        this.volUpButton = this.game.add.button(300, 0, "button", function () {
            _this.sound.volume += 0.1;
        }, this);
        this.volUpButton.addChild(new Phaser.Text(this.game, 17, 18, "Vol +", { fill: '#ff0000' }));
        this.volDownButton = this.game.add.button(400, 0, "button", function () {
            _this.sound.volume -= 0.1;
        }, this);
        this.volDownButton.addChild(new Phaser.Text(this.game, 17, 18, "Vol -", { fill: '#ff0000' }));
        this.volDownButton = this.game.add.button(500, 0, "button", function () {
            _this.game.sound.mute = !_this.game.sound.mute;
        }, this);
        this.volDownButton.addChild(new Phaser.Text(this.game, 17, 18, "Mute", { fill: '#ff0000' }));
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=test.js.map