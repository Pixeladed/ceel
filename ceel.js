#!/usr/bin/env node

var fs = require('fs');
var http = require('http');
var finalhandler = require('finalhandler');
var static = require('serve-static');
var path = process.cwd(),customHTML;
if (process.argv[2].substr(-5,5) == '.html') {
	customHTML = process.argv[2];
} else {
	path = process.argv[2];
}
var serve = static(path, {'index': ['index.html', 'index.htm',customHTML]})
var server = http.createServer(function(req, res){
	var done = finalhandler(req, res);
  	serve(req, res, done);
}).listen(8000,'0.0.0.0');
console.log('Ceel of '+path+' running at 0.0.0.0:8000');