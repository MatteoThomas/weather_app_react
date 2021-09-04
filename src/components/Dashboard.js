import React from "react";
import "../styles.css";
import Icon from "./Icon";

const Dashboard = ({ weatherData }) => (
  <div id="weatherContainer">
    <Icon iconData={weatherData.weather[0].icon} />
    <div id="weatherInfo">
      <h2>{weatherData.name}</h2>
      <h2> {weatherData.main.temp.toFixed(0)} f</h2>
      <h3>
        {" "}
        max {weatherData.main.temp_max.toFixed(0)} / min{" "}
        {weatherData.main.temp_min.toFixed(0)}
      </h3>
      <h3>humidity {weatherData.main.humidity}%</h3>
    </div>
  </div>
);

export default Dashboard;
