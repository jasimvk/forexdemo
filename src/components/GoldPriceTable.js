import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GoldPriceTable = () => {
  const [goldPrices, setGoldPrices] = useState([]);
  
  useEffect(() => {
    // Fetch gold prices for different quantities from the new API endpoint
    fetch('https://www.goldapi.io/api/XAU/USD', {
      method: 'GET',
      headers: {
        'x-access-token': 'goldapi-2v38apbrln02mq2x-io',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Extract gold prices for different quantities
        const goldPricesData = [
          {
            quantity: '1 gm',
            buyPrice: data.price_gram_24k,
            sellPrice: data.price_gram_24k,
          },
          {
            quantity: '1 kg',
            buyPrice: data.price_gram_24k * 1000,
            sellPrice: data.price_gram_24k * 1000,
          },
          {
            quantity: '10 kg',
            buyPrice: data.price_gram_24k * 10000,
            sellPrice: data.price_gram_24k * 10000,
          },
          {
            quantity: '10 oz',
            buyPrice: data.price_gram_24k * 10 * 35.27396,
            sellPrice: data.price_gram_24k * 10 * 35.27396,
          },
        ];
        setGoldPrices(goldPricesData);
      })
      .catch((error) => {
        console.error('Error fetching gold prices:', error);
      });
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
