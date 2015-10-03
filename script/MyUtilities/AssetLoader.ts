﻿/// <reference path="../reference.ts"/>

class AssetLoader {
    private preloadBarFile: string = 'assets/image/preloadBar.png'

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

    protected audio: { address: string, assets: [string, string[]][] } = {
        address: "",
        assets: [
            ["", []]
        ]
    }

    constructor() {
    }

    load(game: Phaser.Game) {
        var loader = game.load;
        this.loadImage(loader);
        loader.image("preloadBar", "assets/image/preloadBar");
        game.cache.addImage("preloadBar", "assets/image/preloadBar.png", {});
        var preloadBar = game.add.sprite(400, 100, "preloadBar");
        preloadBar.pivot.x = preloadBar.width / 2;
        preloadBar.pivot.y = preloadBar.height / 2;
        game.load.setPreloadSprite(preloadBar);
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
        this.audio.assets.forEach((asset: any) => {
            asset[this.enum.FILE_NAME] = asset[this.enum.FILE_NAME].map((value: string): string => {
                return this.audio.address + value;
            });
            loader.audio(asset[this.enum.KEY], asset[this.enum.FILE_NAME]);
        });
    }
}