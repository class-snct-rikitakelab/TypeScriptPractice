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

        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;

        // First enable the sprite to receive input
        this.jetSprite.inputEnabled = true;
        
        // Then add an event handler for input over
        this.jetSprite.events.onInputOver.add(() => {
            alert("The mouse passed over the sprite!");
        });
    }

}

window.onload = () => {
    var game = new SimpleGame();
};