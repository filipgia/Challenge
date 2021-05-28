const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

const letters = require('./letters');

console.log(letters);

app.get('/api', (req, res) => {
    res.send('API is working');
})

app.listen(port, () =>{
    console.log('App listening on http://localhost:${port}');
})