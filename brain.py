import requests

# url = "https://lh138x41ek.execute-api.us-east-1.amazonaws.com/brain"
url = "https://intense-cliffs-66388.herokuapp.com/brain"
# payload = {"lang": "en","query": "Hello","sessionId": "12345","timezone":"Asia/Colombo"}
# payload = str(payload)
payload = "{\r\n    \"lang\": \"en\",\r\n    \"query\": \"Hello\",\r\n    \"sessionId\": \"12345\",\r\n    \"timezone\": \"Asia/Colombo\"\r\n  }"
headers = {
    'Content-Type': "application/json",
    'Cache-Control': "no-cache",
    'Postman-Token': "2009f5ae-391e-444c-9c73-12131c69b1df"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
