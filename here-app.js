const axios = require('axios');

// Your HERE API Key
const API_KEY = 'RXgv3JChP3UF1Xih4hiHL0yF1O50mPWTYs93FAeyJgI'; // Replace with your actual API key

// Function to convert address to coordinates
async function getCoordinates(address) {
    const baseUrl = 'https://geocode.search.hereapi.com/v1/geocode';
    const params = {
        q: address,
        apiKey: API_KEY,
    };

    try {
        const response = await axios.get(baseUrl, { params });
        const results = response.data.items;
        console.log(response.data);
        console.log("address:", response.data.items[0].address);
        console.log("position:", response.data.items[0].position);
        console.log("access:", response.data.items[0].access);
        console.log("mapView:", response.data.items[0].mapView);
        console.log("scoring:", response.data.items[0].scoring);
        
        if (results.length > 0) {
            const { lat, lng } = results[0].position;
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        } else {
            console.log('No results found for the given address.');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
    }
}

// Example address
const address = 'Jalan Alpukat XII no 412, tanjung duren utara, grogol, jakarta barat, indonesia';
getCoordinates(address);
