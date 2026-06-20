const express = require("express");

const Order = require("../models/Order");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const { items, totalAmount } = req.body;

  const order = await Order.create({
    userId: req.user.id,
    items,
    totalAmount
  });

  res.json(order);
});

router.get("/myorders", protect, async (req, res) => {
  const orders = await Order.find({
    userId: req.user.id
  });

  res.json(orders);
});

module.exports = router;