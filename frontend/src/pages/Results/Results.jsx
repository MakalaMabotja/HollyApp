import React from 'react';
import LeftPanel from '../../components/LeftPanel';
import CenterPanel from '../../components/CenterPanel';
import RightPanel from '../../components/RightPanel';
import AirbnbPriceInfo from './components/AirbnbPriceInfo';
import FlightInfo from './components/FlightInfo';
import WeatherInfo from './components/WeatherInfo';
import Chatbox from '../../components/Chatbox';
import ListingImage from './components/ListingImage'
import ListingDescription from './components/ListingDescription';
import ReviewBox from './components/ReviewBox';
import AlternativeOptionsDropdown from './components/AlternativeOptionsDropdown';

const Results = () => {
  return (
    <>
      <LeftPanel>
        <AirbnbPriceInfo />
        <FlightInfo />
        <WeatherInfo />
      </LeftPanel>
      <CenterPanel>
        <Chatbox />
        <ListingImage />
      </CenterPanel>
      <RightPanel>
        <ListingDescription />
        <ReviewBox />
        <AlternativeOptionsDropdown />
      </RightPanel>
    </>
  );
};

export default Results;
