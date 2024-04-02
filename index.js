const express = require('express')
const bodyParser = require('body-parser')

// declare a new express app
const app = express()
app.use(bodyParser.json())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get('/plugins/example', (req, res) => {
    res.send('working');
});


app.listen(3000, () => {
    console.log('app listening on port 3000');
});
