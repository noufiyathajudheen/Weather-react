import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import { getCurrentWeather, getForecast } from "../../api/weather";
import {
  convertTo12HourFormat,
  getAbbreviatedWeekday,
} from "../../utils/utils";
import { Droplets, Sun, Thermometer, Wind } from "lucide-react";

const Weather = ({ query, setQuery }) => {
  const [currentData, setCurrentData] = useState({});
  const [todayForecast, setTodayForecast] = useState([]);
  const [sevenDayForecast, setSevenDayForecast] = useState([]);
  const [chanceOfRain, setChanceOfRain] = useState(0);

  useEffect(() => {
    // Get current weather data
    getCurrentWeather({ query: query }).then((data) => setCurrentData(data));

    // Get today's forecast data
    getForecast({ query: query, days: 1 }).then((data) => {
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

    // Get 7 days forecast data
    getForecast({ query: query, days: 7 }).then((data) =>
      setSevenDayForecast(data?.forecast?.forecastday)
    );
  }, [query]);

  console.log(sevenDayForecast);

  return (
    <div className="weather-container">
      <div className="section-container">
        <div className="section-current-weather">
          <div className="temp-detail">
            <div className="location">
              <span className="location-name">
                {currentData?.location?.name}
              </span>
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
            {todayForecast?.map((item) => (
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
      <div className="seven-day-forecast">
        <h4>7-DAY FORECAST</h4>
        <div className="seven-day-container">
          {sevenDayForecast?.map((item) => (
            <Fragment>
              <div className="seven-day-item" key={item.date}>
                <span>{getAbbreviatedWeekday(item?.date)}</span>
                <div className="seven-day-condition">
                  <img src={item?.day?.condition?.icon} alt="" />
                  <span className="text-bold">
                    {item?.day?.condition?.text}
                  </span>
                </div>
                <p>
                  <span className="text-bold">{item?.day?.maxtemp_c}</span> /
                  <span>{item?.day?.mintemp_c}</span>
                </p>
              </div>
              <div className="horizontal-line"></div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
