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

router.get("/labTests", getlabTestsController);

router.get("/labTests/:id", getSinglelabTestController);

router.post("/labTests", createSinglelabTestController);

// update a labTest
router.put("/labTests/:id", updateSinglelabTestController);

// delete a labTest
router.delete("/labTests/:id", deleteSinglelabTestController);

module.exports = router;
