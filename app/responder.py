from .openai_utils import ask_gpt

def generate_response(content, category):
    prompt = f"""
You are a customer support agent. Write a professional, helpful reply to the customer based on their message below.

Category: {category}

Use a friendly and clear tone. Mention that their concern has been noted and is being handled.

Customer message:
\"\"\"{content}\"\"\"

Respond with a short message that sounds human, not robotic.
"""

    response = ask_gpt(prompt)
    return response.strip()