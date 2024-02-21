const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    patientId: {
      type: new mongoose.Types.ObjectId(),
      required: true,
    },
    
    firstName: {
      type: String,
      required: [true, "Please enter the patient's first name"],
    },

    secondName: {
      type: String,
      required: [true, "Please enter the patient's second name"],
    },

    age: {
      type: Number,
      required: true,
      default: 1,
    },

    gender: {
      type: String,
      required: true,
      default: 0,
    },

    profileImage: {
      type: String,
      required: false,
    },

    contactNumber: {
      type: String,
      required: true,
    },

    nextOfKin: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: String,
      required: true,
    },

    inpatient: {
      type: Boolean,
      required: true,
    },

    symptoms: {
      type: String,
      required: true,
    },

    diagnosis: {
      type: String,
      required: true
    },

    prescription: {
      type: String,
      required: [false, "This user did not have prescription"]
    }
  },
  {
    timestamps: true,
  }
);

const patient = mongoose.model("patient", patientSchema);

module.exports = patient;
