const express = require("express");


const app = express();
const port = 3000;

app.locals.started = false

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


const indexRouter = require("./routes/index.js");
// const twoPlayerRouter = require("./routes/two_players.js");

app.use("/", indexRouter);
// app.use("/two_players", twoPlayerRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
