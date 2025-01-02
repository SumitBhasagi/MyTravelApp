const express = require("express");
const router = express.Router();

const singleHotelHandler = require("../controllers/singleHotelController");

// http://localhost:7758/api/hotels/67759371239c1f2a1820ec25

router.route("/:id").get(singleHotelHandler);

module.exports = router;
