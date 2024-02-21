const labPractitioner = require("../models/labPractitioner.model.js");

const getlabPractitionersController = async (req, res) => {
  try {
    const labPractitioners = await labPractitioner.find({});
    res.status(200).json(labPractitioners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSinglelabPractitionerController = async (req, res) => {
  try {
    const { id } = req.params;
    const labPractitioner = await labPractitioner.findById(id);
    res.status(200).json(labPractitioner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSinglelabPractitionerController = async (req, res) => {
  try {
    const labPractitioner = await labPractitioner.create(req.body);

    res.status(200).json(labPractitioner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSinglelabPractitionerController = async (req, res) => {
  try {
    const { id } = req.params;

    const labPractitioner = await labPractitioner.findByIdAndUpdate(id, req.body);

    // suppose if labPractitioner doesn't exist
    if (!labPractitioner) {
      return res.status(404).json({ message: "labPractitioner Not Found" });
    }

    const updatedlabPractitioner = await labPractitioner.findById(id);

    res.status(200).json(updatedlabPractitioner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSinglelabPractitionerController = async (req, res) => {
  try {
    const { id } = req.params;

    const labPractitioner = await labPractitioner.findByIdAndDelete(id);

    if (!labPractitioner) {
      return res.status(404).json({ message: "labPractitioner Not Found" });
    }

    res.status(200).json({ message: "labPractitioner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getlabPractitionersController,
  getSinglelabPractitionerController,
  createSinglelabPractitionerController,
  updateSinglelabPractitionerController,
  deleteSinglelabPractitionerController,
};
