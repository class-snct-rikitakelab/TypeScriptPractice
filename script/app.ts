/// <reference path="reference.ts"/>

class PhaserFirstGame extends PhaserGame{
    // Declare Model and View in Main class like this.
    private score: Score;
    private grounds: Phaser.Group;
    private stars: Phaser.Group;
    private player: Player;
    private contactMgr: ContactManager;

    protected create() {
        // =========== Setting game ==========
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Keep running on losing focus of game!
        this.game.stage.disableVisibilityChange = true;

        this.game.sound.play("bgm", 1.0, true);

        // ========== Model ===========
        this.score = new Score(this.game, new CONSTANTS.Score);

        // ========== View ==========
        new SpriteObject(this.game, new CONSTANTS.Background);

        this.grounds = this.game.add.group();
        var children = [new CONSTANTS.Ground, new CONSTANTS.Ledge1, new CONSTANTS.Ledge2];
        children.forEach((value: any) => { this.grounds.add(new Ground(this.game, value)); });

        this.stars = this.game.add.group();
        for (var i = 0; i < 12; i++) {
            var star = new Star(this.game, new CONSTANTS.Star);
            star.setPosition(star.x * i, star.y);
            this.stars.add(star);
        }

        this.player = new Player(this.game, new CONSTANTS.Player, { score: this.score });
        this.player.onCorrectStar(() => { this.score.scoreUp(); });


        // ========== Others ===========
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

// Do it after loading HTML, jQuery
window.onload = () => {
    $(() => { new PhaserFirstGame(new PhaserFirstAssets, new CONSTANTS.Game); });
}