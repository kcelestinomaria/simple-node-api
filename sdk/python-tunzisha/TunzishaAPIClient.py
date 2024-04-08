import requests
import json

class HealthcareAPIClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def add_patient(self, patient_data):
        url = f"{self.base_url}/api/Patients"
        response = requests.post(url, json=patient_data)
        return response.json()

    def get_all_patients(self):
        url = f"{self.base_url}/api/Patients"
        response = requests.get(url)
        return response.json()

    def get_patient_by_id(self, patient_id):
        url = f"{self.base_url}/api/Patients/{patient_id}"
        response = requests.get(url)
        return response.json()

    def delete_patient(self, patient_id):
        url = f"{self.base_url}/api/Patients/{patient_id}"
        response = requests.delete(url)
        return response.json()

    def update_patient(self, patient_id, updated_patient_data):
        url = f"{self.base_url}/api/Patients/{patient_id}"
        response = requests.put(url, json=updated_patient_data)
        return response.json()

# Example usage:
api_client = HealthcareAPIClient("https://localhost:3000")
patient_data = {
    "patientId": 125,
    "firstName": "Dennis",
    "secondName": "Otieno",
    "age": 25,
    "gender": "Male",
    "profileImage": "YAYGSLSMNJAMAN",
    "contactNumber": "+254743992235",
    "nextOfKin": "Michael Omolo",
    "dateOfBirth": "01/02/1999",
    "inpatient": True,
    "symptoms": "breathlessness coughing dry_throat",
    "diagnosis": "Covid-19 Omicron",
    "prescription": "Vitamin C and Zinc tablets, each 1 x 3"
}
print("Add Patient Response:", api_client.add_patient(patient_data))

print("Get All Patients Response:", api_client.get_all_patients())

patient_id = "65ee32e5390498ef1815c685"
print("Get Single Patient Response:", api_client.get_patient_by_id(patient_id))

print("Delete Patient Response:", api_client.delete_patient(patient_id))

updated_patient_data = {
    "patientId": "65ee32e5390498ef1815c685",
    "firstName": "Updated Name",
    "age": 30
}
print("Update Patient Response:", api_client.update_patient(patient_id, updated_patient_data))
