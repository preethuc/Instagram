"use strict";

var express = require("express");
var router = express.Router();
var authController = require("../../src/Controllers/authControllers");

//ROUTES
router.route("/signup").post(authController.signup);
// router.route("/login").post(authController.login);


module.exports = router;