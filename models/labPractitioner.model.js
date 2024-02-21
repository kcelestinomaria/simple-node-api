const mongoose = require("mongoose");

const labPractitionerSchema = mongoose.Schema(
    {
        labPractitionerId: {
            type: String,
            required: true,
        },

        firstName: {
          type: String,
          required: [true, "Please enter the lab practitioner's first name"],
        },
    
        secondName: {
          type: String,
          required: [true, "Please enter the lab practitioner's second name"],
        },

        profileImage: {
          type: String,
          required: false,
        },
    
        affiliatedHospital: {
            type: String,
            required: true,
        },

      },
      {
        timestamps: true,
      }
)


const labPractitioner = mongoose.model("labPractitioner", labPractitionerSchema);

module.exports = labPractitioner;
