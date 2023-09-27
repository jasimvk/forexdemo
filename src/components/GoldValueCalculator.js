import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import mockData from '../_mock/mockData'; // Import the global mock data

const GoldValueCalculator = () => {
  const { goldRate } = mockData.goldValueCalculator; // Extract the gold rate from mock data
  const [quantity, setQuantity] = useState(1); // Default quantity
  const [unit, setUnit] = useState('oz'); // Default unit
  const [calculatedValue, setCalculatedValue] = useState(null);

  useEffect(() => {
    // Calculate the value based on the quantity, unit, and mock gold rate
    let calculatedValue = 0;

    if (unit === 'oz') {
      calculatedValue = (quantity * goldRate).toFixed(2);
    } else if (unit === 'kg') {
      calculatedValue = (quantity * 35.27396 * goldRate).toFixed(2);
    } else if (unit === 'gm') {
      calculatedValue = (quantity * 0.03527396 * goldRate).toFixed(2);
    }

    setCalculatedValue(calculatedValue);
  }, [quantity, unit, goldRate]);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleUnitChange = (event) => {
    const newUnit = event.target.value;
    setUnit(newUnit);
  };

  return (
    <Card sx={{ m: 2, border: "1px solid #c1c1c1" }}>
      <Typography variant="h5"
        sx={{
          background: "#ffb861",
          // color: "white",
          padding: 1,
        }}
        textAlign={"center"}
      >
       GOLD RATE SEARCH
      </Typography>
      <CardContent>
        <Grid container spacing={2}> {/* Removed spacing */}
          <Grid item xs={5} md={4} lg={4}>
            <FormControl fullWidth 
            // sx={{ marginBottom: 2 }}
            >
              {/* <InputLabel>Unit</InputLabel> */}
              <Select
                value={unit}
                onChange={handleUnitChange}
              >
                {/* <MenuItem value="oz">Ounces (oz)</MenuItem>
                <MenuItem value="kg">Kilograms (kg)</MenuItem>
                <MenuItem value="gm">Grams (gm)</MenuItem> */}
                <MenuItem value="oz">OZ</MenuItem>
                <MenuItem value="kg">KG</MenuItem>
                <MenuItem value="gm">GM</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} md={3} lg={3}>
            <TextField
              label={`Quantity`}
              type="number"
              placeholder='Quantity'
              value={quantity}
              onChange={handleQuantityChange}
              // sx={{ marginBottom: 2 }}
            />

          </Grid>
          <Grid  item xs={6} md={4} lg={5}>
           
          {/* <TextField
              label={`Rate`}
              type="number"
              placeholder='Rate'
              value={calculatedValue}
              
           disabled 
              sx={{ marginBottom: 2 }}
            /> */}
            {calculatedValue !== null && (
              <Typography variant="h5" textAlign={"right"}
              sx={{
                padding:1.5,
                border:"1px solid",
                borderRadius:1,
                overflow:'hidden'
              }}
              >
                {calculatedValue} 
              </Typography>
            )}
          </Grid>

        </Grid>


      </CardContent>
    </Card>
  );
};

export default GoldValueCalculator;
