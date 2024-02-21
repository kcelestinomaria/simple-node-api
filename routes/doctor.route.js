const express = require("express");
const mongoose = require("mongoose");
const Doctor = require("../models/doctor.model.js");
const {
  getDoctorsController,
  getSingleDoctorController,
  createSingleDoctorController,
  updateSingleDoctorController,
  deleteSingleDoctorController,
} = require("../controllers/doctor.controller.js");

const router = express.Router();

router.get("/", getDoctorsController);

router.get("/:id", getSingleDoctorController);

router.post("/", createSingleDoctorController);

// update a Doctor
router.put("/:id", updateSingleDoctorController);

// delete a Doctor
router.delete("/:id", deleteSingleDoctorController);

module.exports = router;