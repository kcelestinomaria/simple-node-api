const labTest = require("../models/labTest.model.js");

const getlabTestsController = async (req, res) => {
  try {
    const labTests = await labTest.find({});
    res.status(200).json(labTests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSinglelabTestController = async (req, res) => {
  try {
    const { id } = req.params;
    const labTest = await labTest.findById(id);
    res.status(200).json(labTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSinglelabTestController = async (req, res) => {
  try {
    const labTest = await labTest.create(req.body);

    res.status(200).json(labTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSinglelabTestController = async (req, res) => {
  try {
    const { id } = req.params;

    const labTest = await labTest.findByIdAndUpdate(id, req.body);

    // suppose if labTest doesn't exist
    if (!labTest) {
      return res.status(404).json({ message: "labTest Not Found" });
    }

    const updatedlabTest = await labTest.findById(id);

    res.status(200).json(updatedlabTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSinglelabTestController = async (req, res) => {
  try {
    const { id } = req.params;

    const labTest = await labTest.findByIdAndDelete(id);

    if (!labTest) {
      return res.status(404).json({ message: "labTest Not Found" });
    }

    res.status(200).json({ message: "labTest deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getlabTestsController,
  getSinglelabTestController,
  createSinglelabTestController,
  updateSinglelabTestController,
  deleteSinglelabTestController,
};
