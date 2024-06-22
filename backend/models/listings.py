from typing import List, Tuple
from pydantic import BaseModel
from bson.decimal128 import Decimal128

# Pydantic class for handling the Listing data
class Listing(BaseModel):
    _id: str
    name: str
    description: str
    image_url: str
    dimensions: dict
    room_type: str
    location: dict
    price: int
    total: int = 0 

    def total_cost(self, dates: Tuple):
        """
        Calculates the total cost based on the number of nights and price per night.

        Args:
            dates (tuple): Tuple of start and end dates (datetime objects).

        Updates:
            self.total: Updates the total cost for the stay.
        """
        start_date, end_date = dates
        total_nights = (end_date - start_date).days 
        self.total = self.price * total_nights

def create_listing(data, dates: Tuple):
    listing = Listing(
        _id=str(data['_id']),
        name=data.get('name', ''),
        description=data.get('description', ''),
        image_url=data.get('images', {}).get('picture_url', ''),
        dimensions={
            'beds': int(data.get('beds', 0)),
            'bathrooms': int(data.get('bathrooms', 0).to_decimal()),
            'accommodates': int(data.get('accommodates', 0)),
            'rooms': int(data.get('bedrooms', 0))
        },
        location={
            'country': data.get('address', {}).get('country', ''),
            'city': data.get('address', {}).get('market', '')
        },
        price=int(data.get('price', 0).to_decimal()),
        room_type=data.get('room_type', ''),
        total=0
    )
    
    listing.total_cost(dates) 
    return listing
