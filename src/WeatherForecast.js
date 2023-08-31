import React, { useState } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Macclesfield";
    const apiKey = "ct90a4732c5fd752o670f2a66b23ca38";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
