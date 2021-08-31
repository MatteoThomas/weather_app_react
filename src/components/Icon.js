import React from "react";
import "../styles.css";

import sun from "../img/01d.svg";
import cloud from "../img/02d.svg";
import clouds from "../img/03d.svg";
import cloudy from "../img/04d.svg";
import shower from "../img/09d.svg";
import rain from "../img/10d.svg";
import thunderstorm from "../img/11d.svg";
import snow from "../img/13d.svg";
import mist from "../img/50d.svg";

export default function Icon({ weatherData }) {
  let iconData = weatherData.weather[0].icon;
  console.log(iconData);
  switch (iconData) {
    case "01d":
      var icons = sun;
      break;
    case "02d":
      var icons = cloud;
      break;
    case "03d":
      var icons = clouds;
      break;
    case "04d":
      var icons = cloudy;
      break;
    default:
      icons = mist;
  }

  return <div></div>;
}
