import Phaser from "phaser";
// import mp3 from "../assets/Orbital Colossus.mp3";
import background from "../assets/hyades-800x600.jpg";
import backgroundAlpha from "../assets/hyades-800x600.png";
// import tiles from "../assets/scifi_platformTiles_32x32.png";
// import star from "../assets/star.png";
// import { accelerate, decelerate } from "../utils";
import starmanXS from "../assets/starman-final-xsm.png";
import crate from "../assets/asteroid-alpha.png";
//

let block;
let cursors;
let player;
let wall1 = [];
let wall2 = [];
let bg1, bg2, bg3, bg4;
let timer;
let actualTime;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "game" });
    window.GAME = this;
  },
  preload: function preload() {
    this.load.spritesheet("player", starmanXS, {
      frameWidth: 62,
      frameHeight: 25,
    });
    this.load.image("background", background);
    this.load.image("block", crate);
  },
  create: function create() {
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

    player = this.physics.add.sprite(200, 200, "player");
    player.setBounce(0.2);
    player.setCollideWorldBounds(false);

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
      this.scene.start("diescreen", actualTime);
    };

    this.physics.add.collider(wall1, player, processCollision);
    this.physics.add.collider(wall2, player, processCollision);
    actualTime = 0;
    timer = this.add.text(550, 50, "Score: 0");
  },
  update: function () {
    actualTime += 0.01;
    timer.setText("Score: " + Math.round(actualTime) * 100);

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

    wall1.forEach((block) => {
      block.angle += 1;
    });

    wall2.forEach((block) => {
      block.angle += 1;
    });

    if (player.y >= 800) {
      this.scene.start("diescreen", actualTime);
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

function repositionWall(wall) {
  var rnd = Math.round(Math.random() * 4);

  wall.forEach((block, x) => {
    block.body.x = 800;
    block.body.y = 2.5 + 100 * (x >= rnd ? x + 2 : x);
  });
}
