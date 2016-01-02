
var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var port = 3000;

// to load css page 
app.use(express.static(__dirname + '/views/static'));
app.use(bodyParser.urlencoded( {
	extended: true
})); 
app.use(bodyParser.json()); 

var routes = require('./routes.js')(app);

app.listen(port);
console.log("Server is up on port" + port);
