const input = document.getElementById("input-textbox");
const button = document.getElementById("btn");
const city = document.getElementById("city_name");
const cityTemp = document.getElementById("temp");
const weatherIcon = document.getElementById("icon");
const windSpeed = document.getElementById("wind");
const cloudy = document.getElementById("clouds");
const sunrise_time = document.getElementById("sunrise");
const sunset_time = document.getElementById("sunset");
const icon = document.getElementById("icon");
const mapDiv = document.getElementById("map");
const loaderP = document.getElementById("loader")
function displayData(){
    if (input.value === ""){
        alert("Please enter a city name");
        return; 
    }
    if(input.value){
      loaderP.removeAttribute("hidden");
        city.textContent = `City: ${(input.value).toUpperCase()}`;
        setTimeout(fetchWeather, 1000);
    }     
}

button.addEventListener("click", displayData);

const fetchWeather = () => {
const url = new URL('https://api.openweathermap.org/data/2.5/weather?');
let params = {q:input.value, appid:'5e545a67c58e42286061a778746311b4'};
url.search = new URLSearchParams(params).toString();
fetch(url)
  .then(response => response.json())
  .then(result => {
    console.log(url);
    console.log(result);
    loaderP.setAttribute("hidden", true);
    const temperatureInKelvin = result.main.temp;
    const tempIncelsius = (temperatureInKelvin - 273).toFixed();
    cityTemp.innerHTML = `Temperature: ${tempIncelsius} &#8451`;
    let iconcode = result.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/wn/" + iconcode +"@2x"+ ".png"; 
    icon.setAttribute('src', iconurl);
    icon.removeAttribute("hidden");
    const windSpd = result.wind.speed;
    windSpeed.innerHTML = `Wind speed: ${windSpd} meter/sec`;
    const cloud = result.clouds.all;
    cloudy.innerHTML = `Cloudy: ${cloud}%`;
    const sunrise = result.sys.sunrise;
    const time = getTime(sunrise);
    sunrise_time.innerHTML = `Sunrise: ${time} UTC`;
    const sunset =result.sys.sunset;
    const sunsetTime = getTime(sunset);
    sunset_time.innerHTML = `Sunset: ${sunsetTime} UTC`;
    let lat= result.coord.lat;
    let lon =result.coord.lon;
    mapDiv.innerHTML ="";
    let map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([lon, lat]),
      zoom: 4
    })
  });
  });

    const url2 = new URL('https://api.openweathermap.org/data/2.5/forecast?');
    url2.search = new URLSearchParams(params).toString();
    fetch(url2)
    .then(res => res.json())
    .then(result2 =>{
      console.log(result2.list.length);
      for(let i=0 ;i < result2.list.length; i++){
      const hourlyTemp = result2.list[i].main.temp;
      console.log(hourlyTemp);
      }
    });   
}

function getTime(unix_timestamp){
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}