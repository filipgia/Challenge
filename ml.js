const brain = require("brain.js");
const letters = require("./letters");

module.exports.findLetter = function (hashtags) {
  //normalizing the data for faster training
  function normalize(string) {
    return string.split("").map(toNumber);
  }

  function toNumber(character) {
    return character === "#" ? 1 : 0;
  }
  

  const net = new brain.NeuralNetwork();
  //preparing the data for training
  const trainingData = [
    { input: normalize(letters.a), output: { a: 1 } },
    { input: normalize(letters.b), output: { b: 1 } },
    { input: normalize(letters.c), output: { c: 1 } },
    { input: normalize(letters.aWithError), output: { a: 1 } }
  ];
//training the data
  net.train(trainingData, {
    errorThresh: 0.0025
  });
//returning the result with highest prob
  const result = brain.likely(normalize(hashtags), net);

  return result;
};
