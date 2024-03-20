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

router.get("/", getPrescriptionsController);

router.get("/:id", getSinglePrescriptionController);

router.post("/", createSinglePrescriptionController);

// update a Prescription
router.put("/:id", updateSinglePrescriptionController);

// delete a Prescription
router.delete("/:id", deleteSinglePrescriptionController);

module.exports = router;