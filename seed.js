require("dotenv").config();

const mongoose = require("mongoose");

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Laptop",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High performance laptop"
  },
  {
    name: "Headphones",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Wireless headphones"
  },
  {
    name: "Smart Watch",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Fitness smart watch"
  }
];

Product.insertMany(products)
  .then(() => {
    console.log("Products Added");
    process.exit();
  });