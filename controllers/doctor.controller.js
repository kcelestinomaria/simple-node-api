const Doctor = require("../models/doctor.model.js");

const getDoctorsController = async (req, res) => {
  try {
    const Doctors = await Doctor.find({});
    res.status(200).json(Doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleDoctorController = async (req, res) => {
  try {
    const { id } = req.params;
    const Doctor = await Doctor.findById(id);
    res.status(200).json(Doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSingleDoctorController = async (req, res) => {
  try {
    const Doctor = await Doctor.create(req.body);

    res.status(200).json(Doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSingleDoctorController = async (req, res) => {
  try {
    const { id } = req.params;

    const Doctor = await Doctor.findByIdAndUpdate(id, req.body);

    // suppose if Doctor doesn't exist
    if (!Doctor) {
      return res.status(404).json({ message: "Doctor Not Found" });
    }

    const updatedDoctor = await Doctor.findById(id);

    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSingleDoctorController = async (req, res) => {
  try {
    const { id } = req.params;

    const Doctor = await Doctor.findByIdAndDelete(id);

    if (!Doctor) {
      return res.status(404).json({ message: "Doctor Not Found" });
    }

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDoctorsController,
  getSingleDoctorController,
  createSingleDoctorController,
  updateSingleDoctorController,
  deleteSingleDoctorController,
};
