import React from 'react';
import Card from '../../../components/ResultsCard';

const FlightInfo = ({ data }) => {
  return (
    <Card
      title="Flight Info"
      expandableContent={
        <div>
          <p>Layovers: {data.layovers}</p>
          <p>Stops: {data.stops}</p>
        </div>
      }
    >
      <div className="flex items-center">
        <p className="mr-2">{data.departureTime}</p>
        <span className="mr-2">✈️</span>
        <p>{data.arrivalTime}</p>
      </div>
      <p>Stops: {data.numberOfStops}</p>
    </Card>
  );
};

export default FlightInfo;
