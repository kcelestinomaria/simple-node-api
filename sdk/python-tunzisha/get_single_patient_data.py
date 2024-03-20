import requests

url = "https://localhost:3000/api/Patients"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
