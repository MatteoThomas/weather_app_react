import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

export default function Form() {
  const [name, setName] = useState("seattle");
  const [data, setData] = useState([]);

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

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
          setData(result);
          console.log(result);
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
        // setLoading(false);
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
          Get local conditions
        </button>
      </form>
      <div className="dashboard">
        {typeof data.main != "undefined" ? (
          <Dashboard weatherData={data} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
