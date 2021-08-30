import React from "react";
import "./App.css";
import Geo from "./components/Geolocation";
import Form from "./components/Form";
import Title from "./components/Title";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Title />
      <Geo />
      <Form />
    </div>
  );
}
