import requests
import json
import os

# Load sample tickets
with open("data/sample_tickets.json", "r") as f:
    tickets = json.load(f)

processed_tickets = []

# Process each ticket
for ticket in tickets:
    response = requests.post("http://127.0.0.1:5000/process_ticket", json=ticket)

    if response.status_code == 200:
        result = response.json()
        processed_tickets.append(result)
    else:
        print(f"❌ Failed to process ticket {ticket['ticket_id']}: {response.text}")

# Save the results to a JSON file
output_path = "data/generated_responses.json"
with open(output_path, "w") as out_file:
    json.dump(processed_tickets, out_file, indent=2)

print(f"✅ Processed tickets saved to {output_path}")