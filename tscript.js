var citySearchEl = document.querySelector("#city-search");
var cityNameEl = document.querySelector("#city-name");

getCityInfo = function() {
   var apiUrl = ("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3")
   fetch(apiUrl).then(function(response){
    response.json()
    then(function(data){
    console.log(data);
});
});
};


var formSubmitHandler = function(event) {
    event.preventDefault();
    if (city) {
        getCityInfo(city);
        nameInputEl.value = "";
    }
    else {
        alert("Not a Valid City Name")
    }
    console.log(event);
};

citySearchEl.addEventListener("submit", formSubmitHandler);



//1 this Api call works//
var getCityInfo = function() {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3");
};

getCityInfo();

//2 we get a promise so it still works
var getCityInfo = function() {
    var response = fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3");
    console.log(response);
};

getCityInfo();

//3 response gave values
var getCityInfo = function() {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3")
    .then(function(response) {
     console.log("inside",response);   
    });
    
    console.log("outside");
};

getCityInfo();

//4 Got array of five
var getCityInfo = function() {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b8d240244c4cb961083733683eedcad3")
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
    
    
};

getCityInfo();