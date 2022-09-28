'use strict';

var express = require('express');
var router = express.Router();
var profileController = require('../../src/Controllers/profileController');

router.route('/pro').post(profileController.createProfile);

module.exports = router;