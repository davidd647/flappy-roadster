import Phaser from "phaser";

import background from "../assets/hyades-800x600.jpg";
import backgroundAlpha from "../assets/hyades-800x600.png";

let graphics;
let cursors;
let bg1, bg2, bg3, bg4;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "diescreen" });
  },
  preload: function () {
    this.load.image("background", background);
    this.load.image("backgroundAlpha", backgroundAlpha);
  },
  create: function (timeStayedAlive) {
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

    this.add.text(
      260,
      300,
      "Your score was: " + Math.round(timeStayedAlive) * 100
    );
    this.add.text(260, 315, "Press space to restart.");
  },
  update: function () {
    if (cursors.space.isDown) {
      this.scene.start("mainmenu");
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
