const apiKey = "1f7d75b6a882996e1dd23c5d0ecd36f8";

async function getWeather(){

const city =
document.getElementById("city").value;

if(city===""){

alert("Please Enter City");

return;
}

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetchWeather(url);

}

async function fetchWeather(url){

try{

const response =
await fetch(url);

const data =
await response.json();

document.getElementById("cityName")
.innerText = data.name;

document.getElementById("temperature")
.innerText =
`${Math.round(data.main.temp)}°C`;

document.getElementById("description")
.innerText =
data.weather[0].description;

document.getElementById("humidity")
.innerText =
`${data.main.humidity}%`;

document.getElementById("wind")
.innerText =
`${data.wind.speed} m/s`;

const weather =
data.weather[0].main;

let icon = "☀️";

if(weather==="Clouds") icon="☁️";

if(weather==="Rain") icon="🌧️";

if(weather==="Thunderstorm") icon="⛈️";

if(weather==="Snow") icon="❄️";

if(weather==="Mist") icon="🌫️";

document.getElementById("icon")
.innerHTML = icon;

}
catch(error){

alert("City Not Found");

}

}

function getLocationWeather(){

navigator.geolocation.getCurrentPosition(
showPosition
);

}

async function showPosition(position){

const lat =
position.coords.latitude;

const lon =
position.coords.longitude;

const url =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetchWeather(url);

}

function updateClock(){

const now = new Date();

document.getElementById("clock")
.innerText =
now.toLocaleString();

}

updateClock();

setInterval(updateClock,1000);
