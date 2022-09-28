"use strict";

var mongoose = require("mongoose");
var validator = require("validator");

var OtpSchema = new mongoose.Schema({
     email: {
          type: String,
          required: [true, "Email is required"],
          trim: true,
          validate: validator.isEmail

     },
     OtpInsta: {
          type: Number,
          required: [true, 'OTP is required'],
          maxlength: 6,
          minlength: 6
     },
     isAuthenticated: {
          type: Boolean,
          default: false
     }
});

var Otp = mongoose.model("Otp", OtpSchema);

module.exports = Otp;