const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/dbconfig");
const hotelRouter = require("./Routes/hotel.router");
const hotelDataAddedToDBRouter = require("./Routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./Routes/categoryimport.router");
const categoryRouter = require("./Routes/category.router");
const singleHotelRouter = require("./Routes/singlehotel.router");
const authRouter = require("./Routes/auth.router");
const wishlistRouter = require("./Routes/wishlist.router");
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
const PORT = 7758;

app.get("/", (req, res) => {
  res.send("<h1>hello World!!</h1>");
});

app.use("/api/categories", categoryRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is up and running");
  });
});
