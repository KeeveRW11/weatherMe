var citySearchEl = document.querySelector("#city-search");
var cityNameEl = document.querySelector("#city-name");

getWeatherInfo = function() {
   var apiUrl = ("https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3")
   fetch(apiUrl).then(function(response){
    response.json()
    then(function(data){
    console.log(data);
});
});
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

  citySearchEl.addEventListener("submit", formSubmitHandler);
