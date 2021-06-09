const brain = require('brain.js')
const letters = require('./letters');



module.exports.findLetter = function(hashtags){


function normalize(string){
        return string.split('').map(toNumber);
    }

function toNumber(character){
        return character === '#' ? 1 : 0;
    }
 console.log(normalize(letters.a));
}


