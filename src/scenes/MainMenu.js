import Phaser from "phaser";

import background from "../assets/hyades-800x600.jpg";
import backgroundAlpha from "../assets/hyades-800x600.png";
import starman from "../assets/starman-final-sm.png";

let graphics;
let cursors;
let bg1, bg2, bg3, bg4;
let prePlayer;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "mainmenu" });
  },
  preload: function () {
    this.load.image("background", background);
    this.load.image("backgroundAlpha", backgroundAlpha);
    this.load.spritesheet("prePlayer", starman, {
      frameWidth: 100,
      frameHeight: 248,
    });
  },
  create: function () {
    cursors = this.input.keyboard.createCursorKeys();

    bg1 = this.physics.add.image(400, 300, "background");
    bg1.setCollideWorldBounds(false);
    bg1.body.setVelocityX(-5);
    bg1.body.setAllowGravity(false);

    bg2 = this.physics.add.image(1200, 300, "background");
    bg2.setCollideWorldBounds(false);
    bg2.body.setVelocityX(-5);
    bg2.body.setAllowGravity(false);

    bg3 = this.physics.add.image(0, 300, "backgroundAlpha");
    bg3.setCollideWorldBounds(false);
    bg3.body.setVelocityX(-10);
    bg3.body.setAllowGravity(false);

    bg4 = this.physics.add.image(800, 300, "backgroundAlpha");
    bg4.setCollideWorldBounds(false);
    bg4.body.setVelocityX(-10);
    bg4.body.setAllowGravity(false);

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
    this.add.text(270, 270, "         Your are Star Man!            ");
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

    if (bg1.x < -400) {
      bg1.x = 1200;
    }
    if (bg2.x < -400) {
      bg2.x = 1200;
    }
    if (bg3.x < -400) {
      bg3.x = 1200;
    }
    if (bg4.x < -400) {
      bg4.x = 1200;
    }
  },
});
