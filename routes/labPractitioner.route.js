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

router.get("/labPractitioners", getlabPractitionersController);

router.get("/labPractitioners/:id", getSinglelabPractitionerController);

router.post("/labPractitioners", createSinglelabPractitionerController);

// update a labPractitioner
router.put("labPractitioners/:id", updateSinglelabPractitionerController);

// delete a labPractitioner
router.delete("labPractitioners/:id", deleteSinglelabPractitionerController);

module.exports = router;
