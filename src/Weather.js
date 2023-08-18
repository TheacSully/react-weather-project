import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> New York</h1>
      <ul className="main">
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div class="d-flex weather-temperature">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
            <strong id="temperature">12°C</strong>
          </div>
        </div>
        <div className="col-6">
          <div className="details">
            <ul>
              <li>
                Precipitation:<strong> 15% </strong>
              </li>
              <li>
                Humidity:<strong> 15%</strong>
              </li>
              <li>
                Wind Speed: <strong>15kmph </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
