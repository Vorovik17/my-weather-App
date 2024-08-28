function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;


  let now = new Date();
  let minuten = document.querySelector("#minuten");
  let hours = document.querySelector("#hours");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuersday",
    "Freiday",
    "Sumstag",
  ];
  let day = days[now.getDay()];
  currentDay.innerHTML = day;
  hours.innerHTML = now.getHours();
  minuten.innerHTML = now.getMinutes();
}

if (minuten <10) {
  minuten = `0${minuten}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}
let enterCity = document.querySelector("#enter-city");
enterCity.addEventListener("submit", changeCity);
