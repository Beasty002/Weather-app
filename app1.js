const apiKey = "a55f92e591ecdce9073c2ebbd56c9926";
const geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=pokhara";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const lat = 1;
const lon = 2;
const weatherResponse = `https://api.openweathermap.org/data/2.5/weather?unit=metric&lat={${lat}}&lon={${lon}}&appid=${apiKey}`
async function checkWeather(dd) {
    const response = await fetch(geoURL + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data[0].name);
    // document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp").innerHTML = data.main.temp;
    // document.querySelector(".humidity").innerHTML = data.main.humidity;
    // document.querySelector(".wind").innerHTML = data.wind.speed;

}
async function geoConverter(city) {
    checkWeather(city);
    const response = await fetch(geoURL + `q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}

searchBtn.addEventListener("click", () => {
    // checkWeather(searchBox.value);

    geoConverter(searchBox.value)
})

