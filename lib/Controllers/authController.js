"use strict";

var Auth = require("../Models/authModel");
var jwt = require("jsonwebtoken");
var catchAsync = require("../../utils/catchAsync");
var AppError = require("../../utils/AppError");
var validationResult = require("express-validator");

//signup
exports.signup = catchAsync(async function (req, res, next) {
  // res.send('hiii')
  var newUser = await Auth.create(req.body);
  //   userName: req.body.userName,
  //   fullName: req.body.fullName,
  //   mobileNumber: req.body.mobileNumber,
  //   email: req.body.email,
  //   password: req.body.password,
  //   active: req.body.active,
  // });
  var token = jwt.sign({ id: newUser._id });
  res.status(201).json({
    status: "success",
    token: token,
    data: {
      user: newUser
    }
  });
});

//login
exports.login = catchAsync(async function (req, res, next) {
  var errors = validationResult(req);
  //Checking validation errors
  if (!errors.isEmpty()) {
    return next(new AppError(errors.array()[0].msg, 400));
  }
  var user = await Auth.findOne({
    email: req.body.email
  }).select("+password");
  if (!user || !(await user.comparePassword(req.body.password, user.password))) {
    return next(new AppError("Invalid email or password", 400));
  }

  var profile = await createProfile(user._id, user.email);
  var token = generateToken({
    id: user._id
  }, process.env.JWT_LOGIN_TOKEN, "30d");

  res.status(200).json({
    status: "success",
    data: {
      token: token
    }
  });
});