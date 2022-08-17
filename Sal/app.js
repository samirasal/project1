let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${month} ${date} ${year}, ${hours}:${minutes}:${seconds}`;

let weather = {
  city: [
    {
      name: "paris",
      temp: 19.7,
      humidity: 80,
    },
    {
      name: "tokyo",
      temp: 17.3,
      humidity: 50,
    },
    {
      name: "lisbon",
      temp: 30.2,
      humidity: 20,
    },
    {
      name: "san francisco",
      temp: 20.9,
      humidity: 100,
    },
    {
      name: "oslo",
      temp: -5,
      humidity: 20,
    },
  ],
};
function tellTemperature(city) {
  return `It is currently ${weather.city.temp} in ${weather.city.name} with a humidity of ${weather.city.humidity}`;
}
// weather.forEach(tellTemperature);

function search(event) {
  event.preventDefault();
  let apiKey = "af945b912edb9d07f1b541e8b01d770f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;
  let city = document.querySelector("#search-text").value;
  axios.get(apiUrl).then(showTemperature);
}

//  // let searchText = document.querySelector("#search-text");
//   let cityName = document.querySelector("#city");
//   if (searchText.value) {
//     cityName.innerHTML = searchText.value;
//   } else {
//     cityName.innerHTML = null;
//     alert("Please enter a city");
//   }
// }

let searchForm = document.querySelector("#appearance");
searchForm.addEventListener("submit", search);

function convertCelsius(event) {
  event.preventDefault();
  let changeDegree = document.querySelector("#degree");
  let degree = changeDegree.innerHTML;
  changeDegree.innerHTML = Math.round("theTemperature");
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertCelsius);

function showTemperature(response) {
  console.log(response.main.base.temp);
  let theTemperature = Math.round(response.base.main.temp);
}
axios.get(apiUrl).then(showTemperature);
function tellPosition(position) {
  let gpsButton = document.querySelector("#button-selector");
  gpsButton.innerHTML = `Latitude:${position.coord.lat},Longitude:${position.coord.lon}`;

  gpsButton.addEventListener("click", search);

  let apiKey = "af945b912edb9d07f1b541e8b01d770f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;
}

navigator.geolocation.getCurrentPosition(tellPosition);
