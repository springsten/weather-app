import { IWeatherData } from "./models/IWeatherData";
import "./style.css";

const searchForm = document.getElementById("searchForm") as HTMLFormElement;
const searchText = document.getElementById("searchText") as HTMLInputElement;

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault(); // Ser till att sidan inte laddas om
  const city = searchText.value;
  fetchWeatherData(city);
});

function fetchWeatherData(city: string) {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=758823ff1cbd4d63923142731241510&q=" +
      city
  )
    .then((response) => response.json())
    .then((result: IWeatherData) => {
      const app: HTMLElement | null = document.getElementById("app");
      const weatherInfo: HTMLElement | null =
        document.getElementById("weatherInfo");

      // Töm tidigare väderinformation:
      if (weatherInfo) {
        weatherInfo.innerHTML = "";
      }
      const weatherCard = document.createElement("div");
      weatherCard.className = "weather-card";
      weatherCard.innerHTML = `
        <h2>Stad: ${result.location.name}<h2>
        <p>Temperatur: ${result.current.temp_c}°C</p>
        <p>Känns som: ${result.current.feelslike_c}°C</p>
      `;

      weatherInfo?.appendChild(weatherCard);
      if (app && weatherInfo) {
        app.appendChild(weatherInfo);
      }
    });
}
