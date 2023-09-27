import React, { useState, useEffect } from 'react';
import { Card, CardContent, Paper, List, ListItem, ListItemText } from '@mui/material';
import mockData from '../_mock/mockData';
import './GoldPriceNewsTicker.css'; // Make sure to create a CSS file for styling

const GoldPriceNewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const mockNewsData = mockData.mockNewsData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % mockNewsData.length);
    }, 2000); // Reduced interval to scroll quickly

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="marquee-container" sx={{mt:1, mb:0}}>
      <CardContent >
        
          <List className="marquee-list">
            {mockNewsData.map((newsItem, index) => (
              <ListItem key={index} className={index === currentNewsIndex ? 'active' : ''}>
                <ListItemText primary={newsItem.title} />
              </ListItem>
            ))}
          </List>
      
      </CardContent>
    </Card>
  );
};

export default GoldPriceNewsTicker;
