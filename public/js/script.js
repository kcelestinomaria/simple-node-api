document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('loginSection');
    const adminSection = document.getElementById('adminSection');
    const loginForm = document.getElementById('loginForm');
    const createPatientForm = document.getElementById('createPatientForm');
    const loginResult = document.getElementById('loginResult');
    const patientsList = document.getElementById('patientsList');
    const loggedInUser = document.getElementById('loggedInUser');

    // Function to fetch and display all patients
    async function displayAllPatients() {
        try {
            const response = await fetch('/api/patients');
            const patients = await response.json();
            patientsList.innerHTML = ''; // Clear previous list
            patients.forEach(patient => {
                const listItem = document.createElement('li');
                listItem.textContent = patient.name;
                listItem.addEventListener('click', async () => {
                    alert(`Selected patient: ${patient.name}`);
                });
                patientsList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    }

    // Event listener for login form submission
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                loginResult.innerHTML = '<p>Login successful</p>';
                loginSection.style.display = 'none';
                adminSection.style.display = 'block';
                loggedInUser.textContent = username;
                // Fetch and display all patients
                displayAllPatients();
            } else {
                loginResult.innerHTML = `<p>Error: ${data.error}</p>`;
            }
        } catch (error) {
            console.error('Error:', error);
            loginResult.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });

    // Event listener for create patient form submission
    createPatientForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const patientName = document.getElementById('patientName').value;
        const patientAge = document.getElementById('patientAge').value;
        const patientGender = document.getElementById('patientGender').value;
        const newPatientData = { name: patientName, age: patientAge, gender: patientGender };
        try {
            await fetch('/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPatientData)
            });
            alert('Patient created successfully');
            displayAllPatients(); // Refresh patient list
        } catch (error) {
            console.error('Error creating patient:', error);
        }
    });
});
