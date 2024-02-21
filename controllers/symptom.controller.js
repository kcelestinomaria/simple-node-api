const Symptom = require("../models/symptom.model.js");

const getSymptomsController = async (req, res) => {
  try {
    const Symptoms = await Symptom.find({});
    res.status(200).json(Symptoms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleSymptomController = async (req, res) => {
  try {
    const { id } = req.params;
    const Symptom = await Symptom.findById(id);
    res.status(200).json(Symptom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSingleSymptomController = async (req, res) => {
  try {
    const Symptom = await Symptom.create(req.body);

    res.status(200).json(Symptom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSingleSymptomController = async (req, res) => {
  try {
    const { id } = req.params;

    const Symptom = await Symptom.findByIdAndUpdate(id, req.body);

    // suppose if Symptom doesn't exist
    if (!Symptom) {
      return res.status(404).json({ message: "Symptom Not Found" });
    }

    const updatedSymptom = await Symptom.findById(id);

    res.status(200).json(updatedSymptom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSingleSymptomController = async (req, res) => {
  try {
    const { id } = req.params;

    const Symptom = await Symptom.findByIdAndDelete(id);

    if (!Symptom) {
      return res.status(404).json({ message: "Symptom Not Found" });
    }

    res.status(200).json({ message: "Symptom deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSymptomsController,
  getSingleSymptomController,
  createSingleSymptomController,
  updateSingleSymptomController,
  deleteSingleSymptomController,
};
