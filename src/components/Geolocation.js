import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Geo() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

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

  console.log(data);

  return (
    <div className="geoContainer">
      <button onClick={handleClick} id="geoBtn">
        Get local conditions
      </button>
      <div className="dashboard">
        {typeof data.main != "undefined" ? (
          <Dashboard weatherData={data} />
        ) : (
          <div></div>
        )}
      </div>
      <div></div>
    </div>
  );
}
