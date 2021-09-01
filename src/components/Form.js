import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Form() {
  const [name, setName] = useState("seattle");
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  console.log(icon);

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
          // setIcon(result.weather[0].icon);
          setData(result);

          let icons = result.weather[0].icon;
          console.log(icons);
          setIcon(icons);
        });
    };
    fetchData();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${name}&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIcon(result);
        let icons = result.weather[0].icon;
        console.log(icons);
        setIcon(icons);
      });
  };

  console.log(data);

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
