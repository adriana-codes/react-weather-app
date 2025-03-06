import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleCity(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      sensation: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "0be192793f55aa475o5602t2cabd6e24";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-input"
                autoFocus="on"
                onChange={handleUpdate}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="form-btn btn-primary"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
