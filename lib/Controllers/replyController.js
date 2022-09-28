'use strict';

var catchAsync = require('../../utils/catchAsync');
var AppError = require('../../utils/AppError');
var commentModel = require('../Models/commentModel');

//reply to a comment
exports.createComment = catchAsync(async function (req, res, next) {

    var comment = await Comment.create(req.body);
    res.status(201).json({
        status: "success",
        comment: comment
    });
});