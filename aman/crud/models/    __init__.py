# models/__init__.py

from flask_mysqldb import MySQL

mysql = MySQL()  # Initialize MySQL object for database connection

# Import all models here
from .user_model import *
