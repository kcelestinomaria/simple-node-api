const express = require("express");
const mongoose = require("mongoose");

//const Patient = require("./models/patient.model.js");

const PatientRoute = require("./routes/patient.route.js");
const PrescriptionRoute = require("./routes/prescription.route.js");
const SymptomRoute = require("./routes/symptom.route.js");
const LabTestRoute = require("./routes/labTest.route.js");
const LabPractitionerRoute = require("./routes/labPractitioner.route.js");
const HospitalRoute = require("./routes/hospital.route.js");
const DoctorRoute = require("./routes/doctor.route.js");
const DiagnosisRoute = require("./routes/diagnosis.route.js");

const app = express();

// set up middleware to employ json
app.use(express.json());

// add support for entering form data
//app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/Patients", PatientRoute);
app.use("/api/Prescriptions", PrescriptionRoute);
app.use("/api/Symptoms", SymptomRoute);
app.use("/api/LabTests", LabTestRoute);
app.use("/api/LabPractitioners", LabPractitionerRoute);
app.use("/api/Hospitals", HospitalRoute);
app.use("/api/Doctors", DoctorRoute);
app.use("/api/Diagnoses", DiagnosisRoute);


app.get("/", (req, res) => {
  res.send("Hello there, Welcome to the Tunzisha Xchange API! Route to '/api/[entityname]' to read or write to a specific endpoint");
});


mongoose
  .connect(
    "mongodb+srv://celestino127:C0mpa$$i0n127@cluster0.5qsdpkx.mongodb.net/Simple-Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to the database!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
