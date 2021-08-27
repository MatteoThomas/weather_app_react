import React from "react";
import "../styles.css";
import moment from "moment";

const Dashboard = ({ weatherData }) => (
  <div className="weather">
    <div className="header">Current weather in {weatherData.name}</div>
    <div className="details">
      <p>Temperature: {weatherData.main.temp} </p>
      <p>{weatherData.weather[0].description}</p>
      <p>Day: {moment().format("dddd")}</p>
      <p>Date: {moment().format("LL")}</p>
    </div>
  </div>
);

export default Dashboard;
