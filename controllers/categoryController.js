const Category = require("../model/category.model");

const categoryhandler = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    res.status(404).json({ message: "No data Found" });
  }
};

module.exports = categoryhandler;
