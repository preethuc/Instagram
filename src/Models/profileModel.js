const mongoose = require("mongoose");
const validator = require("validator");

// const { isEmail } = validator;

const profileSchema = new mongoose.Schema(
  {
    bio: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      // unique: true,
    //  validator:{validate: [isEmail, "invalid email"],} ,
      required: [true, "email is required"],
    },
    accountType: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    name: {
      type: String,
    },
    userName: {
      type: String,
      required: true
    },
    
    gender: {
      type: String,
      select: false,
    },
    // birthday: {
    //   type: Date,
    //   select: false,
    // },
    followers: {
      type: Map,
      of: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Profile",
        },
      },
      default: {},
    },

    following: {
      type: Map,
      of: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Profile",
        },
      },
      default: {},
    },
  },
 
);


const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
