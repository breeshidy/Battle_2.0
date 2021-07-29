const express = require("express");
const router = express.Router();
const Player = require("../src/player.js");
const Game = require("../src/game.js")

let player = new Player();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  res.render("two_players");
});

router.post("/two_players", (req, res) => {
  let player1
  let player2
  if(!req.app.locals.started){
    player1 = new Player(req.body.player1Name);
    player2 = new Player(req.body.player2Name);
    req.app.locals.game = new Game(player1,player2)
    req.app.locals.started = true
  }
  else{
    req.app.locals.game.attack()
    player1 = req.app.locals.game.player1
    player2 = req.app.locals.game.player2
  }

  res.render("game_start_2p.ejs", {
    player1Name: player1.name,
    player2Name: player2.name,
    hpPlayer1: player1.health,
    hpPlayer2: player2.health,
  });
});

module.exports = router;
