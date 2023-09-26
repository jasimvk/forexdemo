import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import mockData from '../_mock/mockData'; // Import the global mock data

const GoldPriceTable = () => {
  const [goldPrices, setGoldPrices] = useState([]);

  useEffect(() => {
    
    const goldPricesData = mockData.goldPriceTable;
    setGoldPrices(goldPricesData);
  }, []);

  if (goldPrices.length === 0) {
    return (
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Loading Gold Prices...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gold Buy and Sell Prices
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Quantity</TableCell>
                <TableCell>Buy Price (USD)</TableCell>
                <TableCell>Sell Price (USD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {goldPrices.map((priceRow) => (
                <TableRow key={priceRow.quantity}>
                  <TableCell>{priceRow.quantity}</TableCell>
                  <TableCell>{priceRow.buyPrice.toFixed(2)}</TableCell>
                  <TableCell>{priceRow.sellPrice.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default GoldPriceTable;
