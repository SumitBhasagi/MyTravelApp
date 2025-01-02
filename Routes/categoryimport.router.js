const express = require("express");
const Category = require("../model/category.model");
const categories = require("../data/category");
const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Category.remove;
    const categoriesInDB = await Category.insertMany(categories.data);
    res.json(categoriesInDB);
  } catch (err) {
    console.log(err);
    res.json({ message: "Could Not Add Categories-Data to DB" });
  }
});

module.exports = router;
