import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function updateFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function updateCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          <a href="/" onClick={updateCelsius}>
            ºC
          </a>{" "}
          |{" "}
          <a href="/" onClick={updateFarenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit())}</span>
        <span className="unit">
          <a href="/" onClick={updateCelsius}>
            ºC
          </a>{" "}
          |{" "}
          <a href="/" onClick={updateFarenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  }
}
