const express = require("express");
const mongoose = require("mongoose");
const Hospital = require("../models/hospital.model.js");
const {
  getHospitalsController,
  getSingleHospitalController,
  createSingleHospitalController,
  updateSingleHospitalController,
  deleteSingleHospitalController,
} = require("../controllers/hospital.controller.js");

const router = express.Router();

router.get("/Hospitals", getHospitalsController);

router.get("/Hospitals/:id", getSingleHospitalController);

router.post("/Hospitals", createSingleHospitalController);

// update a Hospital
router.put("/Hospitals/:id", updateSingleHospitalController);

// delete a Hospital
router.delete("Hospitals/:id", deleteSingleHospitalController);

module.exports = router;
