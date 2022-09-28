const express = require('express')
const router = express.Router()
const profileController = require('../../src/Controllers/profileController')

router.route('/pro')
    .post(profileController.createProfile)
    
    
router.route('/:id')
    .patch(profileController.updateProfile)
    .get(profileController.getProfilebyId)
module.exports=router