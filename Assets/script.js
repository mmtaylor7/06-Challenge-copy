var APIKey = "8059d089214d0c37818b7644ffe96232"

var city;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

async function displayCurrentWeather() {
    city = document.querySelector('.user-input').value;
    
    if(city) {
       let data = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=8059d089214d0c37818b7644ffe96232");
        data = await data.json();
        let lat = data[0].lat;
        let lon = data[0].lon;
        let weatherData = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial");
        weatherData = await weatherData.json();
        document.querySelector(".city").innerHTML = weatherData.name;
        document.querySelector(".current-temp").innerHTML = weatherData.main.temp;
        document.querySelector(".current-humidity").innerHTML = weatherData.main.humidity;
        document.querySelector(".current-wind").innerHTML = weatherData.wind;

        console.log(weatherData);
    }
    
}
