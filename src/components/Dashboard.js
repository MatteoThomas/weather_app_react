import React from "react";
import "../styles.css";

const Dashboard = ({ weatherData }) => (
  <div className="weather">
    <div className="header">{weatherData.name}</div>
    <div className="temp">
      <p>
        Wind Speed: {weatherData.wind.speed}
        <p>
          Degrees:
          {weatherData.wind.deg}
        </p>
      </p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  </div>
);

export default Dashboard;
