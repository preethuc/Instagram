const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Auth',
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
      },
    ],
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    reply: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Auth',
        },
        comment: {
          type: String,
        },
        profiles: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Profile',
        },
        like: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile',
          },
        ],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
