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

router.get("/Doctors", getDoctorsController);

router.get("/Doctors/:id", getSingleDoctorController);

router.post("/Doctors", createSingleDoctorController);

// update a Doctor
router.put("/Doctors/:id", updateSingleDoctorController);

// delete a Doctor
router.delete("/Doctors/:id", deleteSingleDoctorController);

module.exports = router;
