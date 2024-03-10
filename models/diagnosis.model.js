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


const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

module.exports = Diagnosis;
