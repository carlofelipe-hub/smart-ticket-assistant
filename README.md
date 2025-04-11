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
- 🧩 **CRM-Ready JSON Output**: Simulates pushing to a CRM platform.

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

## ⚙️ Backend Setup (Flask)

1. Create a `.env` file:

```bash
OPENAI_API_KEY=your-key-here
```

2. Install dependencies:

```bash
pip install flask flask-cors python-dotenv openai
```

3. Run the server:

```bash
python run.py
```

It will start on `http://localhost:5000`

---

## 🌐 Frontend (React + Tailwind)

The frontend is a simple React interface that allows users to submit a support ticket and view AI-generated responses.

### 🧰 Tech Used
- React
- Axios (for HTTP requests)
- Tailwind CSS (for styling)
- LocalStorage (to persist ticket history)

---

### 🚀 How to Run Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
  npm install
```

3. If using Tailwind for the first time, generate config:

```bash
 npx tailwindcss init -p
```

4. Make sure these files exist:

- tailwind.config.js
- postcss.config.js

5. In tailwind.config.js, make sure content is set like this:

```javascript
content: ["./src/**/*.{js,jsx,ts,tsx}"]
```

6. Replace src/index.css with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Start the dev server:

```bash
npm start
```


### ✨ Features
Submit ticket via form

Backend API integration (/process_ticket)

Displays AI-generated category, priority, and response

Ticket history stored locally using localStorage

Modern UI styled with Tailwind CSS

---

🖼 Sample Screenshot


![image](https://github.com/user-attachments/assets/41fc4443-a3eb-4f30-95c6-24c93d7c85d3)


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

---

## 🙋‍♂️ Author
Made with ❤️ by Carlo.
