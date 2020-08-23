import backgroundOpaque from "../assets/hyades-800x600.jpg";
import backgroundAlpha from "../assets/hyades-800x600.png";

let bg1, bg2, bg3, bg4;

const background = {
  _preLoad: function (that) {
    that.load.image("backgroundOpaque", backgroundOpaque);
    that.load.image("backgroundAlpha", backgroundAlpha);
  },
  _create: function (that) {
    bg1 = that.physics.add.image(400, 300, "backgroundOpaque");
    bg1.setCollideWorldBounds(false);
    bg1.body.setVelocityX(-5);
    bg1.body.setAllowGravity(false);

    bg2 = that.physics.add.image(1200, 300, "backgroundOpaque");
    bg2.setCollideWorldBounds(false);
    bg2.body.setVelocityX(-5);
    bg2.body.setAllowGravity(false);

    bg3 = that.physics.add.image(0, 300, "backgroundAlpha");
    bg3.setCollideWorldBounds(false);
    bg3.body.setVelocityX(-10);
    bg3.body.setAllowGravity(false);

    bg4 = that.physics.add.image(800, 300, "backgroundAlpha");
    bg4.setCollideWorldBounds(false);
    bg4.body.setVelocityX(-10);
    bg4.body.setAllowGravity(false);
  },
  _update: function () {
    // console.log("updateeeee");
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
};

export default background;

// let bg1, bg2, bg3, bg4;

// const backgroundJS = function () {
//   const preload = function (that) {
//     that.load.image("background", background);
//     that.load.image("backgroundAlpha", backgroundAlpha);
//   };
//   const create = function (that) {
//     bg1 = that.physics.add.image(400, 300, "background");
//     bg1.setCollideWorldBounds(false);
//     bg1.body.setVelocityX(-5);
//     bg1.body.setAllowGravity(false);

//     bg2 = that.physics.add.image(1200, 300, "background");
//     bg2.setCollideWorldBounds(false);
//     bg2.body.setVelocityX(-5);
//     bg2.body.setAllowGravity(false);

//     bg3 = that.physics.add.image(0, 300, "backgroundAlpha");
//     bg3.setCollideWorldBounds(false);
//     bg3.body.setVelocityX(-10);
//     bg3.body.setAllowGravity(false);

//     bg4 = that.physics.add.image(800, 300, "backgroundAlpha");
//     bg4.setCollideWorldBounds(false);
//     bg4.body.setVelocityX(-10);
//     bg4.body.setAllowGravity(false);
//   };
//   const update = function () {
//     if (bg1.x < -400) {
//       bg1.x = 1200;
//     }
//     if (bg2.x < -400) {
//       bg2.x = 1200;
//     }
//     if (bg3.x < -400) {
//       bg3.x = 1200;
//     }
//     if (bg4.x < -400) {
//       bg4.x = 1200;
//     }
//   };
// };

// export default backgroundJS;
