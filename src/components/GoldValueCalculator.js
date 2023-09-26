import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const GoldValueCalculator = () => {
  const [goldRate, setGoldRate] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity
  const [unit, setUnit] = useState('oz'); // Default unit
  const [calculatedValue, setCalculatedValue] = useState(null);

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
        // Extract the gold spot rate from the API response
        setGoldRate(data.price);
      })
      .catch((error) => {
        console.error('Error fetching gold spot rate:', error);
      });
  }, []);

  useEffect(() => {
    // Calculate the value based on the quantity, unit, and gold rate
    if (goldRate !== null) {
      let calculatedValue = 0;

      if (unit === 'oz') {
        calculatedValue = (quantity * goldRate).toFixed(2);
      } else if (unit === 'kg') {
        calculatedValue = (quantity * 35.27396 * goldRate).toFixed(2);
      } else if (unit === 'gm') {
        calculatedValue = (quantity * 0.03527396 * goldRate).toFixed(2);
      }

      setCalculatedValue(calculatedValue);
    }
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
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gold Value Calculator
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Unit</InputLabel>
          <Select
            value={unit}
            onChange={handleUnitChange}
          >
            <MenuItem value="oz">Ounces (oz)</MenuItem>
            <MenuItem value="kg">Kilograms (kg)</MenuItem>
            <MenuItem value="gm">Grams (gm)</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label={`Quantity (${unit})`}
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          sx={{ marginBottom: 2 }}
        />
        {goldRate !== null && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Gold Spot Rate: {goldRate} USD per ounce
          </Typography>
        )}
        {calculatedValue !== null && (
          <Typography variant="body2">
            Value: {calculatedValue} USD
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default GoldValueCalculator;
