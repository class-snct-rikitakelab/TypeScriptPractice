/// <reference path="../reference.ts"/>

class Ground extends SpriteObject {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Ground) {
        super(game, constants);
    }

    protected setPhysical(constants: CONSTANTS.Ground) {
        this.game.physics.arcade.enableBody(this);
        // immovableにしてもx, yで動かすことはできるが、重力などの判定がよくわからなくなるかも
        this.body.immovable = constants.immovable;
    }
}