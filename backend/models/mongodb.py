from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

load_dotenv()
password = os.getenv('MONGODB_PASSWORD')
username = os.getenv('MONGODB_USERNAME')
connection_string = os.getenv('MONGODB_CONNECTION_STRNIG')

uri = f"mongodb+srv://{username}:{password}{connection_string}"


client = MongoClient(connection_string, server_api=ServerApi('1'))
try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')
    print("Connected to MongoDB successfully!")
except Exception as e:
    print(f"An error occurred while connecting to MongoDB: {e}")