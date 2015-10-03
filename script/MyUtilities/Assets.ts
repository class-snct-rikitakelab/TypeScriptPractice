﻿/// <reference path="../reference.ts"/>

class PhaserFirstAssets extends AssetLoader {
    protected images: { address: string, assets: [string, string][] } = {
        address: "assets/image/",
        assets: [
            ["sky", "sky.png"],
            ["ground", "platform.png"],
            ["star", "star.png"],
            ["preloadBar", "preloadBar.png"],
            ["a", "baddie.png"],
            ["b", "diamond.png"],
            ["c", "firstaid.png"],
        ],
    }

    protected spritesheets: { address: string, assets: [string, string, number, number][] } = {
        address: "assets/image/",
        assets: [
            ["dude", "dude.png", new CONSTANTS.Player().width, new CONSTANTS.Player().height],
        ]
    }

    protected audio: { address: string, assets: [string, string[]][] } = {
        address: "assets/sound/",
        assets: [
            ["jump", ["jump.mp3", ]],
            ["bgm", ["once.mp3", ]],
        ]
    }
}