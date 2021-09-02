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
  let iconName = null;
  // choose icon based on the icon returned in Form.js
  switch (iconData) {
    case "01d":
      iconName = sun;
      break;
    case "01n":
      iconName = sun;
      break;
    case "02d":
      iconName = cloud;
      break;
    case "02n":
      iconName = cloud;
      break;
    case "03d":
      iconName = clouds;
      break;
    case "03n":
      iconName = clouds;
      break;
    case "04d":
      iconName = cloudy;
      break;
    case "04n":
      iconName = cloudy;
      break;
    case "09d":
      iconName = shower;
      break;
    case "09n":
      iconName = shower;
      break;
    case "10d":
      iconName = rain;
      break;
    case "10n":
      iconName = rain;
      break;
    case "11d":
      iconName = thunderstorm;
      break;
    case "11n":
      iconName = thunderstorm;
      break;
    case "13d":
      iconName = snow;
      break;
    case "13n":
      iconName = snow;
      break;
    case "50d":
      iconName = mist;
      break;
    case "50n":
      iconName = mist;
      break;
    default:
      console.log("default!");
  }

  return (
    <div id="icon">
      <img src={iconName} alt="weather icon" />
    </div>
  );
}
