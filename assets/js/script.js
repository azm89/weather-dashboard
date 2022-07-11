var apiKey = "27755f1624a6ac8589dcc66052bdaf2e";
cityName = "San Francisco";

// submit the form to fetch weather information

    // fetch the city name from the text <input>

    // call the `fetchGeolocation` and pass the city name

// handle button clicks to fetch weather information

    //get the city name from the clicked button's (event.target) data- attribute

    // call the `fetchGeolocation` and pass the city name

//fetch geolocation data (Geocoding API)
function fetchGeolocation(cityName) { 
    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=27755f1624a6ac8589dcc66052bdaf2e&limit=5`;

    fetchGeolocation(request)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        //access lat and lon from data

        //call fetchOneCallWeather and pass through the lat and lon
    })
}

// fetchGeolocation("Seattle");
//fetch weather data (Onecall)

function fetchOneCallWeather(lat, lon) {
    var lat = $("#lat-field").val();
    var request = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=27755f1624a6ac8589dcc66052bdaf2e&units=imperial&exclude=hourly,minutely`

        fetchGeolocation(request)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //render / display the weather data
    })
    
};
console.log(request);

// function myFunctA(){
//     var number = 1;

//     myFunctB(number);
// }

// function myFunctB(number) { 
    
// }