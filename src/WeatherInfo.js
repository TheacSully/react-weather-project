import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="main">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={props.data.iconUrl} />
            <span className="temperature">
              <Temperature celsius={Math.round(props.data.temperature)} />
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="details">
            <ul>
              <li>
                Humidity:<strong> {props.data.humidity}%</strong>
              </li>
              <li>
                Wind Speed: <strong>{Math.round(props.data.wind)} kmph </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
