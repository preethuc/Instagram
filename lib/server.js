"use strict";

var app = require("../src/app");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Insta-Data');
mongoose.connection.once('open', function () {
  console.log('DB connected');
}).on('error', function (error) {
  console.log('error is:', error);
});

//server
app.listen(3000, function () {
  return console.log("Listening on the port 3000");
});