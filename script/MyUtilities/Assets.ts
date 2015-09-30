/// <reference path="../reference.ts"/>

class PhaserFirstAssets extends ASSET_LOADER {
    protected images: { address: string, assets: [string, string][] } = {
        address: "assets/image/",
        assets: [
            ["sky", "sky.png"],
            ["ground", "platform.png"],
            ["star", "star.png"],
        ],
    }

    protected spritesheets: { address: string, assets: [string, string, number, number][] } = {
        address: "assets/image/",
        assets: [
            ["dude", "dude.png", new CONSTANTS.Player().width, new CONSTANTS.Player().height],
        ]
    }
}