const Prescription = require("../models/prescription.model.js");

const getPrescriptionsController = async (req, res) => {
  try {
    const Prescriptions = await Prescription.find({});
    res.status(200).json(Prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSinglePrescriptionController = async (req, res) => {
  try {
    const { id } = req.params;
    const Prescription = await Prescription.findById(id);
    res.status(200).json(Prescription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSinglePrescriptionController = async (req, res) => {
  try {
    const Prescription = await Prescription.create(req.body);

    res.status(200).json(Prescription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSinglePrescriptionController = async (req, res) => {
  try {
    const { id } = req.params;

    const Prescription = await Prescription.findByIdAndUpdate(id, req.body);

    // suppose if Prescription doesn't exist
    if (!Prescription) {
      return res.status(404).json({ message: "Prescription Not Found" });
    }

    const updatedPrescription = await Prescription.findById(id);

    res.status(200).json(updatedPrescription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSinglePrescriptionController = async (req, res) => {
  try {
    const { id } = req.params;

    const Prescription = await Prescription.findByIdAndDelete(id);

    if (!Prescription) {
      return res.status(404).json({ message: "Prescription Not Found" });
    }

    res.status(200).json({ message: "Prescription deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPrescriptionsController,
  getSinglePrescriptionController,
  createSinglePrescriptionController,
  updateSinglePrescriptionController,
  deleteSinglePrescriptionController,
};
