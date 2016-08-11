var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './clients')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(8000, function(){
	console.log("Listening on port 8000");
});