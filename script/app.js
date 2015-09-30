/// <reference path="reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserFirstGame = (function (_super) {
    __extends(PhaserFirstGame, _super);
    function PhaserFirstGame() {
        _super.apply(this, arguments);
    }
    PhaserFirstGame.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        new Background(this.game, new CONSTANTS.Background);
        this.platform = this.game.add.group();
        this.platform.enableBody = true;
        new PhaserGroupObject(this.platform, new CONSTANTS.Ground, true);
        new PhaserGroupObject(this.platform, new CONSTANTS.Ledge1, true);
        new PhaserGroupObject(this.platform, new CONSTANTS.Ledge2, true);
        this.player = new Player(this.game, new CONSTANTS.Player, this.platform);
        console.log(this.player.sprite.body);
        this.stars = [];
        for (var i = 0; i < 12; i++) {
            this.stars.push(new Star(this.game, new CONSTANTS.Star, this.platform, this.player));
            this.player.addCollision(this.stars[i]);
            this.stars[i].setOverlapObject(this.player.sprite);
            this.stars[i].setPosition(new CONSTANTS.Star().x * i, 0);
        }
        this.scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        this.score = 0;
        this.game.camera.deadzone = new Phaser.Rectangle(800, 0, 1600, 600);
        this.game.camera.setSize(800, 600);
        this.game.camera.follow(this.player.sprite);
    };
    PhaserFirstGame.prototype.update = function () {
        var _this = this;
        this.player.update();
        this.stars.forEach(function (star) { _this.score = star.update(_this.score); });
        this.scoreText.text = "Åё : " + this.score;
    };
    return PhaserFirstGame;
})(PhaserGame);
window.onload = function () {
    var game = new PhaserFirstGame(new PhaserFirstAssets, new CONSTANTS.Game);
};
//# sourceMappingURL=app.js.map