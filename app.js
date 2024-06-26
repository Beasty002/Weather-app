const apiKey = "a55f92e591ecdce9073c2ebbd56c9926";
const geoURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

const lat = 1;
const lon = 2;
const weatherResponse = `https://api.openweathermap.org/data/2.5/weather?unit=metric&lat={${lat}}&lon={${lon}}&appid=${apiKey}`
async function checkWeather(city) {
    const response = await fetch(geoURL + `q=${city}` + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        console.log(data.weather[0].main)
        weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
};


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

