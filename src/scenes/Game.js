import Phaser from "phaser";
// import mp3 from "../assets/Orbital Colossus.mp3";
import background from "../assets/hyades-800x600.jpg";
// import tiles from "../assets/scifi_platformTiles_32x32.png";
// import star from "../assets/star.png";
// import { accelerate, decelerate } from "../utils";
import chick from "../assets/starman-final-xsm.png";
import crate from "../assets/block.png";
//

let block;
let cursors;
let player;
let wall1 = [];
let wall2 = [];

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "game" });
    window.GAME = this;
  },
  preload: function preload() {
    this.load.spritesheet("player", chick, {
      frameWidth: 100,
      frameHeight: 248,
    });
    this.load.image("background", background);
    this.load.image("block", crate);
  },
  create: function create() {
    cursors = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, "background");

    player = this.physics.add.sprite(200, 200, "player");
    player.setBounce(0.2);
    player.setCollideWorldBounds(false);

    block = this.physics.add.sprite(95, 95, "block");
    block.setCollideWorldBounds(false);

    var rnd = Math.round(Math.random() * 4);

    for (var x = 0; x < 10; x++) {
      wall1[x] = this.physics.add
        .image(800, -50 + 100 * (x >= rnd ? x + 2 : x), "block")
        .setImmovable(true)
        .setVelocityX(-200);
      wall1[x].body.setAllowGravity(false);
    }

    rnd = Math.round(Math.random() * 4);

    for (var x = 0; x < 10; x++) {
      wall2[x] = this.physics.add
        .image(1200, -50 + 100 * (x >= rnd ? x + 2 : x), "block")
        .setImmovable(true)
        .setVelocityX(-200);
      wall2[x].body.setAllowGravity(false);
    }

    const processCollision = (player, wall) => {
      this.scene.start("diescreen");
    };

    this.physics.add.collider(wall1, player, processCollision);
    this.physics.add.collider(wall2, player, processCollision);
  },
  update: function () {
    if (
      (cursors.left.isDown && cursors.right.isDown) ||
      (!cursors.left.isDown && !cursors.right.isDown)
    ) {
      player.body.setVelocityX(0);
    } else if (cursors.left.isDown) {
      player.body.setVelocityX(-200);
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(200);
    }

    if (cursors.space.isDown || cursors.up.isDown) {
      player.body.setVelocityY(-500);
    }

    if (wall1[0].x < -25) {
      repositionWall(wall1);
    }
    if (wall2[0].x < -25) {
      repositionWall(wall2);
    }

    if (player.y >= 800) {
      this.scene.start("diescreen");
    }
  },
});

function repositionWall(wall) {
  var rnd = Math.round(Math.random() * 4);

  wall.forEach((block, x) => {
    block.body.x = 800;
    block.body.y = 2.5 + 100 * (x >= rnd ? x + 2 : x);
  });
}
