var cityFormEl = document.querySelector("#city-search");
var cityInputEl = document.querySelector("#city-name");

var apiKey = "&limit=5&appid=b8d240244c4cb961083733683eedcad3";
var cityCoords = "http://api.openweathermap.org/geo/1.0/direct?q=";
var openWeatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat="

//Search for City functionality
var formSubmitHandler = function(event) {
    event.preventDefault();
    var cities = cityInputEl.value.trim();

    if (cities) {
        getCityInfo(cities);
        cityInputEl.value = "";
    }else {
        alert("Please enter a valid city name.");
    }
};

               
//get the city coorddinates to plug into the one call api below
var getCityInfo = function(name) {
  var apiUrl = cityCoords + name + apiKey;
    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    var cityLat = data.lat;
                    var cityLon = data.lon;
                    console.log = data
                    //"https://api.openweathermap.org/data/2.5/onecall?lat="
                    var weatherApiUrl = openWeatherApi + cityLat + "&lon=" + cityLon + "&appid=" + apiKey;
                    fetch(weatherApiUrl)
                      .then(function(response) {
                        if (response.ok) {
                            response.json().then(function(data) {
                            console.log(data);
                        });
                    };
                });
            });
        };                       
    });   
};



cityFormEl.addEventListener("submit", formSubmitHandler);