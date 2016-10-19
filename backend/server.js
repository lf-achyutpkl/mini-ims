//modules
var express    =   require('express');
var server     =    express();
var bodyParser = require('body-parser');
var requireDir = require('require-dir');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

var port = process.env.PORT || 3000;
server.use(express.static(__dirname + '/public'));

var routes = requireDir('./app/routes');
for (var i in routes) server.use('/', routes[i]);

server.listen(port);

exports = module.exports = server;

