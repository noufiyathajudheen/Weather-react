import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import { getCurrentWeather, getTodayForecast } from "../../api/weather";
import { convertTo12HourFormat } from "../../utils/convertTo12HourFormat";
import { Droplets, Sun, Thermometer, Wind } from "lucide-react";

const Weather = ({ query, setQuery }) => {
  const [currentData, setCurrentData] = useState({});
  const [todayForecast, setTodayForecast] = useState([]);
  const [chanceOfRain, setChanceOfRain] = useState(0);

  useEffect(() => {
    getCurrentWeather({ query: query }).then((data) => setCurrentData(data));
    getTodayForecast({ query: query }).then((data) => {
      const resp = data?.forecast?.forecastday[0]?.hour;
      const result = [];
      for (let i = 3; i < resp.length; i += 4) {
        result.push(resp[i]);
      }
      setTodayForecast(result);
      setChanceOfRain(
        data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain
      );
    });
  }, [query]);

  return (
    <div className="section-container">
      <div className="section-current-weather">
        <div className="temp-detail">
          <div className="location">
            <span className="location-name">{currentData?.location?.name}</span>
            <span className="condition">Chance of rain: {chanceOfRain}%</span>
          </div>
          <span className="temp">{currentData?.current?.temp_c}°</span>
        </div>
        <img
          className="condition-icon"
          src={currentData?.current?.condition?.icon}
        />
      </div>
      <div className="section-today-forecast">
        <h4>TODAY'S FORECAST</h4>
        <div className="forecast-container">
          {todayForecast.map((item) => (
            <Fragment key={item?.time}>
              <div className="forecast">
                <span className="forecast-time">
                  {convertTo12HourFormat(item?.time)}
                </span>
                <img
                  className="forecast-icon"
                  src={item?.condition?.icon}
                  alt=""
                />
                <span className="forecast-temp">{item?.temp_c}°</span>
              </div>
              <div className="line"></div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="section-air-condition">
        <h4>AIR CONDITION</h4>
        <div className="air-condition-container">
          <div className="air-condition">
            <div className="air-condition-title">
              <Thermometer />
              <span>Real feel</span>
            </div>
            <span className="air-condition-value">
              {currentData?.current?.feelslike_c}°
            </span>
          </div>
          <div className="air-condition">
            <div className="air-condition-title">
              <Wind />
              <span>Wind</span>
            </div>
            <span className="air-condition-value">
              {currentData?.current?.wind_kph} Km/h
            </span>
          </div>
          <div className="air-condition">
            <div className="air-condition-title">
              <Droplets />
              <span>Chance 0f rain</span>
            </div>
            <span className="air-condition-value">{chanceOfRain}%</span>
          </div>
          <div className="air-condition">
            <div className="air-condition-title">
              <Sun />
              <span>UV index</span>
            </div>
            <span className="air-condition-value">
              {currentData?.current?.uv}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
