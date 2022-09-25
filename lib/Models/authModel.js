"use strict";

var _password;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require("mongoose");
var slugify = require("slugify");
var validator = require("validator");
var bcrypt = require('bcryptjs');

var authSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true
    // unique: true,
  },
  email: {
    type: String,
    required: [true, "User must have a emailId"],
    unique: [true, "User mailId must be unique"],
    //validator
    validate: [validator.isEmail, "please provide a valid emailId"]
  },
  mobileNumber: {
    type: Number
  },
  fullName: {
    type: String,
    required: true
    //own validators
    // validate: [validator.isAlpha, "User name must only contains alphabets"],

  },
  password: (_password = {
    type: String,
    unique: true,
    required: [true, 'User must have a password']
  }, _defineProperty(_password, "unique", [true, 'User must have unique password']), _defineProperty(_password, "minLength", 8), _password)
});

var Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;