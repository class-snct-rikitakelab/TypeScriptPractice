/// <reference path="../reference.ts"/>

// We have to consider order...

namespace CONSTANTS {
    export class Game{
        width: number = 800;
        height: number = 600;
        renderer: string = "content";
    }

    export class Background{
        images: {[name: string]: string} = {
            background: "sky",
        };
    }

    export interface Object {
        width: number;
        height: number;
        x: number;
        y: number;
        initImage: string;
        images: { [name: string]: string };
    }

    export class Ground implements Object{
        width: number = new Game().width;
        height: number = 64;
        x: number = 0;
        y: number = new Game().height - this.height;
        initImage: string = "ground";
        images: { [name: string]: string } = {
            ground: "ground",
        };
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

    export class Player implements Object{
        width: number = 32;
        height: number = 48;
        x: number = 32
        y: number = new Game().height - 150;
        initImage: string = "player";
        images: { [name: string]: string } = {
            player: "dude",
        }
    }

    export class Star implements Object {
        width: number = 30;
        height: number = 30;
        x: number = 70;
        y: number = 0;
        initImage: string = "star";
        images: { [name: string]: string } = {
            star: "star",
        }
    }
}