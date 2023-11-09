const API_KEY = "72e14a46d9392b2b43c94ec28ee973cf";
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const desc = document.getElementById("desc");
const main = document.getElementById("main");
const city = document.getElementById("city");

navigator.geolocation.getCurrentPosition(
  (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        temp.innerText = `${data.main.temp.toFixed(0)}℃`;
        city.innerText = data.name;
        desc.innerText = data.weather[0].description;
        main.innerHTML = data.weather[0].main;
        const iconUrl = `https://openweathermap.org/img/w/${data.weather[0]?.icon}.png`;
        icon.setAttribute("src", iconUrl);
      });
  },
  (error) => console.error(error),
  { enableHighAccuracy: true }
);
