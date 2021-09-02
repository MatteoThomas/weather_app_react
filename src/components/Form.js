import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Form() {
  // state for city name
  const [name, setName] = useState("seattle");
  // state for all data
  const [data, setData] = useState([]);
  // state for icon
  const [icon, setIcon] = useState([]);
  // state for latitude
  const [lat, setLat] = useState([]);
  // state for longitude
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
          // set icon state as result
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
        console.log(icons);
      });
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={name} name="city" onChange={handleChange} />
        </label>
        <input type="submit" value="Search" id="btn" />{" "}
        <button onClick={handleClick} id="geoBtn">
          Local weather
        </button>
      </form>
      <div className="dashboard">
        {typeof data.main != "undefined" ? (
          <Dashboard weatherData={data} iconData={icon} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
