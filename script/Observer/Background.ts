/// <reference path="../reference.ts"/>

class Background {
    constructor(private game: Phaser.Game, private constants: CONSTANTS.Background) {
        this.game.add.sprite(0, 0, this.constants.images[this.constants.initImage]);
    }
}