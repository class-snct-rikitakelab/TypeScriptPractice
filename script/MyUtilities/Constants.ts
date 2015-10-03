/// <reference path="../reference.ts"/>

// We have to consider order... due to JavaScript code.

namespace CONSTANTS {
    export class Game{
        width: number = 800;
        height: number = 600;
        renderer: string = "content";
    }

    export class Background{
        initImage: string = "background";
        images: {[name: string]: string} = {
            background: "sky",
        };
    }

    export interface SpriteObject {
        width: number;
        height: number;
        x: number;
        y: number;
        initImage: string;
        images: { [name: string]: string };
    }

    export class Ground implements SpriteObject{
        width: number = new Game().width;
        height: number = 64;
        x: number = 0;
        y: number = new Game().height - this.height;
        initImage: string = "ground";
        images: { [name: string]: string } = {
            ground: "ground",
        };
        immovable: boolean = true;
    } 

    export class Ledge1 extends Ground {
        width: number = 400;
        height: number = 32;
        x: number = 400;
        y: number = 400;
    }

    export class Ledge2 extends Ledge1 {
        x: number = -150;
        y: number = 250;
    }

    export class Player implements SpriteObject{
        width: number = 32;
        height: number = 48;
        x: number = 32
        y: number = new Game().height - 150;
        initImage: string = "player";
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
        width: number = 30;
        height: number = 30;
        x: number = 70;
        y: number = 0;
        initImage: string = "star";
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