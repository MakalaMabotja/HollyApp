import React from 'react';
import Card from '../../../components/ResultsCard';

const WeatherInfo = ({ data }) => {
  return (
    <Card
      title="Weather Info"
      expandableContent={
        <div>
        </div>
      }
    >
      <p>Selected Dates: {data.selectedDates}</p>
    </Card>
  );
};

export default WeatherInfo;
