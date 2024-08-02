import React from 'react';
import Card from '../../../components/ResultsCard';

const AirbnbPriceInfo = ({ data }) => {
  const formattedPrice = `$${data.price}`;
  return (
    <Card
      title="Airbnb Listing"
      expandableContent={
        <div>
          <p>Host Name: {data.hostName}</p>
          <p>Dates: {data.dates}</p>
          <p>Amenities: {data.amenities}</p>
          <p>Description: {data.description}</p>
        </div>
      }
      price = {formattedPrice}
    >
      <div className="text-center mb-4">
        <p className="text-lg font-bold">{data.location}</p>
      </div>

      <div className="flex justify-center items-center mt-auto mb-4">
        <div className="flex items-center mx-2">
          <span className="text-gray-600 text-lg" role="img" aria-label="Home">🏠</span>
          <span className="ml-1">{data.rooms}</span>
        </div>
        <div className="flex items-center mx-2">
          <span className="text-gray-600 text-lg" role="img" aria-label="Bed">🛏️</span>
          <span className="ml-1">{data.beds}</span>
        </div>
        <div className="flex items-center mx-2">
          <span className="text-gray-600 text-lg" role="img" aria-label="Bathroom">🚿</span>
          <span className="ml-1">{data.bathrooms}</span>
        </div>
      </div>
    </Card>
  );
};

export default AirbnbPriceInfo;
