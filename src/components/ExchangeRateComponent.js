import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ExchangeRateComponent = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const selectedCurrencies = ['USD', 'INR', 'GBP', 'EUR'];

  useEffect(() => {
    // Fetch exchange rates data from the API
    fetch('https://v6.exchangerate-api.com/v6/ed760a71a797633fb65151c0/latest/USD')
      .then((response) => response.json())
      .then((data) => {
        // Filter the exchange rates for the selected currencies
        const filteredRates = Object.fromEntries(
          Object.entries(data.conversion_rates)
            .filter(([currency]) => selectedCurrencies.includes(currency))
        );
        setExchangeRates(filteredRates);
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
      });
  }, []);

  if (!exchangeRates) {
    return (
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Loading...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {selectedCurrencies.map((currency) => (
            <div key={currency} style={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" gutterBottom>
                {currency}
              </Typography>
              <Typography variant="body2">
                {exchangeRates[currency].toFixed(2)}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeRateComponent;
