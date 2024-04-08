const mongoose = require("mongoose");

const symptomsSchema = mongoose.Schema(
    {
        symptomsStatement: {
          type: String,
          required: true,
        },
    
        patientId: {
          type: String,
          required: true,
        },

        doctorId: {
            type: String,
            required: true,
        },

       
      },
      {
        timestamps: true,
      }
)


const symptoms = mongoose.model("symptoms", symptomsSchema);

module.exports = symptoms;
