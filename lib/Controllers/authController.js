"use strict";

var Auth = require("../Models/authModel");
var jwt = require("jsonwebtoken");
var catchAsync = require("../../utils/catchAsync");
var secretMessage = "Preethu@241";
var expireMessage = "30d";

exports.signup = catchAsync(async function (req, res, next) {
  var newUser = await Auth.create({
    userName: req.body.userName,
    fullName: req.body.fullName,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    password: req.body.password
  });
  var token = jwt.sign({ id: newUser._id }, secretMessage, {
    expiresIn: expireMessage
  });
  res.status(201).json({
    status: "success",
    token: token,
    data: {
      user: newUser
    }
  });
});