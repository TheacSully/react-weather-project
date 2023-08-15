import React from "react";
import "./Overview.css";
export default function Overview() {
  let weatherData = {
    city: "Stardew Valley",
    date: "Saturday 14:22",
    description: "Heavy Rain",
  };
  return (
    <div className="Overview">
      <h1> {weatherData.city} </h1>
      <ul>
        <li>Last Updated: {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
    </div>
  );
}
