const express = require("express");
const mongoose = require("mongoose");
const Prescription = require("../models/prescription.model.js");
const {
  getPrescriptionsController,
  getSinglePrescriptionController,
  createSinglePrescriptionController,
  updateSinglePrescriptionController,
  deleteSinglePrescriptionController,
} = require("../controllers/prescription.controller.js");

const router = express.Router();

router.get("/Prescriptions", getPrescriptionsController);

router.get("/Prescriptions/:id", getSinglePrescriptionController);

router.post("/Prescriptions", createSinglePrescriptionController);

// update a Prescription
router.put("/Prescriptions/:id", updateSinglePrescriptionController);

// delete a Prescription
router.delete("/Prescriptions/:id", deleteSinglePrescriptionController);

module.exports = router;
