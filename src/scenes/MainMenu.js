import Phaser from "phaser";

import starman from "../assets/starman-final-sm.png";

import background from "./background";

let graphics;
let cursors;
let prePlayer;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "mainmenu" });
  },
  preload: function () {
    background._preLoad(this);

    this.load.spritesheet("prePlayer", starman, {
      frameWidth: 100,
      frameHeight: 248,
    });
  },
  create: function () {
    cursors = this.input.keyboard.createCursorKeys();

    background._create(this);

    prePlayer = this.physics.add.sprite(200, 200, "prePlayer");
    prePlayer.setBounce(0.2);
    prePlayer.setCollideWorldBounds(false);
    prePlayer.body.setAllowGravity(false);
    var tween = this.tweens.add({
      targets: prePlayer,
      x: 200,
      y: 160,
      ease: "cubic.inOut",
      duration: 3000,
      yoyo: true,
      loop: -1,
    });

    graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.85);
    graphics.fillRect(250, 200, 450, 215);

    this.add.text(270, 225, "        - FLAPPY ROADSTER -            ");
    this.add.text(270, 270, "         You are Star Man!             ");
    this.add.text(270, 285, "Elon has launched you towards Mars, but");
    this.add.text(270, 300, "the gravitational pull of a large mass ");
    this.add.text(270, 315, "is pulling you off-course!");
    this.add.text(270, 330, "Use rocket boosters to avoid asteroids!");

    this.add.text(270, 360, "Move with up with the space bar.");
    this.add.text(270, 375, "Press space to start.");
  },
  update: function () {
    if (cursors.space.isDown) {
      this.scene.start("game");
    }

    background._update();
  },
});
