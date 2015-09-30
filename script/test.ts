/// <reference path="reference.ts"/>

// This code demonstrates polling for touch or mouse clicks
class SimpleGame {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload
        });
    }

    preload() {
        var loader = this.game.load.image("jet", "assets/image/star.png");
    }

    create() {
        this.jetSprite = this.game.add.sprite(50, 50, "jet");

        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;

        // You can handle mouse input by registering a callback as well
        // The following registers a callback that will be called each time the mouse is moved
        this.game.input.addMoveCallback((pointer: Phaser.Pointer, x: number, y: number, downState: boolean) => {
            this.jetSprite.position.set(x, y);
        }, this);

        // This one registers a mouse click handler that will be called
        this.game.input.onHold.add(SimpleGame.prototype.mouseDown, this);
    }

    mouseDown(event: MouseEvent) {
        //alert("Mouse is down " + event.button);
        console.log(this.jetSprite.x);
    }

}

window.onload = () => {
    var game = new SimpleGame();
};