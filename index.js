const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const uuid = require('uuid');
const path = require('path');
const bcrypt = require('bcrypt');
require('dotenv').config();

const apiKeyMiddleware = require('./middleware/apiKey.middleware.js');
const authorizeRole = require('./middleware/authorizeRole.middleware.js');
const ApiKey = require('./models/apiKey.model.js');

const PatientRoute = require("./routes/patient.route.js");
const PrescriptionRoute = require("./routes/prescription.route.js");
const SymptomRoute = require("./routes/symptom.route.js");
const LabTestRoute = require("./routes/labTest.route.js");
const LabPractitionerRoute = require("./routes/labPractitioner.route.js");
const HospitalRoute = require("./routes/hospital.route.js");
const DoctorRoute = require("./routes/doctor.route.js");
const DiagnosisRoute = require("./routes/diagnosis.route.js");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit process if MongoDB connection fails
    });

app.use(express.json());

//app.use(apiKeyMiddleware);

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const authorizeAdmin = authorizeRole('admin');
const authorizeDoctor = authorizeRole('doctor');

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        let role = '';
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            role = 'admin';
        } else if (password.endsWith('MOHApprovedDoctor')) {
            role = 'doctor';
        } else {
            role = 'patient';
        }
        
        const token = jwt.sign({ username, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/admin/action', authorizeAdmin, async (req, res) => {
    res.json({ message: 'Admin action performed successfully' });
});

app.post('/api/api-keys', async (req, res) => {
    const { hospitalId } = req.body;
    try {
        const apiKey = uuid.v4(); // Generate a UUID as the API key
        await ApiKey.create({ key: apiKey, hospitalId });
        res.status(201).json({ apiKey });
    } catch (error) {
        console.error('Error generating API key:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use("/api", PatientRoute);
app.use("/api", PrescriptionRoute);
app.use("/api", SymptomRoute);
app.use("/api", LabTestRoute);
app.use("/api", LabPractitionerRoute);
app.use("/api", HospitalRoute);
app.use("/api", DoctorRoute);
app.use("/api", DiagnosisRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
