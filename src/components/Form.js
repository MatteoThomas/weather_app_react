import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Form() {
  // state for city name
  const [name, setName] = useState("denver");
  // state for all data = weatherData
  const [data, setData] = useState([]);
  // state for icon
  const [icon, setIcon] = useState([]);
  // state for latitude, longitude
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  // gets geolocation of user for local weather
  const handleClick = () => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          // set data state as result
          setData(result);
          // set icons as the icon from the returned data
          let icons = result.weather[0].icon;
          // set icons as state
          setIcon(icons);
        });
    };
    fetchData();
  };

  const handleChange = (e) => {
    // sets state of city name
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${name}&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        // setIcon(result);
        let icons = result.weather[0].icon;
        // set icons as state
        setIcon(icons);
        // name of the .png from OpenWeather
        console.log(icons);
      });
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={name} name="city" onChange={handleChange} />
        </label>
        <input type="submit" value="Find" id="btn" />{" "}
        <button onClick={handleClick} id="localBtn">
          Local weather
        </button>
      </form>
      <div className="dashboard">
        {/* renders only if there's data from OpenWeather */}
        {typeof data.main != "undefined" ? (
          <Dashboard weatherData={data} iconData={icon} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
