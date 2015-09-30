/// <reference path="../reference.ts"/>

class Player {
    public sprite: Phaser.Sprite;
    private collisionObjects: Object[];
    private cursors: Phaser.CursorKeys;

    constructor(private game: Phaser.Game, private constants: CONSTANTS.Player, ...collisionObjects: Object[]) {
        this.sprite = this.game.add.sprite(this.constants.x, this.constants.y,
            this.constants.images[this.constants.initImage]);
        this.collisionObjects = collisionObjects;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.setAnimation();
        this.setPhysical();
    }

    update() {
        this.collision();

        this.sprite.body.velocity.x = 0;
        
        if (this.cursors.left.isDown) {
            //  左へ移動
            this.sprite.body.velocity.x = -150;

            this.sprite.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            //  右へ移動
            this.sprite.body.velocity.x = 150;

            this.sprite.animations.play('right');
        }
        else {
            //  そのまま
            this.sprite.animations.stop();

            this.sprite.frame = 4;
        }
   
        //  上矢印キーがおされて、かつプレイヤーが地面についていたらジャンプ
        if (this.cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.body.velocity.y = -350;
        }
        
    }

    setPhysical() {
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 300;
    }

    setAnimation() {
        this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
        this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
    }

    addCollision(object: Object) {
        this.collisionObjects.push(object);
    }

    private collision() {
        for (var object of this.collisionObjects) {
            this.game.physics.arcade.collide(this.sprite, object);
        }
    }
}