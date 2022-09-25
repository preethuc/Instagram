const Auth = require("../Models/authModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../../utils/catchAsync");
const secretMessage = "Preethu@241";
const expireMessage = "30d";

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await Auth.create({
    userName: req.body.userName,
    fullName: req.body.fullName,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    password: req.body.password,
  });
  const token = jwt.sign({ id: newUser._id }, secretMessage, {
    expiresIn: expireMessage,
  });
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});
