const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema(
    {
        prescriptionStatement: {
          type: String,
          required: true,
        },
    
        issueDate: {
          type: String,
          required: true,
        },

        medicinePrescribed: {
          type: String,
          required: true,
        },

        affiliatedHospital: {
            type: String,
            required: true,
        },

        doctorId: {
            type: String,
            required: true,
        }

      },
      {
        timestamps: true,
      }
)


const prescription = mongoose.model("prescription", prescriptionSchema);

module.exports = prescription;
