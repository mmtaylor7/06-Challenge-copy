var APIKey = "8059d089214d0c37818b7644ffe96232"

var city;


// var queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
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

        for (let i = 0; i < 6; i++) {

            document.querySelector('.wind' + i).innerHTML = weatherData.daily[i].wind_speed;
            document.querySelector('.temperature' + i).innerHTML = weatherData.daily[i].temp.max;
            }
                
            }
        // document.querySelector(".city").innerHTML = weatherData.name;
        // document.querySelector(".temperature0").innerHTML = weatherData.main.temp;
        // document.querySelector(".humidity0").innerHTML = weatherData.main.humidity;
        // document.querySelector(".wind0").innerHTML = weatherData.wind.speed;
    }
        
// for (let i = 0; i < 6; i++) {
//         console.log(weatherData.daily[i].temp.max)
//             // document.getElementById(`temp` + i)
            
//         }
//         // console.log(weatherData.daily);
//     }
    


// fetch("url").then(tacocat =>{
//     console.log(tacocat)
// })
