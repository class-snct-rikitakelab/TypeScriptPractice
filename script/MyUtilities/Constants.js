/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CONSTANTS;
(function (CONSTANTS) {
    var Game = (function () {
        function Game() {
            this.width = 800;
            this.height = 600;
            this.renderer = "content";
        }
        return Game;
    })();
    CONSTANTS.Game = Game;
    var Background = (function () {
        function Background() {
            this.initImage = "background";
            this.images = {
                background: "sky",
            };
        }
        return Background;
    })();
    CONSTANTS.Background = Background;
    var Ground = (function () {
        function Ground() {
            this.width = new Game().width;
            this.height = 64;
            this.x = 0;
            this.y = new Game().height - this.height;
            this.initImage = "ground";
            this.images = {
                ground: "ground",
            };
            this.immovable = true;
        }
        return Ground;
    })();
    CONSTANTS.Ground = Ground;
    var Ledge1 = (function (_super) {
        __extends(Ledge1, _super);
        function Ledge1() {
            _super.apply(this, arguments);
            this.width = 400;
            this.height = 32;
            this.x = 400;
            this.y = 400;
        }
        return Ledge1;
    })(Ground);
    CONSTANTS.Ledge1 = Ledge1;
    var Ledge2 = (function (_super) {
        __extends(Ledge2, _super);
        function Ledge2() {
            _super.apply(this, arguments);
            this.x = -150;
            this.y = 250;
        }
        return Ledge2;
    })(Ledge1);
    CONSTANTS.Ledge2 = Ledge2;
    var Player = (function () {
        function Player() {
            this.width = 32;
            this.height = 48;
            this.x = 32;
            this.y = new Game().height - 150;
            this.initImage = "player";
            this.images = {
                player: "dude",
            };
            this.collideWorldBounce = true;
            this.bounceV = 0.2;
            this.gravityV = 700;
            this.velocityH = 300;
            this.velocityV = 600;
            this.ScoreFont = { fontSize: '12px', fill: '#000' };
            this.correctStarEvent = "correctStarEvent";
        }
        return Player;
    })();
    CONSTANTS.Player = Player;
    var Star = (function () {
        function Star() {
            this.width = 30;
            this.height = 30;
            this.x = 70;
            this.y = 0;
            this.initImage = "star";
            this.images = {
                star: "star",
            };
            this.collideWorldBounce = true;
            this.bounceV = 0.7 + Math.random() * 0.2;
            this.gravityV = 50;
        }
        return Star;
    })();
    CONSTANTS.Star = Star;
    var Score = (function () {
        function Score() {
            this.point = 10;
        }
        return Score;
    })();
    CONSTANTS.Score = Score;
})(CONSTANTS || (CONSTANTS = {}));
//# sourceMappingURL=Constants.js.map