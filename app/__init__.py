from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    from .routes import ticket_routes
    app.register_blueprint(ticket_routes)

    return app