const lat = 41.19636723414627;
const lon = -112.0864831734643;
const API_KEY = "b88ffd6a70b07e08b5d1414929164d55";

const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Imperial&appid=${API_KEY}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=Imperial&appid=${API_KEY}`;

var currentTemp = document.getElementById('current-temp');
var humidity = document.getElementById('humidity');
var windChill = document.getElementById('wind-chill');
var weatherIcon = document.getElementById('weather-icon');
var captionDesc = document.getElementById('condition');
var forecast = document.getElementById('forecast');

//Get Current Weather
fetch(currentWeatherAPI)
    .then(res => res.json())
    .then((res) => {
        currentTemp.innerText = res.main.temp + ' °F';
        humidity.innerText = res.main.humidity + '%';
        windChill.innerText = '(' + (res.main.temp - res.main.feels_like).toFixed(2) + ') °F'
        displayResults(res)
    })

//Get Forecast
fetch(forecastURL)
    .then(res => res.json())
    .then((res)  => {
        let days = {};
        res.list.forEach((data, index) => {
            if(Object.keys(days).length >= 3) return;
            if(!Object.keys(days).includes(data.dt_txt.substring(0, 10))){
                days[data.dt_txt.substring(0,10)] =  [data.main.temp];
            } else {
                days[data.dt_txt.substring(0,10)].push(data.main.temp);
            }
        })

        for(const date in days){
            let d = document.createElement('div');
            let e = new Date(date);
            days[date] = (days[date].reduce((a, b) => a + b, 0) / days[date].length).toFixed(2);
            d.innerHTML = `<span class="date">${e.getMonth() + 1}/${e.getDate() + 1}/${e.getFullYear()}<span> : <span class="temp">${days[date]}</span> °F`;
            forecast.appendChild(d);
        }
    
    })
   
function displayResults(data) {
    weatherIcon.setAttribute('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
    captionDesc.innerHTML = data.weather[0].main
}
