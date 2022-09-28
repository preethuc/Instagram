const catchAsync = require('../../utils/catchAsync')
const AppError = require('../../utils/AppError')
const commentModel = require('../Models/commentModel')

//reply to a comment
exports.createComment = catchAsync(async (req, res, next) => {
    
    const comment = await Comment.create(req.body)
        res.status(201).json({
            status: "success",
            comment
    })
   
})
