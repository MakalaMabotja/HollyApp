#From this module we need the db connection, loading of the airbnb data, parsing of core data and handling queries
#We first need to connect to the database, then retrieve the entries of the airbnb collection.
#Required Functions:
# 1. database connection (Done)
# 2. retrieval of airbnb listing and reviews (Done)
# 3. if embeddings doesn't exist then we need to create the embeddings
#    We want to embed the description given by the host for the user to query against
#    Additional emdebbings could include reviews but for the simple version we just need the 



from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

load_dotenv()

#Connection to the mongo DB database
def mongodb_connection(uri):
    client = MongoClient(uri, server_api=ServerApi('1'))
    return client

#Loading of the air_bnb sample database and reurning the listingss and reviews collection
def airbnb_load():
    try:
        mongodb_uri = os.getenv('MONGODB_URI')
        client = MongoClient(mongodb_uri, server_api=ServerApi('1'))
        client.admin.command('ping')
        print("Connected to MongoDB successfully!")
        db = client['sample_airbnb']
        return client, db
    except Exception as e:
        print(f"An error occurred while connecting to MongoDB: {e}")
        return None, None

def upload_document(document, function: str, filter_criteria=None, update_fields=None):
    client, db = airbnb_load()
    
    if db is not None:
        if function == 'Insert':
            if isinstance(document, list):
                db.insert_many(document)
            else:
                db.insert_one(document)
        
        elif function == 'Update':
            if filter_criteria and update_fields:
                result = db.update_one(filter_criteria, {'$set': update_fields})
                if result.modified_count > 0:
                    print("Document updated successfully!")
                else:
                    print("No document matched the criteria. No update performed.")
            else:
                print("Filter criteria and update fields are required for update operation.")
    else:
        print("Failed to load the database.")
    
    if client:
        client.close()
