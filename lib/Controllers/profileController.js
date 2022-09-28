"use strict";

var AppError = require("../../utils/AppError");
var catchAsync = require("../../utils/catchAsync");
var Profile = require("../Models/profileModel");

exports.createProfile = catchAsync(async function (req, res, next) {
  var newProfile = await Profile.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newProfile: newProfile
    }
  });
});