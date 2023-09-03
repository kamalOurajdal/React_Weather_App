import React from "react";
import WeatherWidget from "./WeatherWidget";
import humidity_icon from "./../media/icons/humidity_icon.png"
import wind_icon from "./../media/icons/wind_icon.png"
import sunset_icon from "./../media/icons/sunset_icon.png"
import sunrise_icon from "./../media/icons/sunrise_icon.png"
import pressure_icon from "./../media/icons/pressure_icon2.png"
import { formatToLocalTime } from "../services/WeatherServices";



function TodayWeatherDetails({ currentWeather }) {

  const {
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    main,
    icon,
    speed,
    timezone,
  } = currentWeather



  const sunsetTime = formatToLocalTime(sunset, timezone/3600, "HH:mm");
  const sunriseTime = formatToLocalTime(sunrise, timezone/3600,"HH:mm ");
  // consol both
  console.log("sunset: " + sunsetTime);
  console.log("sunrise: " + sunriseTime);

  return (
    <div className=" mt-4 flex justify-between  h-60">
      <div className=" flex flex-col justify-between">
        <WeatherWidget info={{title:"humidity",unit: "%", data: humidity, icon:humidity_icon}} />
        <WeatherWidget info={{title:"wind",unit: "m/s", data: speed, icon:wind_icon}} />
      </div>
      <div className=" flex flex-col justify-between ">
        <WeatherWidget info={{title:"pressure",unit: "hPa", data: pressure, icon:pressure_icon}} />
        <WeatherWidget info={{title:"sun", data: {sunsetTime, sunriseTime}, sunsetIcon: sunset_icon, sunriseIcon: sunrise_icon}} />
      </div>
    </div>
  );
}

export default TodayWeatherDetails;
