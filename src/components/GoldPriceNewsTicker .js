import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Slide, List, ListItem, ListItemText } from '@mui/material';
import mockData from '../_mock/mockData';


const GoldPriceNewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const mockNewsData = mockData.mockNewsData
  useEffect(() => {
    // Automatically advance to the next news item with animation
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % mockNewsData.length);
    }, 5000);  

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
                direction="right"
                timeout={{ enter: 1000, exit: 1000 }} 
                mountOnEnter
                unmountOnExixt
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
