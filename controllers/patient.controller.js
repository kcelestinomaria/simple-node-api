const Patient = require("../models/patient.model.js");

const getPatientsController = async (req, res) => {
  try {
    const Patients = await Patient.find({});
    res.status(200).json(Patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSinglePatientController = async (req, res) => {
  try {
    const { id } = req.params;
    const Patients = await Patient.findById(id);
    res.status(200).json(Patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSinglePatientController = async (req, res) => {
  try {
    const Patients = await Patient.create(req.body);
    res.status(200).json(Patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSinglePatientController = async (req, res) => {
  try {
    const { id } = req.params;

    const Patients = await Patient.findByIdAndUpdate(id, req.body);

    // suppose if Patient doesn't exist
    if (!Patients) {
      return res.status(404).json({ message: "Patient Not Found" });
    }

    //const Patients = await Patient.findById(id);

    res.status(200).json(Patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSinglePatientController = async (req, res) => {
  try {
    const { id } = req.params;

    const Patients = await Patient.findByIdAndDelete(id);

    if (!Patients) {
      return res.status(404).json({ message: "Patient Not Found" });
    }

    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPatientsController,
  getSinglePatientController,
  createSinglePatientController,
  updateSinglePatientController,
  deleteSinglePatientController,
};
