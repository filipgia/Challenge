
const express = require('express')
const app = express()
const port = 3000
const letters = require('./letters');

var jsonParser = express.json();

app.post('/api/letters/recognition', jsonParser,(req, res) => {

    if (req.body.letter) {
        var letter = '';
        for (const key in letters) {
            if (Object.hasOwnProperty.call(letters, key)) {
                const l = letters[key];
                if (req.body.letter == l) {
                    letter = key;
                    break;
                }
            }
        }


        if (letter) {
            res.send(`I found it!!. It's '${letter}'`);
        } else {
            res.send(`I couldn't find it.`);
        }

    } else {
        res.send('You need to send the ASCII code via `letter` parameter');
    }

})

console.log(letters);

app.get('/api', (req, res) => {
    res.send('API is working');
})

app.listen(port, () =>{
    console.log('App listening on http://localhost:${port}');
})