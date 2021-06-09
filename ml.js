const brain = require("brain.js");
const letters = require("./letters");

module.exports.findLetter = function(hashtags) {
  function normalize(string) {
    return string.split("").map(toNumber);
  }

  function toNumber(character) {
    return character === "#" ? 1 : 0;
  }
  console.log(normalize(letters.a));

  const net = new brain.NeuralNetwork();
  const trainingData = [
    { input: normalize(letters.a), output: { a: 1 } },
    { input: normalize(letters.b), output: { b: 1 } },
    { input: normalize(letters.c), output: { c: 1 } },
    { input: normalize(letters.aWithError), output: { a: 1 } }
  ];

  net.train(trainingData, {
    errorThresh: 0.025
  });

  const result = brain.likely(normalize(
        ".#####." +
        "#.....#" +
        "#.....#" +
        "###.###" +
        "#.....#" +
        "#.....#" +
        "#.....#"
    ),net);
  
  return console.log(result);
};
