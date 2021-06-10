const express = require("express");
const app = express();
const port = 3000;
const letters = require("./letters");
const ml = require("./ml");

ml.trainData();
var jsonParser = express.json();

app.post("/api/letters/recognition", jsonParser, (req, res) => {
  var arg = req.body.letter;
  if (arg) {
      var letter = '';
      letter = ml.findLetter(arg);

    if (letter && letter!=null) {
      res.send(`I found it! It's '${letter}'`);
    } else {
      res.send(`I couldn't find it.`);
    }
  } else {
    res.send("You need to send the ASCII code via `letter` parameter");
  }
});

ml.findLetter(".#####." +
"#.....#" +
"#.....#" +
"#######" +
"#.....#" +
"#.....#" +
"#.....#"
);

app.get("/api", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
