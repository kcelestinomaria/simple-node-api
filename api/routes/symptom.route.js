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

router.get("/Symptoms", getSymptomsController);

router.get("/Symptoms/:id", getSingleSymptomController);

router.post("/Symptoms", createSingleSymptomController);

// update a Symptom
router.put("/Symptoms/:id", updateSingleSymptomController);

// delete a Symptom
router.delete("/Symptoms/:id", deleteSingleSymptomController);

module.exports = router;
