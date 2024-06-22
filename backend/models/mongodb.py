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
    def search_embeddings(collection_name: str, query:List[str]):
        """
        This method is to search the listingAndReviews collection based on the index of the embedded values

        Args:
            collection_name (str): _description_
            query (List[str]): _description_

        Returns:
            _type_: _description_
        """
        results = []
        try:
            client, db = airbnb_load()
            if db:
                collection = db[collection_name]
                for q in query:
                    if collection:
                        result = collection.find_one({"_id":"q"})
                        results.append(result)
                    else:
                        print(f"Collection '{collection_name}' not found in the database.")
                        return []
            else:
                print("Failed to load the database.")
                return []
        except Exception as e:
            print(e)
            return []
        
#Pydantic class for handling the Listing data
class Listing(BaseModel):
    _id: str
    description: str
    image_url: str
    dimensions: dict
    location: str
    price: int
    total:int
    
    def total_cost(self, dates: tuple) -> int:
        """
        Calculates the total cost based on the number of nights and price per night.

        Args:
            dates (tuple): Tuple of start and end dates (datetime objects).
            price (int): Price per night.

        Returns:
            int: Total cost for the stay.
        """
        start_date, end_date = dates
        total_nights = (end_date - start_date).days - 1  # Calculate total nights

        self.total =  self.price * total_nights

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