const express = require("express");
const signUpHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");
const router = express.Router();

// here we are going to use {crypto-js} because it creates different password for every register
// Prblem: SumitBhasagi: Sumit@123 || SumitSwami: Sumit@123

router.route("/register").post(signUpHandler);
router.route("/login").post(loginHandler);

module.exports = router;
