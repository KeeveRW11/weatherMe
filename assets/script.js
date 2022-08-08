var getCityInfo = function(name) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=5&appid=b8d240244c4cb961083733683eedcad3";
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });   
};

getCityInfo();