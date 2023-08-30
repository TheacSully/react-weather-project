import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"></img>{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19</span>
            <span className="WeatherForecast-temperature-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
