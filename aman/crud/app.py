from flask import Flask
from config import Config
from models import db
from controllers import user_controller

app = Flask(__name__)
app.config.from_object(Config)

# Initialize the database
db.init_app(app)

# Register routes
app.register_blueprint(user_controller.bp)

if __name__ == '__main__':
    app.run(debug=True)
