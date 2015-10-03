/// <reference path="../reference.ts"/>

class Player extends SpriteObject{
    private scoreText: Phaser.Text;
    private score: Score;
    private jq: JQuery;
    private cursors: Phaser.CursorKeys = this.game.input.keyboard.createCursorKeys();
    private pointer: Phaser.Pointer;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Player, ...subject: any[]) {
        super(game, constants);
        this.jq = $(this);
        this.createScoreText();
        this.score = subject[0];
        this.pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
        this.game.input.onTap.add(this.tapJump, this);

        /* Player Touch event
        this.inputEnabled = true;
        this.events.onInputDown.add(this.jump,this);
        */
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

    private moveHorizontally(animation: string, velocity: number) {
        this.body.velocity.x = velocity;
        this.animations.play(animation);
    }

    private moveVertically(animation: string, velocity: number) {
        this.body.velocity.y = velocity;
        this.animations.play(animation);
    }

    private jump() {
        this.moveVertically("stop", -this.constants.velocityV);
        this.game.sound.play("jump");
    }

    private tapJump(pointer: Phaser.Pointer, doubleTap: boolean) {
        if (this.body.touching.down && doubleTap) this.jump();
    }
    
    update() {
        this.updatePosition();
        this.updateScoreText();
    }

    private updatePosition() {
        var isLeft = this.cursors.left.isDown || (this.pointer.isDown && this.pointer.x < this.x);
        var isRight = this.cursors.right.isDown || (this.pointer.isDown && this.pointer.x > this.x + this.width);
        if (isLeft) { this.moveHorizontally("left", -this.constants.velocityH); }
        else if (isRight) { this.moveHorizontally("right", this.constants.velocityH); }
        else { this.moveHorizontally("stop", 0); }

        if (this.cursors.up.isDown && this.body.touching.down) this.jump();
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