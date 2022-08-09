import axios from "axios";
import React, { useState, useEffect } from "react";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, loadForecast] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    loadForecast(false);
  }, [props.coordinates]);

  function showWeather(response) {
    setForecast(response.data.daily);
    loadForecast(true);
  }

  function day(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecast.map(function (weatherForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <div className="DailyForecast-day">
                    {day(weatherForecast.dt)}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}@2x.png`}
                    className="forecastImage"
                    alt={weatherForecast.weather[0].description}
                  />
                  <div className="DailyForecast-temperature">
                    <span className="DailyForecast-temperature-max">
                      {Math.round(weatherForecast.temp.max)}°
                    </span>
                    <span className="DailyForecast-temperature-min">
                      {Math.round(weatherForecast.temp.min)}°
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "0bef54fbf2f25ff0f6335be419abd9a2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);

    return null;
  }
}