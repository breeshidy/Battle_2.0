const express = require("express");
const router = express.Router();
const Player = require("../src/player.js");

let player = new Player();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  res.render("two_players");
});

router.post("/two_players", (req, res) => {
  // console.log(req);
  player1Name = req.body.player1Name;
  player2Name = req.body.player2Name;
  hpPlayer1 = player.health;
  hpPlayer2 = player.health;
  res.render("game_start_2p.ejs", {
    player1Name: player1Name,
    player2Name: player2Name,
    hpPlayer1: hpPlayer1,
    hpPlayer2: hpPlayer2,
  });
});

module.exports = router;
