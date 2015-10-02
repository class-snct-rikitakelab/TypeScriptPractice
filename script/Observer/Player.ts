/// <reference path="../reference.ts"/>

class Player extends SpriteObject{
    public scoreText: Phaser.Text;
    private score: Score;
    private jq: JQuery;
    private cursors: Phaser.CursorKeys = this.game.input.keyboard.createCursorKeys();

    constructor(game: Phaser.Game, private constants: CONSTANTS.Player, ...subject: any[]) {
        super(game, constants);
        this.jq = $(this);
        this.createScoreText();
        this.score = subject[0];
    }

    private createScoreText() {
        this.scoreText = this.game.add.text(this.x, this.y,
            'Score: 0', this.constants.ScoreFont);
        this.scoreText.anchor.setTo(0.5, 0.5);
    }

    protected setFrameAnimation() {
        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
        this.animations.add("stop", [4], 0, true);
    }

    protected setPhysical(constants: CONSTANTS.Player) {
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = constants.collideWorldBounce;
        this.body.bounce.y = constants.bounceV;
        this.body.gravity.y = constants.gravityV;
    }

    private moveHorizonally(animation: string, velocity: number) {
        this.body.velocity.x = velocity;
        this.animations.play(animation);
    }

    private moveVertically(animation: string, velocity: number) {
        this.body.velocity.y = velocity;
        this.animations.play(animation);
    }
    
    update() {
        this.updatePosition();
        this.updateScoreText();
    }

    private updatePosition() {
        if (this.cursors.left.isDown) { this.moveHorizonally("left", -this.constants.velocityH); }
        else if (this.cursors.right.isDown) { this.moveHorizonally("right", this.constants.velocityH); }
        else { this.moveHorizonally("stop", 0); }

        if (this.cursors.up.isDown && this.body.touching.down) {
            this.moveVertically("stop", -this.constants.velocityV);
            this.game.add.audio("jump").play();
        }
    }

    private updateScoreText() {
        this.scoreText.x = this.x + this.width / 2;
        this.scoreText.y = this.y;
        this.scoreText.text = "Score: " + this.score.getScore().toString();
    }

    onOverlap(partner: SpriteObject) {
        this.jq.trigger(this.constants.correctStarEvent);
    }

    onCorrectStar(handler: () => any): void {
        this.jq.bind(this.constants.correctStarEvent, handler);
    }
}