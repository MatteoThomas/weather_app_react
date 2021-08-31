import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Geo() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [geo, setGeo] = useState([]);

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
          setGeo(result);
          console.log(result);
        });
    };
    fetchData();
  };

  // console.log(data);

  return (
    <div className="geoContainer">
      <button onClick={handleClick} id="geoBtn">
        Get local conditions
      </button>
      <div className="dashboard">
        {typeof geo.main != "undefined" ? (
          <Dashboard geoData={geo} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="icon"></div>
      <div></div>
    </div>
  );
}
