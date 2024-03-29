import React, { useState, useEffect } from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import DateTimeView from './DateTimeView';

const ExchangeRateComponent = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const selectedCurrencies = ['USD', 'AED', 'INR', 'GBP', 'EUR'];

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
    <Card sx={{
      m: 2, ml:0,mr:0,mb:0
      // backgroundColor:"#f9fafbcc"  
    }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
          {selectedCurrencies.map((currency) => (
            <div
              style={{
                display: 'flex',
                padding: currency === "USD" ? "5px 10px 5px 10px" : 0,
                border: currency === "USD" ? "1px solid #b1b1b1" : "none",
                borderRadius: 5,
                justifyContent: 'flex-start',
                alignItems: "center"
              }}

            >
              <img src={`../assets/flags/${currency}.svg`}
                style={{ width: 50, maxHeight: 32, marginRight: 5 }}
                alt={`${currency}-flag`} />
              <div key={currency}
                style={{ textAlign: 'left', justifyContent: "center" }}>
                <Typography variant="subtitle2" >
                  {currency}
                </Typography>
                <Typography variant="subtitle2" >

                  {exchangeRates[currency].toFixed(2)}
                </Typography>
                {/* */}
              </div>

            </div>
          ))}
            <DateTimeView />
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeRateComponent;
