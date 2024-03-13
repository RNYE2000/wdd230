// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'b88ffd6a70b07e08b5d1414929164d55'; // Provided API key
const url = `https://api.openweathermap.org/data/2.5/weather`;

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
    const lat = 49.7584; // Latitude of Trier, Germany
    const lon = 6.6412; // Longitude of Trier, Germany
    const units = 'imperial'; // Set units to imperial

    try {
        const response = await fetch(`${url}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);

        if (response.ok) {
            const data = await response.json();
            //console.log(data); // Output the results to the console for testing
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}

function displayResults(data) {
    document.getElementById("current-temp").innerText = data.main.temp;
}

apiFetch();