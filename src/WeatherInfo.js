import React from "react";
import FormattedDate from "./FormattedDate";

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
            <span className="icon"> {props.data.iconUrl} </span>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <div className="details">
            <ul>
              <li>
                Humidity:<strong> {props.data.humidity}%</strong>
              </li>
              <li>
                Wind Speed: <strong>{Math.round(props.data.wind)}kmps </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
