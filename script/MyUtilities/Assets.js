/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserFirstAssets = (function (_super) {
    __extends(PhaserFirstAssets, _super);
    function PhaserFirstAssets() {
        _super.apply(this, arguments);
        this.images = {
            address: "assets/image/",
            assets: [
                ["sky", "sky.png"],
                ["ground", "platform.png"],
                ["star", "star.png"],
            ],
        };
        this.spritesheets = {
            address: "assets/image/",
            assets: [
                ["dude", "dude.png", new CONSTANTS.Player().width, new CONSTANTS.Player().height],
            ]
        };
    }
    return PhaserFirstAssets;
})(ASSET_LOADER);
//# sourceMappingURL=Assets.js.map