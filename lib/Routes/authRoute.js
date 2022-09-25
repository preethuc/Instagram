"use strict";

var express = require("express");
var router = express.Router();
var authController = require("../../src/Controllers/authController");

//ROUTES
router.route("/signup").post(authController.signup);

module.exports = router;