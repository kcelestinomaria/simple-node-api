const express = require("express");
const mongoose = require("mongoose");
const Diagnosis = require("../models/diagnosis.model.js");
const {
  getDiagnosesController,
  getSingleDiagnosisController,
  createSingleDiagnosisController,
  updateSingleDiagnosisController,
  deleteSingleDiagnosisController,
} = require("../controllers/diagnosis.controller.js");

const router = express.Router();

router.get("/Diagnoses", getDiagnosesController);

router.get("/Diagnoses/:id", getSingleDiagnosisController);

router.post("/Diagnoses", createSingleDiagnosisController);

// update a Diagnosis
router.put("/Diagnoses/:id", updateSingleDiagnosisController);

// delete a Diagnosis
router.delete("/Diagnoses/:id", deleteSingleDiagnosisController);

module.exports = router;
