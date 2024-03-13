// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');

const apiKey = 'b88ffd6a70b07e08b5d1414929164d55';
const url = `https://api.openweathermap.org/data/2.5/weather`;

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
    const lat = 41.196409455369434;
    const lon = -112.08700862041097;
    const units = 'imperial'; // Set units to imperial

    try {
        const response = await fetch(`${url}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Output the results to the console for testing
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}

function displayResults(data) {
    currentTemp.innerHTML = data.main.temp;
    weatherIcon.setAttribute('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
    captionDesc.innerHTML = data.weather[0].main
}

apiFetch();