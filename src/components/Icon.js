import React from "react";
import "../styles.css";

import sun from "../img/01d.svg";
import cloud from "../img/02d.svg";
import clouds from "../img/03d.svg";
import cloudy from "../img/04d.svg";
import shower from "../img/09d.svg";
import rain from "../img/10d.svg";
import thunderstorm from "../img/11n.svg";
import snow from "../img/13d.svg";
import mist from "../img/50n.svg";

export default function Icon({ iconData }) {
  // create variable for icon
  let iconed = null;
  // chose icon based on the icon returned in Form.js
  switch (iconData) {
    case "01d":
      iconed = sun;
      break;
    case "01n":
      iconed = sun;
      break;
    case "02d":
      iconed = cloud;
      break;
    case "02n":
      iconed = cloud;
      break;
    case "03d":
      iconed = clouds;
      break;
    case "03n":
      iconed = clouds;
      break;
    case "04d":
      iconed = cloudy;
      break;
    case "04n":
      iconed = cloudy;
      break;
    case "09d":
      iconed = shower;
      break;
    case "09n":
      iconed = shower;
      break;
    case "10d":
      iconed = rain;
      break;
    case "10b":
      iconed = rain;
      break;
    case "11d":
      iconed = thunderstorm;
      break;
    case "11n":
      iconed = thunderstorm;
      break;
    case "13d":
      iconed = snow;
      break;
    case "13n":
      iconed = snow;
      break;
    case "50d":
      iconed = mist;
      break;
    case "50n":
      iconed = mist;
      break;
    default:
      console.log("default!");
  }

  return (
    <div id="icon">
      <img src={iconed} alt="weather icon!" />
    </div>
  );
}
