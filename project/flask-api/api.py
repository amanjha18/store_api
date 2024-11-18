from flask import Flask
from flask_admin import Admin

app = Flask(__name__)
admin = Admin(app)

@app.route('/data', methods=['GET'])
def get_data():
    return 'Hello, World!'

if __name__ == "__main__":        # on running python app.py
    app.run()



