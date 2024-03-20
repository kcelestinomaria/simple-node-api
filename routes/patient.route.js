const express = require("express");
//const mongoose = require("mongoose");
//const Patient = require("../models/patient.model.js");
const router = express.Router();
const {
  getPatientsController,
  getSinglePatientController,
  createSinglePatientController,
  updateSinglePatientController,
  deleteSinglePatientController,
} = require("../controllers/patient.controller.js");

router.route('/Patients')
    .post(createSinglePatientController);

router.route('/Patients/:id')
    .get(getSinglePatientController);

router.route('/Patients')
    .get(getPatientsController);

router.route('/Patients/:id')
    .put(updateSinglePatientController);

router.route('/Patients/:id')
    .delete(deleteSinglePatientController);

//router.get("/Patients", getPatientsController);

//router.get("/Patients/:id", getSinglePatientController);

//router.post("/Patients", createSinglePatientController);

// update a Patient
//router.put("/:id", updateSinglePatientController);

// delete a Patient
//router.delete("/:id", deleteSinglePatientController);

module.exports = router;