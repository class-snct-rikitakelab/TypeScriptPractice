/// <reference path="../reference.ts"/>

class ASSET_LOADER {

    private enum = {
        KEY: 0,
        FILE_NAME: 1,
        FRAME_WIDTH: 2,
        FRAME_HEIGHT: 3,
    }

    protected images: { address: string, assets: [string, string][] } = {
        address: "",
        assets: [
            ["", ""]
        ],
    }

    protected spritesheets: { address: string, assets: [string, string, number, number][] } = {
        address: "",
        assets: [
            ["", "", 0, 0]
        ]
    }

    constructor() {
    }

    load(loader: Phaser.Loader) {
        this.loadImage(loader);
        this.loadSpriteSheet(loader);
        this.loadAudio(loader);
    }

    private loadImage(loader: Phaser.Loader) {
        this.images.assets.forEach((asset: string[]) => {
            loader.image(asset[this.enum.KEY], this.images.address + asset[this.enum.FILE_NAME]);
        });
    }

    private loadSpriteSheet(loader: Phaser.Loader) {
        this.spritesheets.assets.forEach((asset: any) => {
            loader.spritesheet(asset[this.enum.KEY], this.spritesheets.address + asset[this.enum.FILE_NAME],
                asset[this.enum.FRAME_WIDTH], asset[this.enum.FRAME_HEIGHT]);
        });
    }

    private loadAudio(loader: Phaser.Loader) {
    }
}

class PhaserGame {
    // Phaser.js
    protected game: Phaser.Game;
    
     // Create game world.
    constructor(assets: ASSET_LOADER, protected constants: CONSTANTS.Game) {
        var gc = this.constants;
        this.game = new Phaser.Game(gc.width, gc.height, Phaser.AUTO, gc.renderer, {
            preload: () => { assets.load(this.game.load); },
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
