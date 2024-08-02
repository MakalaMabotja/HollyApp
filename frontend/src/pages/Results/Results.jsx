import React,{useState} from 'react';
import LeftPanel from '../../components/LeftPanel';
import CenterPanel from '../../components/CenterPanel';
import RightPanel from '../../components/RightPanel';
import AirbnbPriceInfo from './components/AirbnbPriceInfo';
import FlightInfo from './components/FlightInfo';
import WeatherInfo from './components/WeatherInfo';
import ListingImage from './components/ListingImage'
import ListingDescription from './components/ListingDescription';
import ReviewBox from './components/ReviewBox';
import AlternativeOptionsDropdown from './components/AlternativeOptionsDropdown';
import CurrencyExchangeInfo from './components/CurrencyExchange';

import testListing from '../../../testListing.json'

const Results = () => {
  const { listing, flights, weatherData } = testListing;
  const [currentPage, setCurrentPage] = useState('results');

  return (
    <div>
      <div className='hidden md:flex md:flex-row md:flex-wrap h-screen'>
        <LeftPanel isResultsPage={currentPage === 'results'}>
          <AirbnbPriceInfo data={testListing.listing}/>
          <FlightInfo data={testListing.flights}/>
          <WeatherInfo data={testListing.weatherData}/>
          <CurrencyExchangeInfo/>
        </LeftPanel>
        <CenterPanel isResultsPage={currentPage === 'results'}>
          <ListingImage />
        </CenterPanel>
        <RightPanel isResultsPage={currentPage === 'results'}>
          <ListingDescription />
          <ReviewBox />
          <AlternativeOptionsDropdown />
        </RightPanel>
      </div>

      {/* Home page view for mobile */}
      <div className='flex flex-col items-center space-y-4 md:hidden'>
        <CenterPanel>
          <ListingImage />
        </CenterPanel>
        <LeftPanel>
          <AirbnbPriceInfo data={testListing.listing}/>
          <FlightInfo data={testListing.flights}/>
          <WeatherInfo data={testListing.weatherData}/>
          <CurrencyExchangeInfo/>
        </LeftPanel>
        <RightPanel>
          <ListingDescription />
          <ReviewBox />
          <AlternativeOptionsDropdown />
        </RightPanel>
      </div>
    </div>
      );
};

export default Results;
