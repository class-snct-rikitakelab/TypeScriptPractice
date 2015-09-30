/// <reference path="../reference.ts"/>

class PhaserGroupObject {
    protected object: any;

    constructor(group: Phaser.Group, private constants: CONSTANTS.Object, immovable?: boolean) {
        // Create the object in the platforms.
        this.object = group.create(this.constants.x, this.constants.y,
            this.constants.images[this.constants.initImage]);
        
        // Fix the position and privent sinking.
        this.object.body.immovable = immovable;

        // Set size of object.
        this.setSize(this.constants.width, this.constants.height);
    }

    setSize(width: number, height: number): void {
        this.object.width = width;
        this.object.height = height;
    }

    setPosition(x: number, y: number): void {
        this.object.x = x;
        this.object.y = y;
    }
}

class Star {
    private object: Phaser.Sprite;
    private collisionObjects: Object[] = [];
    private overlapObject: Phaser;

    constructor(private game: Phaser.Game, private constants: CONSTANTS.Object, ...collisionObjects: Object[]) {
        this.object = game.add.sprite(this.constants.x, this.constants.y,
            this.constants.images[this.constants.initImage]);
        this.collisionObjects = collisionObjects;
        this.setSize(this.constants.width, this.constants.height);
        this.setPhysical();
    }

    setSize(width: number, height: number): void {
        this.object.width = width;
        this.object.height = height;
    }

    setPosition(x: number, y: number): void {
        this.object.x = x;
        this.object.y = y;
    }
    
    private setPhysical() {
        this.game.physics.arcade.enable(this.object);
        this.object.body.collideWorldBounds = true;
        this.object.body.gravity.y = 20;
        this.object.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    update(score: number) :number {
        this.collision();
        var get = this.game.physics.arcade.overlap(this.object, this.overlapObject, this.overlapFunction, null, this);
        if (get) return score + 10;
        return score;
    }

    addCollision(object: Object) {
        this.collisionObjects.push(object);
    }

    private collision() {
        for (var object of this.collisionObjects) {
            this.game.physics.arcade.collide(this.object, object);
        }
    }
    
    setOverlapObject(object: Phaser) {
        this.overlapObject = object;
    }

    overlapFunction() {
        this.object.kill();
    }
}