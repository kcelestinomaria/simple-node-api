const express = require("express");
const mongoose = require("mongoose");

const PatientRoute = require("./routes/patient.route.js");
const PrescriptionRoute = require("./routes/prescription.route.js");
const SymptomRoute = require("./routes/symptom.route.js");
const LabTestRoute = require("./routes/labTest.route.js");
const LabPractitionerRoute = require("./routes/labPractitioner.route.js");
const HospitalRoute = require("./routes/hospital.route.js");
const DoctorRoute = require("./routes/doctor.route.js");
const DiagnosisRoute = require("./routes/diagnosis.route.js");
//const res = require("express/lib/response.js");


const app = express();

// set up middleware to employ json
app.use(express.json());

// add support for entering form data
//app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api", PatientRoute);
app.use("/api", PrescriptionRoute);
app.use("/api", SymptomRoute);
app.use("/api", LabTestRoute);
app.use("/api", LabPractitionerRoute);
app.use("/api", HospitalRoute);
app.use("/api", DoctorRoute);
app.use("/api", DiagnosisRoute);


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
