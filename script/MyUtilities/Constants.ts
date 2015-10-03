/// <reference path="../reference.ts"/>

// We have to consider order... due to JavaScript code.

namespace CONSTANTS {
    export class Game{
        width: number = 800;
        height: number = 600;
        renderer: string = "content";
    }

    export interface SpriteObject {
        width: number;
        height: number;
        x: number;
        y: number;
        initImage: string;
        images: { [name: string]: string };
    }

    export class Background implements SpriteObject {
        width = new Game().width;
        height = new Game().height;
        x = 0;
        y = 0;
        initImage = "background";
        images: { [name: string]: string } = {
            background: "sky",
        };
    }

    export class Ground implements SpriteObject{
        width = new Game().width;
        height = 64;
        x = 0;
        y = new Game().height - this.height;
        initImage = "ground";
        images: { [name: string]: string } = {
            ground: "ground",
        };
        immovable: boolean = true;
    } 

    export class Ledge1 extends Ground {
        width = 400;
        height = 32;
        x = 400;
        y = 400;
    }

    export class Ledge2 extends Ledge1 {
        x = -150;
        y = 250;
    }

    export class Player implements SpriteObject{
        width = 32;
        height = 48;
        x = 32
        y = new Game().height - 150;
        initImage = "player";
        images: { [name: string]: string } = {
            player: "dude",
        };
        collideWorldBounce: boolean = true;
        bounceV: number = 0.2;
        gravityV: number =  700;
        velocityH: number = 300;
        velocityV: number = 600;
        ScoreFont: Object = { fontSize: '12px', fill: '#000' };
        correctStarEvent: string = "correctStarEvent";
    }

    export class Star implements SpriteObject {
        width = 30;
        height = 30;
        x = 70;
        y = 0;
        initImage = "star";
        images: { [name: string]: string } = {
            star: "star",
        }
        collideWorldBounce: boolean = true;
        bounceV: number = 0.7 + Math.random() * 0.2;
        gravityV: number = 50;
    }

    export class Score {
        point: number = 10;
    }
}