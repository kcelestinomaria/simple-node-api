import requests

url = "https://3000-kcelestinom-tunzishaxch-gy1ysd1zmzc.ws-eu108.gitpod.io/api/Patients/65ee32e5390498ef1815c685"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
