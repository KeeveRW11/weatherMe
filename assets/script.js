var getWeatherInfo = function() {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3");
};

getWeatherInfo();//test