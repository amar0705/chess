let CHESSAPP = {};
require("dotenv").config();

CHESSAPP.globalSettings = {
  imageDir: "images/",
  debug: false,
  live: false,
  port: process.env.PORT,
  host: "http://livechess.herokuapp.com",
};

let gameSettings = {
  containerID: "container",
  online: true,
  preferredColor: false,
};
