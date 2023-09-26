import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Slide, List, ListItem, ListItemText } from '@mui/material';

const mockNewsData = [
  {
    title: 'Gold Prices Surge to New High',
    date: '2023-09-15',
  },
  {
    title: 'Investors Eye Gold Amid Economic Uncertainty',
    date: '2023-09-10',
  },
  {
    title: 'Gold Demand Expected to Rise in Coming Months',
    date: '2023-09-05',
  },
  {
    title: 'Central Banks Increase Gold Reserves',
    date: '2023-08-28',
  },
  {
    title: 'Gold Price Forecast: Bullish Trends Continue',
    date: '2023-08-20',
  },
];

const GoldPriceNewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    // Automatically advance to the next news item with animation
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % mockNewsData.length);
    }, 5000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gold Price News Ticker
        </Typography>
        <Paper elevation={3}>
          <List dense>
            {mockNewsData.map((news, index) => (
              <Slide
                key={index}
                in={index === currentNewsIndex}
                direction="up"
                timeout={{ enter: 1000, exit: 1000 }} // Adjust animation duration (in milliseconds) as needed
                mountOnEnter
                unmountOnExit
              >
                <ListItem>
                  <ListItemText primary={news.title} secondary={news.date} />
                </ListItem>
              </Slide>
            ))}
          </List>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default GoldPriceNewsTicker;
