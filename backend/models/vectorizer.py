import requests
import os
from pprint import pprint
from dotenv import load_dotenv
from mongodb import airbnb_load, EmbeddingVectors
from sentence_transformers import SentenceTransformer
from pymongo import InsertOne
from listings import Listing

load_dotenv()

hf_token = os.getenv("HUGGINGFACE_KEY")
embedding_url = os.getenv("HUGGINGFACE_URL")
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

def generate_embedding(text: str) -> list[float]:
    # response = requests.post(
    #     embedding_url,
    #     headers={"Authorization": f"Bearer {hf_token}"},
    #     json={"inputs": text}
    # )

    # if response.status_code != 200:
    #     raise ValueError(f"Request failed with status code {response.status_code}: {response.text}")
    
    embeddings = model.encode([text])
    return embeddings[0].tolist()

def embed_query(query):
    return generate_embedding(query)

def retrieve_listing(query):
    embedded_query = embed_query(query)
    results = EmbeddingVectors.search_embeddings(collection_name='listingEmbeddings', query=embedded_query, top_k=5)
    return results

def add_embeddings_to_listings(batch_size: int = 100, start_from=0):
    client, db = airbnb_load()
    if db is not None:
        listings_collection = db['listingsAndReviews']
        embeddings_collection = db['listingEmbeddings']
        
        # List to hold the batch of operations
        operations = []
        
        for doc in listings_collection.find():
            if not embeddings_collection.find_one({"listing_id": doc['_id']}):
                description_embedding = generate_embedding(doc['description'])
                embedding_doc = EmbeddingVectors(
                    listing_id=str(doc['_id']),
                    embeddings=description_embedding
                )
                operations.append(InsertOne(embedding_doc.dict()))

                # If the batch size is reached, execute the batch
                if len(operations) == batch_size:
                    embeddings_collection.bulk_write(operations)
                    operations = []  # Clear the list for the next batch
        
        # Execute any remaining operations
        if operations:
            embeddings_collection.bulk_write(operations)
        
        client.close()
    else:
        print("Failed to connect to the database.")


if __name__ == "__main__":
    add_embeddings_to_listings()
