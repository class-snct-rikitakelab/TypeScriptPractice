/// <reference path="../reference.ts"/>
var Score = (function () {
    function Score(game, constants) {
        this.game = game;
        this.constants = constants;
        this.score = 0;
    }
    Score.prototype.scoreUp = function () {
        this.score += this.constants.point;
    };
    Score.prototype.getScore = function () {
        return this.score;
    };
    return Score;
})();
//# sourceMappingURL=Score.js.map