document.getElementById('weather-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const weatherResult = document.getElementById('weather-result');

    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7c5eddd21msh982b8f846d03b1bp198c18jsn695a2cc8df88', // Replace with your API key
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);

        weatherResult.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherResult.style.display = 'block'; // Show result
    } catch (error) {
        weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
        weatherResult.style.display = 'block'; // Show error
    }
});

// async function fetchWeatherData() {
//     const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'e7c5eddd21msh982b8f846d03b1bp198c18jsn695a2cc8df88', // Replace with your API key
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) throw new Error(`Error: ${response.status}`);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// }
