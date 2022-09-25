const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");
const bcrypt = require('bcryptjs');


const authSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    // unique: true,
  },
  email: {
    type: String,
    required: [true, "User must have a emailId"],
      unique: [true, "User mailId must be unique"],
    //validator
    validate: [validator.isEmail, "please provide a valid emailId"],
  },
  mobileNumber: {
    type: Number,
  },
  fullName: {
      type: String,
      required: true,
      //own validators
      // validate: [validator.isAlpha, "User name must only contains alphabets"],
    
  },
  password: {
    type: String,
    unique: true,
    required:[true,'User must have a password'],
    unique: [true,'User must have unique password'],
    minLength:8
  },
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;