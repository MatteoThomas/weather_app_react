import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

export default function Form() {
  // state for city name
  const [name, setName] = useState("");
  // state for all data = weatherData
  const [data, setData] = useState([]);
  // state for latitude, longitude
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  // set loading state
  const [isLoading, setIsLoading] = useState(true);
  // set error state
  const [error, setError] = useState(false);

  // gets geolocation of user for local weather
  useEffect(() => {
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
          // set loading state false
          setIsLoading(false);
          // set error to false
          setError(false);
        });
    };
    fetchData();
  }, [lat, long]);

  const handleChange = (e) => {
    // sets state of city name
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${name}&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
    handleSubmit().catch((e) => {
      console.log("ERRRORR!");
      // set error to true
      setError(true);
    });
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={name} name="city" onChange={handleChange} />
        </label>
      </form>
      <div className="dashboard">
        {isLoading && <h2>Loading...</h2>}

        {/* renders only if there's data from OpenWeather */}
        {typeof data.main != "undefined" ? (
          <Dashboard weatherData={data} />
        ) : (
          <div>
            {error && <h2>City not found</h2>}
            {!error && <h2></h2>}
          </div>
        )}
      </div>
    </div>
  );
}
