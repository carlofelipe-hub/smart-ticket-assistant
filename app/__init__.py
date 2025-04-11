from flask import Flask

def create_app():
    app = Flask(__name__)
    
    from .routes import ticket_routes
    app.register_blueprint(ticket_routes)

    return app