import React from 'react';
import Card from '../../../components/ResultsCard';

const CurrencyExchangeInfo = ({ data }) => {
    return (
      <Card
        title="Currency Exchange Info"
        expandableContent={<p>More detailed exchange rates here.</p>}
      >
        <p>Currency: USD to EUR</p>
        <p>Exchange Rate: 1 USD = 0.85 EUR</p>
      </Card>
    );
  };

export default CurrencyExchangeInfo;
