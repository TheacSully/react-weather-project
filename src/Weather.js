import React from "react";
import "./Weather.css";
import Rainy from "./rainy.png";

export default function Main() {
  let weatherData = {
    temperature: 14,
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img src={Rainy} alt="" />
          <strong>{weatherData.temperature}</strong>
          <span className="units">
            <p>°C|°F</p>
          </span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity:
            <span> {weatherData.humidity}</span>%
          </li>
          <li>
            Wind:
            <span> {weatherData.wind} </span>
            kmph
          </li>
        </ul>
      </div>
    </div>
  );
}
