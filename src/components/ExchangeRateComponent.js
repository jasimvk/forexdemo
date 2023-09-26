import React, { useState, useEffect } from 'react';

const ExchangeRateComponent = () => {
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    // Fetch exchange rates data from the API
    fetch('https://v6.exchangerate-api.com/v6/ed760a71a797633fb65151c0/latest/USD')
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.conversion_rates);
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
      });
  }, []);

  if (!exchangeRates) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Exchange Rates</h1>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{exchangeRates.USD}</td>
            <td><img src="https://www.countryflags.io/US/flat/64.png" alt="US Flag" /></td>
          </tr>
          <tr>
            <td>INR</td>
            <td>{exchangeRates.INR}</td>
            <td><img src="https://www.countryflags.io/IN/flat/64.png" alt="IN Flag" /></td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{exchangeRates.GBP}</td>
            <td><img src="https://www.countryflags.io/GB/flat/64.png" alt="GB Flag" /></td>
          </tr>
          <tr>
            <td>Euro</td>
            <td>{exchangeRates.EUR}</td>
            <td><img src="https://www.countryflags.io/EU/flat/64.png" alt="EU Flag" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRateComponent;
