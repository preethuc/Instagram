const Auth = require("../Models/authModel");
const Profile = require("../Models/profileModel")
const jwt = require("jsonwebtoken");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/AppError");
// const validationResult = require("express-validator");



//signup
exports.signup = catchAsync(async (req, res, next) => {
  // res.send('hiii')
  // const newUser = await Auth.create({
  //   // userName: req.body.userName,
  //   fullName: req.body.fullName,
  //   mobileNumber: req.body.mobileNumber,
  //   email: req.body.email,
  //   password: req.body.password,
  // //   active: req.body.active,
  // });
  const newUser = await Auth.create(req.body)
  // const token = jwt.sign({ id: newUser._id });
  res.status(201).json({
    status: "success",
    // token,
    data: {
      user: newUser,
    },
  });
});

//login
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body
  // const errors = validationResult(req);
  // Checking validation errors
  // if (!errors.isEmpty()) {
  //   return next(new AppError(errors.array()[0].msg, 400));
  // }
  // const user = await Auth.findOne({
  //   email: req.body.email,
  //   // password: req.body.password
  // }).select("+password");

  const user = await Auth.findOne({ email }).select('+password')
  // if (
  //   !user ||
  //   !(await user.comparePassword(req.body.password, user.password))
  // ) {
  //   return next(new AppError("Invalid email or password", 400));
  // }
  const userProfile = Profile.find()
  if(password === user.password){
    res.status(200).json({
      message: "WELCOME TO insta",
      The_Profile: userProfile
    })
  }else{
    // return next(new AppError('Invalid Email or Password', 401))
    res.status(401).json({
        message:"Invalid Email or Password"
  })
}

  // const profile = await createProfile(user._id, user.email);
  // const token = generateToken(
  //   {
  //     id: user._id,
  //   },
  //   process.env.JWT_LOGIN_TOKEN,
  //   "30d"
  // );

  // res.status(200).json({
  //   status: "success",
  //   data: 
  //     // token,
  //     "account created"  });
});
