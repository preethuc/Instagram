'use strict';

var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auth'
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  comment: {
    type: String,
    required: [true, 'Comment is required']
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  }],
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  reply: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Auth'
    },
    comment: {
      type: String
    },
    profiles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    },
    like: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    }]
  }]
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// commentSchema.pre(/^find/, function (next) {
//   this.find()
//     .populate('profile')
//     .populate({
//       path: 'likes',
//       select: 'username user name photo _id',
//     })
//     .populate({
//       path: 'reply.like',
//       select: 'username user name photo _id',
//     })
//     .populate('reply.profiles');

//   next();
// });

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;