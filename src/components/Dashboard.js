import React from "react";
import "../styles.css";

const Dashboard = ({ weatherData }) => (
  <div className="weather">
    <div className="header">Current weather in {weatherData.name}</div>
    <div className="details">
      <p>{weatherData.main.temp}deg</p>
      <p>{weatherData.weather[0].description}</p>
    </div>
  </div>
);

export default Dashboard;
