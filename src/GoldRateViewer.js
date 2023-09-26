import React, { useState, useEffect } from 'react';

const GoldRateViewer = () => {
  const [goldRate, setGoldRate] = useState(null);
  const apiUrl = 'https://metals-api.com/api/latest';

  // You can simulate real-time updates with a useEffect hook
  useEffect(() => {
    // Replace this with your API call to fetch the real-time gold rate
    const fetchGoldRate = async () => {
      try {
        // Fetch the gold rate data from your API
        const response = await fetch('YOUR_GOLD_RATE_API_ENDPOINT');
        const data = await response.json();

        // Update the goldRate state with the fetched data
        setGoldRate(data.goldRate);
      } catch (error) {
        console.error('Error fetching gold rate:', error);
      }
    };

    // Call the fetchGoldRate function initially and set up an interval for updates
    fetchGoldRate();
    const intervalId = setInterval(fetchGoldRate, 60000); // Update every 60 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="gold-rate-container">
      <h1>Gold Rate Viewer</h1>
      <div className="gold-rate">
        {goldRate !== null ? `Gold Rate: ${goldRate} USD per ounce` : 'Loading...'}
      </div>
    </div>
  );
};

export default GoldRateViewer;
