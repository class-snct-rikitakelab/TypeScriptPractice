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
        var _this = this;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = "navy";
        this.score = new Score(this.game, new CONSTANTS.Score);
        new Background(this.game, new CONSTANTS.Background);
        this.grounds = this.game.add.group();
        var children = [new CONSTANTS.Ground, new CONSTANTS.Ledge1, new CONSTANTS.Ledge2];
        children.forEach(function (value) { _this.grounds.add(new Ground(_this.game, value)); });
        this.stars = this.game.add.group();
        for (var i = 0; i < 12; i++) {
            var star = new Star(this.game, new CONSTANTS.Star);
            star.setPosition(star.x * i, star.y);
            this.stars.add(star);
        }
        this.player = new Player(this.game, new CONSTANTS.Player, this.score);
        this.player.onCorrectStar(function () { _this.score.scoreUp(); });
        this.contactMgr = new ContactManager(this.game);
        this.contactMgr.addCollide(this.player, this.grounds);
        this.contactMgr.addCollide(this.grounds, this.stars);
        this.contactMgr.addOverlap(this.player, this.stars);
    };
    PhaserFirstGame.prototype.update = function () {
        this.player.update();
        this.contactMgr.checkAllContact();
    };
    return PhaserFirstGame;
})(PhaserGame);
window.onload = function () {
    $(function () { new PhaserFirstGame(new PhaserFirstAssets, new CONSTANTS.Game); });
};
//# sourceMappingURL=app.js.map