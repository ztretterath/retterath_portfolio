//Express
var express = require('express');
var app = express();
var path = require('path');

//Debugging
var logger = require('morgan');
app.use(logger('dev'));

//Static Assets
app.use(express.static(__dirname + '/public'));

//Config heroku
// var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/wanderluster';
// mongoose.connect(mongoURI);

app.listen(process.env.PORT || 3000, function(){
  console.log("=============================");
  console.log("SERVER LISTENING ON PORT 3000");
  console.log("=============================");
});
