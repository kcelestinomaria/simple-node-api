const mongoose = require("mongoose");

const labTestsSchema = mongoose.Schema(
    {
        dateOflabTests: {
          type: String,
          required: true,
        },

        patientId: {
          type: String,
          required: true,
        },

        labResultsStatement: {
            type: String,
            required: true,
        },

        affiliatedHospital: {
            type: String,
            required: true
        },

        labPractitionerId: {
            type: String,
            required: true,
        },

      },
      {
        timestamps: true,
      }
)


const labTests = mongoose.model("labTests", labTestsSchema);

module.exports = labTests;
