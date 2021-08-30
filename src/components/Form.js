import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

export default function Form() {
  const [name, setName] = useState("seattle");
  const [data, setData] = useState([]);
  // let [loading, setLoading] = useState(false);
  // let [error, setError] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (name.length === 0) {
    //   return setError(true);
    // }

    // setLoading(true);
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
        <input type="submit" value="Search" id="btn" />
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
