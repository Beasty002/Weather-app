const apiKey = "a55f92e591ecdce9073c2ebbd56c9926";
const geoURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const lat = 1;
const lon = 2;
const weatherResponse = `https://api.openweathermap.org/data/2.5/weather?unit=metric&lat={${lat}}&lon={${lon}}&appid=${apiKey}`
async function checkWeather(city) {
    const response = await fetch(geoURL + `q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    console.log(data.name);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value)
})

