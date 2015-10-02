/// <reference path="../reference.ts"/>

class Score {
    private score: number = 0;

    constructor(private game: Phaser.Game, private constants: CONSTANTS.Score) {
    }

    scoreUp() {
        this.score += this.constants.point;
    }

    getScore(): number {
        return this.score;
    }
}