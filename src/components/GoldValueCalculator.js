import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
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
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Gold Spot Rate: {goldRate} USD per ounce (Mock Data)
        </Typography>
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
