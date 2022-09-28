"use strict";

var mongoose = require("mongoose");
var validator = require("validator");

// const { isEmail } = validator;

var profileSchema = new mongoose.Schema({
  bio: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    //  validator:{validate: [isEmail, "invalid email"],} ,
    required: [true, "email is required"]
  },
  accountType: {
    type: String,
    enum: ["public", "private"],
    default: "public"
  },
  name: {
    type: String
  },
  // userName: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   sparse: true
  // },

  gender: {
    type: String,
    select: false
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
        ref: "Profile"
      }
    },
    default: {}
  },

  following: {
    type: Map,
    of: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
      }
    },
    default: {}
  }
});

// profileSchema.set("toObject", { virtuals: true });
// profileSchema.set("toJSON", { virtuals: true });

// profileSchema.virtual("posts", {
//   ref: "Post",
//   localField: "_id",
//   foreignField: "profile",
// });

// profileSchema.pre(/^find/, function (next) {
//   this.find().populate("posts");
//   next();
// });

var Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;