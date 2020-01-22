// import all require packages

var express = require('express');
var expobj = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var mongoose = require('mongoose');

// import database configuration file 

var db = require('./backendconfig/db');

// define the port number 

var port = process.env.PORT || 8080;

expobj.use(bodyParser.json());
expobj.use(bodyParser.json({ type : 'application/vnd.api/json'}));
expobj.use(bodyParser.urlencoded({ extended : true}));
expobj.use(methodOverride('X-HTTP-Method-Override'));

expobj.use(express.static(__dirname + '/public'));

require('./backendapp/routes');

expobj.listen(port);

console.log("Server has been started");
console.log("To check the port visit http://localhost"+port+"/");

exports = module.exports = expobj;

