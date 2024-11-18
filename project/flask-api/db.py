import mysql.connector

# Create a connection object
connection = mysql.connector.connect(
    host="localhost",     # Replace with your MySQL server hostname
    user="root",          # Replace with your MySQL username
    password="new_password",  # Replace with your MySQL password
    database="data" # Replace with the name of your database (optional)
)

# Check if the connection was successful
if connection.is_connected():
    print("Connected to MySQL!")
else:
    print("Failed to connect to MySQL.")
