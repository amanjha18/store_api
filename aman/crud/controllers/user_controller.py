from flask import Blueprint, render_template, request, jsonify
from models.user_model import insert_user, get_all_users, update_user, delete_user

bp = Blueprint('user', __name__)

@bp.route('/')
def index():
    users = get_all_users()
    return render_template('index.html', users=users)

@bp.route('/submit', methods=['POST'])
def submit_user():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    insert_user(name, email, phone)
    return jsonify({'message': 'Data saved successfully!'})

@bp.route('/update_user/<int:id>', methods=['PUT'])
def update_user_data(id):
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    update_user(id, name, email, phone)
    return jsonify({'message': 'Data updated successfully!'})

@bp.route('/delete_user/<int:id>', methods=['DELETE'])
def delete_user_data(id):
    delete_user(id)
    return jsonify({'message': 'Data deleted successfully!'})
