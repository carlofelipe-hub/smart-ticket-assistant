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
smart-ticket-assistant/ │ ├── backend/ │ ├── main.py # Entry point for the backend server │ ├── openai_utils.py # Handles OpenAI API calls (classification + response) │ ├── ticket_classifier.py # Logic to determine category and priority of tickets │ └── response_generator.py # Logic for generating AI-based ticket replies │ ├── mock_tickets/ │ └── sample_tickets.json # Example support tickets for testing │ ├── responses/ │ └── generated_responses.json # Stores AI-drafted responses for review │ ├── frontend/ # (Optional) Simple UI if you want to visualize results │ └── index.html │ ├── .env.example # Sample environment variables (like OpenAI API key) ├── requirements.txt # Python dependencies └── README.md # You're here

