import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const GoldSpotRateComponent = () => {
  const [goldRate, setGoldRate] = useState(null);
  const [askPrice, setAskPrice] = useState(null);
  const [bidPrice, setBidPrice] = useState(null);
  const [lowPrice, setLowPrice] = useState(null);
  const [highPrice, setHighPrice] = useState(null);

  useEffect(() => {
    // Fetch gold spot rate data from the API
    fetch('https://www.goldapi.io/api/XAU/USD', {
      method: 'GET',
      headers: {
        'x-access-token': 'goldapi-2v38apbrln02mq2x-io',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Extract the gold spot rate, ask, bid, low, and high prices from the API response
        setGoldRate(data.price);
        setAskPrice(data.ask);
        setBidPrice(data.bid);
        setLowPrice(data.low_price);
        setHighPrice(data.high_price);
      })
      .catch((error) => {
        console.error('Error fetching gold spot rate:', error);
      });
  }, []);

  if (goldRate === null || askPrice === null || bidPrice === null || lowPrice === null || highPrice === null) {
    return (
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Loading Gold Spot Rate...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gold Spot Rate
        </Typography>
        <Typography variant="h3" component="div">
          {goldRate} AED
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Ask Price: {askPrice} AED
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Bid Price: {bidPrice} AED
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Low Price: {lowPrice} AED
        </Typography>
        <Typography variant="body2" color="textSecondary">
          High Price: {highPrice} AED
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GoldSpotRateComponent;
