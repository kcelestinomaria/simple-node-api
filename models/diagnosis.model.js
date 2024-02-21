const mongoose = require("mongoose");

const diagnosisSchema = mongoose.Schema(
    {
        diagnosisStatement: {
          type: String,
          required: true,
        },
    
        dateOfDiagnosis: {
          type: String,
          required: true,
        },

        patientId: {
          type: String,
          required: true,
        },

        affiliatedHospital: {
            type: String,
            required: true
        },

      },
      {
        timestamps: true,
      }
)


const diagnosis = mongoose.model("diagnosis", diagnosisSchema);

module.exports = diagnosis;
