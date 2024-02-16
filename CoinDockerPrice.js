// CoinDocker - Price
const currentDate = new Date().toLocaleString();
const fetch = require('node-fetch');

const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

// Symbol for Dymension (DYM) and Bitcoin (BTC)
const symbols = ['BTC', 'DYM', 'TIA', 'XAI', 'MOVR', 'SEI', 'SUI', 'FET'];

// Create an array of promises for fetching the prices
const promises = symbols.map(symbol => {
    const url = `${apiUrl}?symbol=${symbol}`;
    return fetch(url, {
        headers: {
            'Accepts': 'application/json',
            'X-CMC_PRO_API_KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const price = data.data[symbol].quote.USD.price.toFixed(4);
        console.log('\x1b[41m',`[${symbol}] : $${price}                                                         `);
    })
    .catch(error => console.error(`Error fetching ${symbol} price:`, error));
});

// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
    .then(() => {
        console.log('')
        console.log(' CoinDocker | ',currentDate);
    })
    .catch(error => console.error('Error:', error));
