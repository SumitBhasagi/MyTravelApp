const pageNotFound = (req, res, next) => {
  res.status(404).json({ message: "Invalid URL: Page Not Found" });
};

module.exports = pageNotFound;
