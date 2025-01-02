const Wishlist = require("../model/wishlist.model");


const createWishlistHandler = async (req, res) => {
    const newWishList = new Wishlist(req.body); // Create a new Wishlist document
    try {
      const savedWishlist = await newWishList.save(); // Save the document
      res.status(201).json(savedWishlist); // Send the saved document as a response
    } catch (err) {
      res.status(500).json({ message: "Failed to create wishlist" }); // Handle errors
    }
  };

const deleteWishlistHandler = async (req, res) => {
    try {
      await Wishlist.findByIdAndDelete(req.params.id);
      res.json({ message: "Hotel deleted from wishlist" });
    } catch (err) {
      res.status(500).json({ message: "could not delete hotel from wishlist" });
    }
  };

const getWishlistHandler = async (req, res) => {
    try {
      const wishlist = await Wishlist.find({});
      wishlist
        ? res.json(wishlist)
        : res.json({ message: "there are no hotels in wishlist " });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

module.exports = {
  createWishlistHandler,
  deleteWishlistHandler,
  getWishlistHandler,
};
