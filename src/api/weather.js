import { ArrowBigUpDash } from "lucide-react";
import axios from "./axios";

const apiKey = import.meta.env.VITE_API_KEY;

const getCurrentWeather = async ({ query }) => {
  return await axios
    .get(`/current.json?key=${apiKey}&q=${query}&aqi=yes`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const getForecast = async ({ query, days }) => {
  return await axios
    .get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}&aqi=no&alerts=no`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export { getCurrentWeather, getForecast };
