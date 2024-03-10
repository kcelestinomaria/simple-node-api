const Hospital = require("../models/hospital.model.js");

const getHospitalsController = async (req, res) => {
  try {
    const Hospitals = await Hospital.find({});
    res.status(200).json(Hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleHospitalController = async (req, res) => {
  try {
    const { id } = req.params;
    const Hospital = await Hospital.findById(id);
    res.status(200).json(Hospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSingleHospitalController = async (req, res) => {
  try {
    const Hospitals = await Hospital.create(req.body);

    res.status(200).json(Hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSingleHospitalController = async (req, res) => {
  try {
    const { id } = req.params;

    const Hospital = await Hospital.findByIdAndUpdate(id, req.body);

    // suppose if Hospital doesn't exist
    if (!Hospital) {
      return res.status(404).json({ message: "Hospital Not Found" });
    }

    const updatedHospital = await Hospital.findById(id);

    res.status(200).json(updatedHospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSingleHospitalController = async (req, res) => {
  try {
    const { id } = req.params;

    const Hospital = await Hospital.findByIdAndDelete(id);

    if (!Hospital) {
      return res.status(404).json({ message: "Hospital Not Found" });
    }

    res.status(200).json({ message: "Hospital deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHospitalsController,
  getSingleHospitalController,
  createSingleHospitalController,
  updateSingleHospitalController,
  deleteSingleHospitalController,
};
