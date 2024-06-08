// src/services/currencyService.js
const getRates = async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data;
  };
  
  export default { getRates };
  