// requirements
var express = require('express'),
    app = express();
    mongoose = require('mongoose');


app.get ('/', function(req,res){
	response.sendFile(__dirname + 'index.html');
});
// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});