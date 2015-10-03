/// <reference path="../reference.ts"/>

class Score extends Model{
    private score: number = 0;

    constructor(game: Phaser.Game, constants: CONSTANTS.Score) {
        super(game, constants);
    }

    scoreUp() {
        this.score += this.constants.point;
    }

    getScore(): number {
        return this.score;
    }
}