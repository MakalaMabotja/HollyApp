#From this module we need the db connection, loading of the airbnb data, parsing of core data and handling queries
#We first need



from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from contextlib import contextmanager
import os

load_dotenv()
mongodb_uri = os.getenv('MONGODB_URI')

@contextmanager
def mongodb_connection(uri):
    client = MongoClient(uri, server_api=ServerApi('1'))
    try:
        yield client
    finally:
        client.close()

def airbnb_load():
    try:
        client = MongoClient(mongodb_uri, server_api=ServerApi('1'))
        client.admin.command('ping')
        print("Connected to MongoDB successfully!")
        db = client['sample_airbnb']
        collection = db['listingAndReviews'].find()
        return client, collection
    except Exception as e:
        print(f"An error occurred while connecting to MongoDB: {e}")
        return None, None

def upload_document(document, function: str, filter_criteria=None, update_fields=None):
    client, collection = airbnb_load()
    
    if collection is not None:
        if function == 'Insert':
            if isinstance(document, list):
                collection.insert_many(document)
            else:
                collection.insert_one(document)
        
        elif function == 'Update':
            if filter_criteria and update_fields:
                result = collection.update_one(filter_criteria, {'$set': update_fields})
                if result.modified_count > 0:
                    print("Document updated successfully!")
                else:
                    print("No document matched the criteria. No update performed.")
            else:
                print("Filter criteria and update fields are required for update operation.")
    else:
        print("Failed to load the collection.")
    
    if client:
        client.close()
