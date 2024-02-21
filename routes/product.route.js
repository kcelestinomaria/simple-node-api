const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/product.model.js");
const {
  getProductsController,
  getSingleProductController,
  createSingleProductController,
  updateSingleProductController,
  deleteSingleProductController,
} = require("../controllers/product.controller.js");

const router = express.Router();

router.get("/", getProductsController);

router.get("/:id", getSingleProductController);

router.post("/", createSingleProductController);

// update a product
router.put("/:id", updateSingleProductController);

// delete a product
router.delete("/:id", deleteSingleProductController);

module.exports = router;