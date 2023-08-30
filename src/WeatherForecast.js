import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = "Macclesfield";
  const apiKey = "ct90a4732c5fd752o670f2a66b23ca38";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="weather icon"
          ></img>{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19</span>
            <span className="WeatherForecast-temperature-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
