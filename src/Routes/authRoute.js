const express = require("express");
const router = express.Router();
const authController = require("../../src/Controllers/authController");

//ROUTES
router.route("/signup").post(authController.signup);

module.exports = router;
