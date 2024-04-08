const axios = require('axios');

class HealthcareAPIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async addPatient(patientData) {
        try {
            const response = await axios.post(`${this.baseURL}/api/Patients`, patientData);
            return response.data;
        } catch (error) {
            console.error('Error adding patient:', error.response.data);
            throw error;
        }
    }

    async getAllPatients() {
        try {
            const response = await axios.get(`${this.baseURL}/api/Patients`);
            return response.data;
        } catch (error) {
            console.error('Error getting all patients:', error.response.data);
            throw error;
        }
    }

    async getPatientById(patientId) {
        try {
            const response = await axios.get(`${this.baseURL}/api/Patients/${patientId}`);
            return response.data;
        } catch (error) {
            console.error('Error getting patient by ID:', error.response.data);
            throw error;
        }
    }

    async deletePatient(patientId) {
        try {
            const response = await axios.delete(`${this.baseURL}/api/Patients/${patientId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting patient:', error.response.data);
            throw error;
        }
    }

    async updatePatient(patientId, updatedPatientData) {
        try {
            const response = await axios.put(`${this.baseURL}/api/Patients/${patientId}`, updatedPatientData);
            return response.data;
        } catch (error) {
            console.error('Error updating patient:', error.response.data);
            throw error;
        }
    }
}

// Example usage:
const apiClient = new HealthcareAPIClient('https://localhost:3000');

const patientData = {
    patientId: 125,
    firstName: 'Dennis',
    secondName: 'Otieno',
    age: 25,
    gender: 'Male',
    profileImage: 'YAYGSLSMNJAMAN',
    contactNumber: '+254743992235',
    nextOfKin: 'Michael Omolo',
    dateOfBirth: '01/02/1999',
    inpatient: true,
    symptoms: 'breathlessness coughing dry_throat',
    diagnosis: 'Covid-19 Omicron',
    prescription: 'Vitamin C and Zinc tablets, each 1 x 3'
};

async function test() {
    try {
        console.log('Add Patient Response:', await apiClient.addPatient(patientData));
        console.log('Get All Patients Response:', await apiClient.getAllPatients());
        const patientId = '65ee32e5390498ef1815c685';
        console.log('Get Single Patient Response:', await apiClient.getPatientById(patientId));
        console.log('Delete Patient Response:', await apiClient.deletePatient(patientId));
        const updatedPatientData = {
            patientId: '65ee32e5390498ef1815c685',
            firstName: 'Updated Name',
            age: 30
        };
        console.log('Update Patient Response:', await apiClient.updatePatient(patientId, updatedPatientData));
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
