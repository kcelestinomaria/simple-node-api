const express = require("express");
const mongoose = require("mongoose");
const labPractitioner = require("../models/labPractitioner.model.js");
const {
  getlabPractitionersController,
  getSinglelabPractitionerController,
  createSinglelabPractitionerController,
  updateSinglelabPractitionerController,
  deleteSinglelabPractitionerController,
} = require("../controllers/labPractitioner.controller.js");

const router = express.Router();

router.get("/", getlabPractitionersController);

router.get("/:id", getSinglelabPractitionerController);

router.post("/", createSinglelabPractitionerController);

// update a labPractitioner
router.put("/:id", updateSinglelabPractitionerController);

// delete a labPractitioner
router.delete("/:id", deleteSinglelabPractitionerController);

module.exports = router;