import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Marquee from 'react-double-marquee';
import mockData from '../_mock/mockData';
import './GoldPriceNewsTicker.css'; // Make sure to create a CSS file for styling

const GoldPriceNewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const mockNewsData = mockData.mockNewsData;

 
  return (
    <Card sx={{ mt: 2, mb: 0, display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
      <Typography
        textAlign={'right                                     '}
        sx={{
          background: '#d18d3a',
          color: 'white',
          fontWeight: 900,
          p: 0.5,pl:1,pr:1 
        }}
      >
        HIGHLIGHTS:
      </Typography>

      <CardContent className="marquee-container" style={{
        padding:4
      }}>
      <Marquee direction="left"  >
          {mockNewsData[currentNewsIndex].title}
        </Marquee>
      </CardContent>
    </Card>
  );
};

export default GoldPriceNewsTicker;
