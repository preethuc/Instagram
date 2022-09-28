"use strict";

var express = require("express");
var morgan = require("morgan");
var globalErrorHandler = require("../src/Controllers/errorController");
// const AppError = require('./utils/AppError')

var app = express();

var authRoute = require("../src/Routes/authRoute");
var profileRoute = require("../src/Routes/profileRoute");

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

app.use(function (req, res, next) {
  console.log("middleware working..!");
  next();
});

app.use('/api/insta', authRoute);
app.use('/api/instagram', profileRoute);

//error handling function
// app.all("*", (req, res, next) => {
//   next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
// });
// app.use(globalErrorHandler);

module.exports = app;