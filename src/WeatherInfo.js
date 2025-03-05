import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="weather-data">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 weather-data-temperature">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-data-img"
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 d-flex justify-content-center weather-description">
          <ul>
            <li>Feels like: {props.data.sensation}ºC</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
