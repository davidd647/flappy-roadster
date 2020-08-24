import Phaser from "phaser";
import MainMenu from "./scenes/MainMenu";
import Game from "./scenes/Game";
import DieScreen from "./scenes/DieScreen";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1500, x: 0 },
    },
  },
  scene: [MainMenu, Game, DieScreen],
};

var game = new Phaser.Game(config);
