const Diagnosis = require("../models/diagnosis.model.js");

const getDiagnosesController = async (req, res) => {
  try {
    const Diagnoses = await Diagnosis.find({});
    res.status(200).json(Diagnoses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleDiagnosisController = async (req, res) => {
  try {
    const { id } = req.params;
    const Diagnosis = await Diagnosis.findById(id);
    res.status(200).json(Diagnosis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSingleDiagnosisController = async (req, res) => {
  try {
    const Diagnoses = await Diagnosis.create(req.body);

    res.status(200).json(Diagnoses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSingleDiagnosisController = async (req, res) => {
  try {
    const { id } = req.params;

    const Diagnosis = await Diagnosis.findByIdAndUpdate(id, req.body);

    // suppose if Diagnosis doesn't exist
    if (!Diagnosis) {
      return res.status(404).json({ message: "Diagnosis Not Found" });
    }

    const updatedDiagnosis = await Diagnosis.findById(id);

    res.status(200).json(updatedDiagnosis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSingleDiagnosisController = async (req, res) => {
  try {
    const { id } = req.params;

    const Diagnosis = await Diagnosis.findByIdAndDelete(id);

    if (!Diagnosis) {
      return res.status(404).json({ message: "Diagnosis Not Found" });
    }

    res.status(200).json({ message: "Diagnosis deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDiagnosesController,
  getSingleDiagnosisController,
  createSingleDiagnosisController,
  updateSingleDiagnosisController,
  deleteSingleDiagnosisController,
};
