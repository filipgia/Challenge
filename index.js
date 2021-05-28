const express = require('express')
const app = express()
const port = 3000
app.get('/api', (req, res) => {
    res.send('API is working');
})

app.listen(port, () =>{
    console.log('App listening on http://localhost:${port}');
})