import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import mockData from '../_mock/mockData';

const GoldSpotRateComponent = () => {
    const { goldRate, askPrice, bidPrice, lowPrice, highPrice } = mockData.goldSpotRate;

    // useEffect(() => {
       
    // }, []);

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
