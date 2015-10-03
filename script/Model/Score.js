/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Score = (function (_super) {
    __extends(Score, _super);
    function Score(game, constants) {
        _super.call(this, game, constants);
        this.score = 0;
    }
    Score.prototype.scoreUp = function () {
        this.score += this.constants.point;
    };
    Score.prototype.getScore = function () {
        return this.score;
    };
    return Score;
})(Model);
//# sourceMappingURL=Score.js.map