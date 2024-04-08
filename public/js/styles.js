async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult');

    try {
        // Make API request for login
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if (response.ok) {
            loginResult.innerHTML = `<p>Login successful. Token: ${data.token}</p>`;
            // Perform other actions after successful login
        } else {
            loginResult.innerHTML = `<p>Error: ${data.error}</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        loginResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Other functions for making API requests and handling responses can be defined here
// Patients
async function createPatient(patientData) {
    try {
        const token = getToken();
        const response = await fetch('/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(patientData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to create patient');
    }
}

async function getPatient(patientId) {
    try {
        const token = getToken();
        const response = await fetch(`/api/patients/${patientId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch patient');
    }
}

async function getAllPatients() {
    try {
        const token = getToken();
        const response = await fetch('/api/patients', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch patients');
    }
}

async function updatePatient(patientId, updatedPatientData) {
    try {
        const token = getToken();
        const response = await fetch(`/api/patients/${patientId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedPatientData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to update patient');
    }
}

async function deletePatient(patientId) {
    try {
        const token = getToken();
        const response = await fetch(`/api/patients/${patientId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to delete patient');
    }
}

// Implement similar CRUD operations for other entities (Doctors, Diagnoses, Hospitals, Lab Practitioners, Users, Lab Tests, Prescriptions, Symptoms)
