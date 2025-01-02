// Now here we are creating a Route for the [hotel.js] data

const express = require("express");
const router = express.Router();
const getAllHotelHandler = require("../controllers/hotelController");

router.route("/").get(getAllHotelHandler);

module.exports = router;
