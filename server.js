
var express = require('express')
var app     = express();
var http    = require('http').Server(app);
const path = require('path')
const PORT = process.env.PORT || 5000
app.use(express.static(__dirname + '/public'));

express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
