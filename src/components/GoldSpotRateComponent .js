import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import mockData from '../_mock/mockData';

const GoldSpotRateComponent = () => {
    const { goldRate, askPrice, bidPrice, lowPrice, highPrice } = mockData.goldSpotRate;

    // useEffect(() => {

    // }, []);

    return (
        <Card sx={{ m: 2, mt:0, border: "1px solid #c1c1c1", }}>
            <Typography variant="h4"
                sx={{
                    background: "#ffb861",
                    // color: "white",
                    padding: 1,
                }}
                textAlign={"center"}
            >
                GOLD SPOT RATE
            </Typography>
            <CardContent>
                <Grid container spacing={2}> {/* Removed spacing */}
                    <Grid item xs={6} md={6} lg={6}>
                        <Card  sx={{ border: "1px solid #c1c1c1" }}>
                            <Typography variant="h6"
                                textAlign={"center"} gutterBottom
                                sx={{
                                    background: "#d18d3a",
                                    color: "white",
                                    p: 1
                                }}>
                                ASK PRICE
                            </Typography>
                            <Typography variant="h6" textAlign={"center"} gutterBottom>
                                {askPrice.toFixed(2)}  
                            </Typography>
                        </Card>
                    </Grid>


                    <Grid item xs={6} md={6} lg={6}>
                        <Card  sx={{ border: "1px solid #c1c1c1" }} >
                            <Typography variant="h6"
                                sx={{
                                    background: "#d18d3a",
                                    color: "white",
                                    p: 1
                                }}
                                textAlign={"center"} gutterBottom>
                                BID PRICE
                            </Typography>
                            <Typography variant="h6" textAlign={"center"} gutterBottom>
                                {bidPrice.toFixed(2)}  
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <Card  sx={{ border: "1px solid #c1c1c1" }} >
                            <Typography // variant="h"
                                textAlign={"center"} gutterBottom
                                sx={{
                                    background: "#418b38",
                                    color: "white",
                                    p: 1,
                                    fontSize:15
                                }}>
                                LOW PRICE
                            </Typography>
                            <Typography variant="body1" textAlign={"center"} gutterBottom>
                                {lowPrice.toFixed(2)}  
                            </Typography>
                        </Card>
                    </Grid>


                    <Grid item xs={6} md={6} lg={6}>
                        <Card   sx={{ border: "1px solid #c1c1c1" }}>
                            <Typography // variant="h6"
                                sx={{
                                    background: "#b53131",
                                    color: "white",
                                    p: 1,
                                    fontSize:15
                                }}
                                textAlign={"center"} gutterBottom>
                                HIGH PRICE
                            </Typography>
                            <Typography variant="body1" textAlign={"center"} gutterBottom>
                                {highPrice.toFixed(2)}  
                            </Typography>
                        </Card>
                    </Grid>

                </Grid>

               
            </CardContent>
        </Card >
    );
};

export default GoldSpotRateComponent;
