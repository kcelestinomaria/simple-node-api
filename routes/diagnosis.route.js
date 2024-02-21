const express = require("express");
const mongoose = require("mongoose");
const Diagnosis = require("../models/diagnosis.model.js");
const {
  getDiagnosesController,
  getSingleDiagnosisController,
  createSingleDiagnosisController,
  updateSingleDiagnosisController,
  deleteSingleDiagnosisController,
} = require("../controllers/Diagnosis.controller.js");

const router = express.Router();

router.get("/", getDiagnosesController);

router.get("/:id", getSingleDiagnosisController);

router.post("/", createSingleDiagnosisController);

// update a Diagnosis
router.put("/:id", updateSingleDiagnosisController);

// delete a Diagnosis
router.delete("/:id", deleteSingleDiagnosisController);

module.exports = router;