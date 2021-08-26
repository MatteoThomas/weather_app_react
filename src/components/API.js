import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

export default function API() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=Denver&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);
  console.log(data);
  return (
    <div className="Api">
      {typeof data.main != "undefined" ? (
        <Dashboard weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
