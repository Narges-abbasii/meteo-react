import React, { useState } from "react";
import axios from "axios";
import "./Meteorology.css";

export default function Meteorology() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let apikey = "b318adc2a4e42ff5a70at1cf59b30fbo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
  }
  if (loaded) {
    return (
      <div className="weather-app">
        <header>
          <form
            className="search-form"
            id="search-form"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Enter a city.."
              required
              id="search-form-input"
              className="search-form-input"
              onChange={updateCity}
            />
            <input
              type="submit"
              value="search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <ul>
            <li>Temperature: {Math.round(temperature)}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind}km/h</li>
            <img src={icon} alt="weather icon" />
          </ul>
        </main>
        <footer>
          This project was coded by
          <a
            href="https://github.com/Narges-abbasii"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Narges Abbasi
          </a>{" "}
          and is on
          <a
            href="https://github.com/Narges-abbasii/Meteorology"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and
          <a
            href="https://meteorology-sigma.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Vercel
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="weather-app">
        <header>
          <form
            className="search-form"
            id="search-form"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Enter a city.."
              required
              id="search-form-input"
              className="search-form-input"
              onChange={updateCity}
            />
            <input
              type="submit"
              value="search"
              className="search-form-button"
            />
          </form>
        </header>
        <footer>
          This project was coded by
          <a
            href="https://github.com/Narges-abbasii"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Narges Abbasi
          </a>{" "}
          and is on
          <a
            href="https://github.com/Narges-abbasii/Meteorology"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and
          <a
            href="https://meteorology-sigma.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Vercel
          </a>
        </footer>
      </div>
    );
  }
}
