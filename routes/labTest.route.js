const express = require("express");
const mongoose = require("mongoose");
const labTest = require("../models/labTest.model.js");
const {
  getlabTestsController,
  getSinglelabTestController,
  createSinglelabTestController,
  updateSinglelabTestController,
  deleteSinglelabTestController,
} = require("../controllers/labTest.controller.js");

const router = express.Router();

router.get("/", getlabTestsController);

router.get("/:id", getSinglelabTestController);

router.post("/", createSinglelabTestController);

// update a labTest
router.put("/:id", updateSinglelabTestController);

// delete a labTest
router.delete("/:id", deleteSinglelabTestController);

module.exports = router;