/// <reference path="reference.ts"/>


class PhaserFirstGame extends PhaserGame{
     // Platform group
    private platform: Phaser.Group;
    private stars: Star[];
    private player: Player;
    private scoreText: any;
    private score: number;

    protected create() {
        // Start physics system.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Create background picture on game.
        new Background(this.game, new CONSTANTS.Background);

        // Make a platform group made from 2 ledge and ground.
        this.platform = this.game.add.group();

        // Physics calcuration in all objects: on.
        this.platform.enableBody = true;
        
        // Create the ground and ledges in platform group.
        new PhaserGroupObject(this.platform, new CONSTANTS.Ground, true);
        new PhaserGroupObject(this.platform, new CONSTANTS.Ledge1, true);
        new PhaserGroupObject(this.platform, new CONSTANTS.Ledge2, true);

        // Create the player.
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
    }

    protected update() {
        this.player.update();
        this.stars.forEach((star: Star) => { this.score = star.update(this.score); });
        this.scoreText.text = "Åё : " + this.score;
    }
}


// do it after loading HTML
window.onload = () => {
    var game = new PhaserFirstGame(new PhaserFirstAssets, new CONSTANTS.Game);
}