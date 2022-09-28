const AppError = require("../../utils/AppError");
const catchAsync = require("../../utils/catchAsync");
const Profile = require("../Models/profileModel");

exports.createProfile = catchAsync(async (req, res, next) => {
  const newProfile = await Profile.create(req.body);
  res.status(201).json({
    status: "success",
      data: {
         newProfile
      },
  });  
}); 

exports.getProfilebyId = catchAsync(async (req, res, next) => {
  const profile = await Profile.findById(req.params.id)
  res.status(201).json({
    profile
  })
})

exports.updateProfile = catchAsync(async (req, res, next) => {
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json({ 
    updatedProfile
  })
})
