const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema(
    {
        hospitalId: {
            type: String,
            required: true,
        },

        hospitalOfficialName: {
            type: String,
            required: true,
        },

        partnerHospital: {
          type: Boolean,
          required: true,
        },
    
        contactNumber: {
          type: String,
          required: true,
        },

        physicalAddress: {
            type: String,
            required: true,
        }

      },
      {
        timestamps: true,
      }
)


const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
