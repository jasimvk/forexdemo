import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SilverSpotRateComponent = () => {
  const [silverRate, setSilverRate] = useState(null);
  const [askPrice, setAskPrice] = useState(null);
  const [bidPrice, setBidPrice] = useState(null);
  const [lowPrice, setLowPrice] = useState(null);
  const [highPrice, setHighPrice] = useState(null);

  useEffect(() => {
    // Fetch silver spot rate data from the API
    fetch('https://www.goldapi.io/api/XAG/USD', {
      method: 'GET',
      headers: {
        'x-access-token': 'goldapi-2v38apbrln02mq2x-io',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Extract the silver spot rate, ask, bid, low, and high prices from the API response
        setSilverRate(data.price);
        setAskPrice(data.ask);
        setBidPrice(data.bid);
        setLowPrice(data.low_price);
        setHighPrice(data.high_price);
      })
      .catch((error) => {
        console.error('Error fetching silver spot rate:', error);
      });
  }, []);

  if (silverRate === null || askPrice === null || bidPrice === null || lowPrice === null || highPrice === null) {
    return (
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Loading Silver Spot Rate...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Silver Spot Rate
        </Typography>
        <Typography variant="h3" component="div">
          {silverRate} USD
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Ask Price: {askPrice} USD
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Bid Price: {bidPrice} USD
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Low Price: {lowPrice} USD
        </Typography>
        <Typography variant="body2" color="textSecondary">
          High Price: {highPrice} USD
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SilverSpotRateComponent;
