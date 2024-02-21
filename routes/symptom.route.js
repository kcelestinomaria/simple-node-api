const express = require("express");
const mongoose = require("mongoose");
const Symptom = require("../models/symptom.model.js");
const {
  getSymptomsController,
  getSingleSymptomController,
  createSingleSymptomController,
  updateSingleSymptomController,
  deleteSingleSymptomController,
} = require("../controllers/symptom.controller.js");

const router = express.Router();

router.get("/", getSymptomsController);

router.get("/:id", getSingleSymptomController);

router.post("/", createSingleSymptomController);

// update a Symptom
router.put("/:id", updateSingleSymptomController);

// delete a Symptom
router.delete("/:id", deleteSingleSymptomController);

module.exports = router;