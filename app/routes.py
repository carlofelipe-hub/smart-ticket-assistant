from flask import Blueprint, request, jsonify
from .classifier import classify_ticket
from .responder import generate_response

ticket_routes = Blueprint('ticket_routes', __name__)

@ticket_routes.route('/process_ticket', methods=['POST'])
def process_ticket():
    data = request.get_json()

    if not data or 'content' not in data:
        return jsonify({"error": "Invalid ticket format"}), 400

    category, priority = classify_ticket(data['content'])
    suggested_reply = generate_response(data['content'], category)

    result = {
        "ticket_id": data.get("ticket_id"),
        "category": category,
        "priority": priority,
        "suggested_reply": suggested_reply
    }

    return jsonify(result)
