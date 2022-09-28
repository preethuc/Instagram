'use strict';

var mongoose = require('mongoose');

var notifiSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    enum: ['Follow', 'Like'],
    default: 'Like'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  seen: {
    type: Boolean,
    default: false
  }
});

// notifiSchema.pre(/^find/, function (next) {
//   this.find().populate('user post');

//   next();
// });

var Notifi = mongoose.model('Notifi', notifiSchema);
module.exports = Notifi;