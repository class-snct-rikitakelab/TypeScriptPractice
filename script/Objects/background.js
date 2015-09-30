/// <reference path="../reference.ts"/>
var Background = (function () {
    function Background(game, constants) {
        this.game = game;
        this.constants = constants;
        this.game.add.sprite(0, 0, this.constants.images["background"]);
    }
    return Background;
})();
//# sourceMappingURL=Background.js.map