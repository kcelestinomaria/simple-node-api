const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
    {
        doctorId: {
            type: new mongoose.Types.ObjectId(),
            required: true,
        },

        firstName: {
          type: String,
          required: [true, "Please enter the doctor's first name"],
        },
    
        secondName: {
          type: String,
          required: [true, "Please enter the doctor's second name"],
        },

        profileImage: {
          type: String,
          required: false,
        },
    
        contactNumber: {
          type: String,
          required: true,
        },

        specialty: {
            type: String,
            required: true,
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


const doctor = mongoose.model("doctor", doctorSchema);

module.exports = doctor;
