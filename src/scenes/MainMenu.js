import Phaser from "phaser";

let graphics;
let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "mainmenu" });
  },
  create: function () {
    cursors = this.input.keyboard.createCursorKeys();

    graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.fillRect(0, 0, 800, 600);

    this.add.text(270, 300, "A large mass is pulling you off-course!");
    this.add.text(270, 315, "Use rocket boosters to avoid asteroids!");

    this.add.text(270, 345, "Move with up with the space bar.");
    this.add.text(270, 360, "Press space to start.");
  },
  update: function () {
    if (cursors.space.isDown) {
      this.scene.start("game");
    }
  },
});
