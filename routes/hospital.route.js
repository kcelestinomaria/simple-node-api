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

router.get("/", getHospitalsController);

router.get("/:id", getSingleHospitalController);

router.post("/", createSingleHospitalController);

// update a Hospital
router.put("/:id", updateSingleHospitalController);

// delete a Hospital
router.delete("/:id", deleteSingleHospitalController);

module.exports = router;