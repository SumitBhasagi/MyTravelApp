const express = require("express");
const router = express.Router();
const categoryhandler = require("../controllers/categoryController");

router.route("/").get(categoryhandler);

module.exports = router;
