var cityFormEl = document.querySelector("#city-search");
var cityInputEl = document.querySelector("#city-name");
var cityInputEl = document.getElementById("city-name");

var apiKey = "5&appid=b8d240244c4cb961083733683eedcad3";
var cityCoords = "http://api.openweathermap.org/geo/1.0/direct?q=";
var openWeatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat="
var weatherIconUrl = 'http://openweathermap.org/img/wn/';
var currentDay = moment().format('M/DD/YYYY');

               
//get the city coorddinates to plug into the one call api below
var getCityInfo = function(cityName) {
  var apiUrl = cityCoords + cityName + "&limit=5" + apiKey;
    fetch(apiUrl).then(function(response) {
    if(response.ok) {
     response.json().then(function(data) {
        var cityLat = data[0].lat;
          console.log(cityLat);
            var cityLon = data[0].lon;
                console.log(cityLon);
                //"https://api.openweathermap.org/data/2.5/onecall?lat="
                var weatherApiUrl = openWeatherApi + cityLat + "&lon=" + cityLon + "&units=metric&exclude=minutely,hourly,alerts" + apiKey;
                fetch(weatherApiUrl).then(function(response) {
                if (response.ok) {
                    console.log("here");
                    console.log(response);
                    response.json().then(function(oneCallData) {
                        console.log(oneCallData);
                        oneCallFunction(oneCallData);                                                   
                        });
                    };
                });
            });
        };                       
    });   
};

// Display Current Data - How do i put this in a div thats already created?
//trying to pull data from the code above to display in div weather-now.
//
var oneCallFunction = function (weather) {
    if (weather.length === 0) {
        weatherContainerEl.textContent = "No weather data found.";
        return;
    }
    // Create Temperature element
    var temperature = document.createElement('p');
    temperature.id = "temperature";
    temperature.innerHTML = "Temperature:" + weather.current.temp.toFixed(1) + "°C";
    loadWeather(weather.current.temp.toFixed(1) + "°C",weather.current.humidity,weather.current.wind_speed,weather.current.uvi);
};

// back tick = ` allows multiple lines to be displayed as a string
// Load current day weather
function loadWeather(temperature,humidity,UV,windSpeed) {
    var weatherDiv = document.getElementById("current-weather");
    var weatherElements = 
    `<p>Temperature `+temperature+`</p>
    <p>Humidity `+humidity+`</p>
    <p>Wind Speed `+windSpeed+`</p>
    <p>UV Index `+UV+`</p>`;
    weatherDiv.innerHTML = weatherElements;
    return weatherDiv.firstChild;
    
};
//Search for City
var formSubmitHandler = function(event) {
    event.preventDefault();
        var cities = cityInputEl.value.trim();
        
        if (cities) {
        getCityInfo(cities);
        saveSearchHistory(cities);
        cityInputEl.value = "";
        }else {
        alert("Please enter a valid city name.");
    }
};
// Save search history to local storage.
function saveSearchHistory(cities) {
    searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    console.log(searchHistory, cities)
    if (!searchHistory.includes(cities)) {
        searchHistory.push(cities);
    }

    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};

var searchHistory = [];


cityFormEl.addEventListener("submit", formSubmitHandler);