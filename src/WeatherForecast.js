import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiKey = "0be192793f55aa475o5602t2cabd6e24";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <hr />
        <div className="row mt-4">
          {forecast.map((dailyForecast, index) =>
            index < 5 ? (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
