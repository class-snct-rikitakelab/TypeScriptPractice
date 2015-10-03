/// <reference path="../reference.ts"/>

class PhaserGame {
    // Phaser.js
    protected game: Phaser.Game;
    
    // Create game world.
    constructor(assets: AssetLoader, protected constants: CONSTANTS.Game) {
        var gc = this.constants;
        this.game = new Phaser.Game(gc.width, gc.height, Phaser.AUTO, gc.renderer, {
            preload: () => { assets.load(this.game); },
            create: this.create, update: this.update
        });
    }

    // start the game
    protected create() {
        // override!
    }

    // do it on each frame
    protected update() {
        // override!
    }
}
