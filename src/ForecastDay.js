import React, { useState } from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img src={props.data.condition.icon_url} alt="weather icon" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
