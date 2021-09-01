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

export default function Icon({ iconData }) {
  console.log(iconData);
  let iconed = null;
  switch (iconData) {
    case "01d":
      console.log("yes!01d");
      iconed = sun;
      break;
    case "02d":
      console.log("yes!02d");
      iconed = cloud;
      break;
    case "03d":
      console.log("yes!03d");
      iconed = clouds;
      break;
    case "04d":
      console.log("yes! on the 04d");
      iconed = cloudy;
      break;
    case "09d":
      console.log("yes! on the 09d");
      iconed = shower;
      break;
    case "10d":
      console.log("yes! on the 10d");
      iconed = rain;
      break;
    case "11d":
      console.log("yes! on the 11d");
      iconed = thunderstorm;
      break;
    case "13d":
      console.log("yes! on 13d");
      iconed = snow;
      break;
    case "50d":
      console.log("yes! on 50d");
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
