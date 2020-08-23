import Phaser from "phaser";

import background from "./background";

let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "diescreen" });
  },
  preload: function () {
    background._preLoad(this);
  },
  create: function (timeStayedAlive) {
    cursors = this.input.keyboard.createCursorKeys();

    background._create(this);

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

    background._update();
  },
});
