var express = require('express');
var port =  process.env.PORT || 5000
var app = express()
var bodyParser = require('body-parser')

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,token')
  if (req.method == 'OPTIONS') {
    res.send(200).end()
  } else {
    next()
  }
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./app/routes')
routes(app)

app.use(express.static(`./public`));

app.listen(port, () => {
    console.log('running port', port)
})