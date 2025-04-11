# 🧠 Smart Ticket Assistant

AI-powered ticket triage and response tool built using OpenAI's API.

## 📌 Overview

This project simulates a smart customer support system that:
1. Automatically classifies incoming tickets.
2. Detects priority levels based on ticket content.
3. Generates suggested responses in a consistent company tone.
4. Outputs structured JSON ready for CRM or contact center platforms.

It’s designed for support teams looking to scale response time, reduce manual sorting, and enhance quality using AI.

> ⚙️ Built as a personal project to demonstrate automation and AI integration skills.

---

## 🚀 Features

- ✅ **Ticket Classification**: Tags each ticket (e.g. Billing, Tech Support, Feature Request)
- 🔥 **Priority Detection**: Identifies urgency based on tone and keywords
- ✍️ **AI-Generated Responses**: Drafts smart replies using GPT-4 with custom tone and rules
- 👁️ **Admin Review Dashboard (WIP)**: View ticket, tags, and AI suggestion
- 🧩 **CRM-Ready JSON Output**: Simulates pushing to a CRM like Five9 or Salesforce

---

## 🛠 Tech Stack

| Layer       | Tech Used         |
|-------------|-------------------|
| Language    | Python or Node.js |
| AI Engine   | OpenAI API (GPT-4)|
| Data Store  | JSON or SQLite    |
| Frontend    | (Optional) React or HTML |
| Deployment  | Localhost / Replit / Vercel (if frontend added) |

---

## 📁 Project Structure

- `app/`
  - `__init__.py` – Initializes the Flask app
  - `routes.py` – API endpoints for processing tickets
  - `openai_utils.py` – Functions for interacting with the OpenAI API
  - `classifier.py` – Handles ticket categorization and priority logic
  - `responder.py` – Generates AI-powered ticket replies
- `data/`
  - `sample_tickets.json` – Sample input tickets
  - `generated_responses.json` – Stores AI-generated outputs
- `frontend/` (optional)
  - `index.html` – Simple web interface for submitting and viewing tickets
- `.env.example` – Example for environment variables like OpenAI API key
- `requirements.txt` – Python dependencies
- `README.md` – You're looking at it
- `run.py` – App entry point

---

## 🧪 Example Input
    {
      "ticket_id": 1001,
      "customer_name": "Jane D.",
      "content": "My payment didn’t go through but it still charged my card. Please help asap."
    }



---

## 💬 Output (AI Processed)

    {
      "ticket_id": 1001,
      "category": "Billing",
      "priority": "High",
      "suggested_reply": "Hi Jane, thanks for reaching out. We’re sorry to hear about the payment issue. I’ve escalated this to our billing team and will get back to you shortly."
    }

---

## 🧠 How It Works
1. Load tickets via JSON file or frontend
2. Backend uses OpenAI API to:
3. Classify category
4. Determine urgency
5. Generate a reply
6. Results are saved and exported as JSON

---

## 👨‍💼 Why I Built This
As someone transitioning from player support to a technical role, I wanted to combine:

- My experience in customer support workflows
- My interest in automation and AI
- Real-world relevance to contact center and CRM platforms.
