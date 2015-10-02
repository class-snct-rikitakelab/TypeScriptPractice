/// <reference path="../reference.ts"/>

class Star extends SpriteObject {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Star) {
        super(game, constants);
    }

    protected setPhysical(constants: CONSTANTS.Star) {
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = constants.collideWorldBounce;
        this.body.bounce.y = constants.bounceV;
        this.body.gravity.y = constants.gravityV;
    }

    onOverlap(partner: SpriteObject) {
        this.kill();
    }
}