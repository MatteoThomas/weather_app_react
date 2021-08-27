import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
// import Search from "./Search";

export default function API() {
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    var fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${name}&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [name]);

  console.log(data);
  console.log(name);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="Api">
      {typeof data.main != "undefined" ? (
        <Dashboard weatherData={data} />
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Search city:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
}
