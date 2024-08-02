import React from 'react';
import Card from '../../../components/ResultsCard';

const AirbnbPriceInfo = ({ data }) => {
  return (
    <Card
      title="Airbnb Listing"
      expandableContent={
        <div>
          <p>Amenities: {data.amenities}</p>
          <p>Description: {data.description}</p>
        </div>
      }
    >
      <p>Host Name: {data.hostName}</p>
      <p>Listing Name: {data.listingName}</p>
      <p>Dates: {data.dates}</p>
      <p>Rooms: {data.rooms}</p>
      <p>Beds: {data.beds}</p>
      <p>Bathrooms: {data.bathrooms}</p>
    </Card>
  );
};

export default AirbnbPriceInfo;
