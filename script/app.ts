/// <reference path="reference.ts"/>

class PhaserFirstGame extends PhaserGame{
    // メインでは、ビューとモデルを宣言する。
    private grounds: Phaser.Group;
    private stars: Phaser.Group;
    private player: Player;
    private contactMgr: ContactManager;
    private score: Score;

    protected create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.score = new Score(this.game, new CONSTANTS.Score);

        new Background(this.game, new CONSTANTS.Background);
        
        this.grounds = this.game.add.group();
        var children = [new CONSTANTS.Ground, new CONSTANTS.Ledge1, new CONSTANTS.Ledge2];
        children.forEach((value: any) => { this.grounds.add(new Ground(this.game, value)); });

        this.stars = this.game.add.group();
        for (var i = 0; i < 12; i++) {
            var star = new Star(this.game, new CONSTANTS.Star)
            star.setPosition(star.x * i, star.y);
            this.stars.add(star);
        }

        this.player = new Player(this.game, new CONSTANTS.Player, this.score);
        this.player.onCorrectStar(() => { this.score.scoreUp(); });

        this.contactMgr = new ContactManager(this.game);
        this.contactMgr.addCollide(this.player, this.grounds);
        this.contactMgr.addCollide(this.grounds, this.stars);
        this.contactMgr.addOverlap(this.player, this.stars);
    }

    protected update() {
        this.player.update();
        this.contactMgr.checkAllContact();
    }
}

/*
class LoadState extends Phaser.State {
    game: Phaser.Game;
    constructor() {
        super();
    }
    titleScreenImage: Phaser.Sprite;

    preload() {
        this.load.image("preloadBar", "assets/image/.png");
    }
    create() {
        this.titleScreenImage = this.add.sprite(0, 0, "title");
        this.input.onTap.addOnce(this.titleClicked, this);
    }
    titleClicked() {
        this.game.state.start("GameRunningState");
    }
}

class Game {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content');

        this.game.state.add("GameState", PhaserFirstGame, false);
        this.game.state.add("LoadState", LoadState, false);
        this.game.state.start("LoadState", true, true);
    }
}
*/

// do it after loading HTML, jQuery
window.onload = () => {
    $(() => { new PhaserFirstGame(new PhaserFirstAssets, new CONSTANTS.Game); });
}