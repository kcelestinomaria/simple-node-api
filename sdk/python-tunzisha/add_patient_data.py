import requests
import json

url = "https://localhost:3000/api/Patients"

payload = json.dumps({
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
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
