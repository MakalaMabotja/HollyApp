from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import List, Optional
import datetime
import os

load_dotenv()
MONGO_URI = os.getenv('MONGODB_URI')

# Connection to the MongoDB database
def mongodb_connection(uri):
    client = MongoClient(uri, server_api=ServerApi('1'))
    return client

# Loading of the Airbnb sample database and returning the listings and reviews collection
def airbnb_load():
    try:
        client = mongodb_connection(MONGO_URI)
        client.admin.command('ping')
        print("Connected to MongoDB successfully!")
        db = client['sample_airbnb']
        return client, db
    except Exception as e:
        print(f"An error occurred while connecting to MongoDB: {e}")
        return None, None

# Class model for handling vector embedding data
class EmbeddingVectors(BaseModel):
    _id: Optional[str]
    listing_id: str
    embeddings: List[float]

    @staticmethod
    def search_embeddings(collection_name: str, query: List[float], top_k: int = 5):
        """
        Searches for the top K listings based on the embedding vectors.

        Args:
            collection_name (str): The name of the collection to search in.
            query (List[float]): The embedding vector to search for.
            top_k (int): The number of top matches to return.

        Returns:
            List[dict]: A list of the top K listings that match the search query.
        """
        results = []
        try:
            client, db = airbnb_load()
            if db:
                collection = db[collection_name]
                if collection:
                    results = list(collection.find(
                        {"embeddings": {"$near": query}}
                    ).limit(top_k))
                else:
                    print(f"Collection '{collection_name}' not found in the database.")
            else:
                print("Failed to load the database.")
        except Exception as e:
            print(e)
        finally:
            if client:
                client.close()
        return results

def upload_document(document, collection_name: str, function: str, filter_criteria=None, update_fields=None):
    client, db = airbnb_load()
    
    if db:
        collection = db[collection_name]
        if collection:        
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
        print("Failed to load the database.")
    
    if client:
        client.close()
