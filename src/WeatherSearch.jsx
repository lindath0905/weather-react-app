import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherSearchEngine() {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city.."
          value={city}
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      {temperature !== "" && (
        <ul>
          <li className="city">{city}</li>
          <li>Temperature: {temperature}°C</li>
          <li>{description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
        </ul>
      )}
    </div>
  );
}
