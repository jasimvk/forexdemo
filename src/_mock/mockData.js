const mockData = {
    goldSpotRate: {
      goldRate: 7027.9975, 
      askPrice: 7029.2462,  
      bidPrice: 7026.8958,  
      lowPrice: 7026.00,    
      highPrice: 7030.00,  
    },
    goldValueCalculator: {
      goldRate: 1725.50, 
    },
    goldPriceTable: [
      {
        quantity: '1 gm',
        buyPrice: 50.00,
        sellPrice: 49.50,
      },
      {
        quantity: '1 kg',
        buyPrice: 50000.00,
        sellPrice: 49500.00,
      },
      {
        quantity: '10 kg',
        buyPrice: 500000.00,
        sellPrice: 495000.00,
      },
      {
        quantity: '10 oz',
        buyPrice: 1763.00,
        sellPrice: 1749.00,
      },
    ],
    mockNewsData : [
      {
        title: 'Gold Prices Surge to New High',
        date: '2023-09-15',
      },
      {
        title: 'Investors Eye Gold Amid Economic Uncertainty',
        date: '2023-09-10',
      },
      {
        title: 'Gold Demand Expected to Rise in Coming Months',
        date: '2023-09-05',
      },
      {
        title: 'Central Banks Increase Gold Reserves',
        date: '2023-08-28',
      },
      {
        title: 'Gold Price Forecast: Bullish Trends Continue',
        date: '2023-08-20',
      },
    ],
  };
  
  export default mockData;
  