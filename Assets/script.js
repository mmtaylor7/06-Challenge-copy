var APIKey = "8059d089214d0c37818b7644ffe96232"
var city;
let date = new Date().toLocaleDateString();
console.log(date);





async function displayCurrentWeather() {
    city = document.querySelector('.user-input').value;
    
    
    
    if(city) {
       let data = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=8059d089214d0c37818b7644ffe96232");
        data = await data.json();
        let lat = data[0].lat;
        let lon = data[0].lon;
        let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`);
        weatherData = await weatherData.json();
        console.log(weatherData);

            
            document.querySelector('.city').innerHTML = city;
            // document.querySelector('.current-image').innerHTML = weatherData.current.weather.icon;
            document.querySelector('.uvOriginal').innerHTML = weatherData.current.uvi;
            document.querySelector('.temperatureOriginal').innerHTML = weatherData.current.temp;
            document.querySelector('.windOriginal').innerHTML = weatherData.current.wind_speed;
            document.querySelector('.humidityOriginal').innerHTML = weatherData.current.humidity;

        for (let i = 0; i < 5; i++) {
            
            document.querySelector('.wind' + i).innerHTML = weatherData.daily[i].wind_speed;
            document.querySelector('.temperature' + i).innerHTML = weatherData.daily[i].temp.max;
            document.querySelector('.humidity' + i).innerHTML = weatherData.daily[i].humidity;
            }
                
            }
        
    }
        
// 
    


