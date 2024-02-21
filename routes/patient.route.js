const express = require("express");
const mongoose = require("mongoose");
const Patient = require("../models/patient.model.js");
const {
  getPatientsController,
  getSinglePatientController,
  createSinglePatientController,
  updateSinglePatientController,
  deleteSinglePatientController,
} = require("../controllers/patient.controller.js");

const router = express.Router();

router.get("/", getPatientsController);

router.get("/:patientId", getSinglePatientController); // previously, only `:id`

router.post("/", createSinglePatientController);

// update a Patient
router.put("/:patientId", updateSinglePatientController);

// delete a Patient
router.delete("/:patientId", deleteSinglePatientController);

module.exports = router;