from .openai_utils import ask_gpt
import json

def classify_ticket(content):
    prompt = f"""
You are a smart AI ticket classification bot.

Given the following customer message, classify the ticket into one of these categories:
- Billing
- Technical Support
- Feature Request
- General Inquiry

Also assign a priority based on urgency:
- High (if it's urgent, mentions 'asap', 'immediately', etc.)
- Normal (everything else)

Respond ONLY in this exact JSON format:

{{
  "category": "Billing",
  "priority": "High"
}}

Here is the ticket message:
\"\"\"{content}\"\"\"
"""

    response = ask_gpt(prompt)

    try:
        result = json.loads(response)
        return result["category"], result["priority"]
    except Exception as e:
        print("Error parsing GPT response:", response)
        return "Unknown", "Normal"