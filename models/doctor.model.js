var mongoose = require("mongoose");

var doctorSchema = mongoose.Schema(
    {
        doctorId: {
            type: String,
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


var doctor = mongoose.model("doctor", doctorSchema);

module.exports = doctor;
