import requests
import json

# Load sample ticket
with open("data/sample_tickets.json", "r") as f:
    tickets = json.load(f)

# Pick one ticket
ticket = tickets[1]  # Change index to test others

# Send to API
response = requests.post("http://127.0.0.1:5000/process_ticket", json=ticket)

# Print the result
print("🎯 AI Response:")
print(json.dumps(response.json(), indent=2))