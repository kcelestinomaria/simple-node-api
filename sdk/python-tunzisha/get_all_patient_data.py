import requests

url = "https://3000-kcelestinom-tunzishaxch-gy1ysd1zmzc.ws-eu108.gitpod.io/api/Patients"

payload = ""
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
