const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uuid = require('uuid');
const path = require('path');
require('dotenv').config();

const apiKeyMiddleware = require('./middleware/apiKey.middleware.js');
const authorizeRole = require('./middleware/authorizeRole.middleware.js');
const User = require('./models/user.model.js');
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

app.use(apiKeyMiddleware);

const authorizeAdmin = authorizeRole('admin');

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (username === adminUsername && bcrypt.compareSync(password, adminPassword)) {
            const token = jwt.sign({ username, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
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
