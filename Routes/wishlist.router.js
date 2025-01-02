const express = require("express");
const verifyUser = require("../middleware/verifyUser");
const wishhlistController = require("../controllers/wishlistController");
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } =
  wishhlistController;

const router = express.Router();

router.route("/").post(verifyUser, createWishlistHandler);

router.route("/:id").delete(verifyUser, deleteWishlistHandler);

router.route("/").get(verifyUser, getWishlistHandler);

module.exports = router;
