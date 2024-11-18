from flask_mysqldb import MySQL

# Initialize MySQL
db = MySQL()

def get_all_users():
    cursor = db.connection.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    cursor.close()
    return users

def insert_user(name, email, phone):
    cursor = db.connection.cursor()
    cursor.execute("INSERT INTO users (name, email, phone) VALUES (%s, %s, %s)", (name, email, phone))
    db.connection.commit()
    cursor.close()

def update_user(id, name, email, phone):
    cursor = db.connection.cursor()
    cursor.execute("UPDATE users SET name = %s, email = %s, phone = %s WHERE id = %s", (name, email, phone, id))
    db.connection.commit()
    cursor.close()

def delete_user(id):
    cursor = db.connection.cursor()
    cursor.execute("DELETE FROM users WHERE id = %s", (id,))
    db.connection.commit()
    cursor.close()
