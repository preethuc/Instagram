"use strict";

var express = require("express");
var morgan = require("morgan");

var app = express();

var authRoute = require("../src/Routes/authRoute");

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log("middleware working..!");
//   next();
// });
app.use("/api/insta", authRoute);

module.exports = app;