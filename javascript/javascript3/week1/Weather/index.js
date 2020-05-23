const input = document.getElementById("input-textbox");
const button = document.getElementById("btn");
const city = document.getElementById("city-name");
const cityTemp = document.getElementById("temp");
const weatherIcon = document.getElementById("icon");
const windSpeed = document.getElementById("wind");
const cloudy = document.getElementById("clouds");
const sunriseTime = document.getElementById("sunrise");
const sunsetTime = document.getElementById("sunset");
const icon = document.getElementById("icon");
const mapDiv = document.getElementById("map");
const loaderP = document.getElementById("loader");
const errMessage = document.getElementById("errorMessage");

function displayData() {
  if (input.value === "") {
    errMessage.removeAttribute("hidden");
    errMessage.textContent = "Please enter a city name";
    return;
  }
  if (input.value) {
    errMessage.textContent = "";
    loaderP.removeAttribute("hidden");
    city.textContent = `City: ${(input.value).toUpperCase()}`;
    //setTimeout is to show loading icon for a second.
    setTimeout(fetchWeather, 1000);
  }
}

button.addEventListener("click", displayData);
let weatherApiParams;
const fetchWeather = () => {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather?');
  weatherApiParams = { q: input.value, appid: '5e545a67c58e42286061a778746311b4' };
  url.search = new URLSearchParams(weatherApiParams).toString();
  fetch(url)
    .then(response => response.json())
    .then(readJsonAndDisplayWeather);
}

function readJsonAndDisplayWeather(apiResponseJson) {
  const temperatureInKelvin = apiResponseJson.main.temp;
  const tempIncelsius = (temperatureInKelvin - 273).toFixed();
  let iconcode = apiResponseJson.weather[0].icon;
  let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x" + ".png";
  const windSpd = apiResponseJson.wind.speed;
  const cloud = apiResponseJson.clouds.all;
  const sunrise = apiResponseJson.sys.sunrise;
  const time = getTime(sunrise);
  const sunset = apiResponseJson.sys.sunset;
  const sunsetingTime = getTime(sunset);
  let lat = apiResponseJson.coord.lat;
  let lon = apiResponseJson.coord.lon;

  loaderP.setAttribute("hidden", true);
  cityTemp.innerHTML = `Temperature: ${tempIncelsius} &#8451`;
  icon.setAttribute('src', iconurl);
  icon.removeAttribute("hidden");
  windSpeed.innerHTML = `Wind speed: ${windSpd} meter/sec`;
  cloudy.innerHTML = `Cloudy: ${cloud}%`;
  sunriseTime.innerHTML = `Sunrise: ${time} UTC`;
  sunsetTime.innerHTML = `Sunset: ${sunsetingTime} UTC`;
  mapDiv.innerHTML = "";
  // usage of open layers map from here https://openlayers.org/en/latest/doc/quickstart.html
  //creates an OpenLayers Map object
  let map = new ol.Map({
    //To attach the map object to the <div>, the map object takes a target into arguments. The value is the id of the <div>
    target: 'map',
    //The layers: [ ... ] array is used to define the list of layers available in the map. The first and only layer right now is a tiled layer:
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    //The view allows to specify the center, resolution, and rotation of the map. The simplest way to define a view is to define a center point and a zoom level. 
    view: new ol.View({
      center: ol.proj.fromLonLat([lon, lat]),
      zoom: 4
    })
  });

  const mapUrl = new URL('https://api.openweathermap.org/data/2.5/forecast?');
  mapUrl.search = new URLSearchParams(weatherApiParams).toString();
  fetch(mapUrl)
    .then(res => res.json())
    .then(result2 => {
      console.log(result2.list.length);
      for (let i = 0; i < result2.list.length; i++) {
        const hourlyTemp = result2.list[i].main.temp;
        console.log(hourlyTemp);
      }
    });
}
function getTime(unix_timestamp) {
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return formattedTime;
}