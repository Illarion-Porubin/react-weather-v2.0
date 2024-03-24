import { useCustomSelector } from "./store";
import { selectWeatherData } from "../redux/selectors";
import React from "react";

interface WeatherDayTypes {
  sunrise: string;
  sunset: string;
  dayOfWeek?: string;
  dayOfMonth?: string;
  avgtemp?: number;
  maxtemp?: number;
  avgvis?: number;
}

interface WeatherHourTypes {
  wind_dir: string;
  temp: number;
  pressure: number;
  humidity: number;
  wind_mph: number;
  hourList: string[]
}

export const useWeather = () => {
  const { weatherInfo, week } = useCustomSelector(selectWeatherData);
  const [id, setId] = React.useState(0);
  const { hId } = useCustomSelector(selectWeatherData);

  console.log(id);

  const weatherHour: WeatherHourTypes = {
    hourList: weatherInfo ? weatherInfo.hour.map((hour: { time: string[] }, id: number) => {
      return { value: id, label: hour.time.slice(-5) }
    }) : [{ value: 0, label: 'время не задано' }],

    temp: weatherInfo ? Math.round(weatherInfo.hour[hId].temp_c) : 0,
    pressure: weatherInfo ? Math.round(weatherInfo.hour[hId].pressure_mb) : 0,
    humidity: weatherInfo ? Math.round(weatherInfo.hour[hId].humidity) : 0,
    wind_mph: weatherInfo ? Math.round(weatherInfo.hour[hId].wind_mph) : 0,
    wind_dir: weatherInfo ? String(weatherInfo.hour[hId].wind_dir) : '--',
  }

  const weatherDay: WeatherDayTypes = {
    maxtemp: Math.round(weatherInfo ? weatherInfo?.day.maxtemp_c : 0),
    sunrise: weatherInfo ? String(weatherInfo.astro.sunrise) : `0`,
    sunset: weatherInfo ? String(weatherInfo.astro.sunset) : `0`,
    dayOfWeek: weatherInfo ? String(weatherInfo.date.slice(-2)) : '',
    dayOfMonth: weatherInfo ? week[String(new Date(weatherInfo.date_epoch * 1000)).slice(0, 3)] : '',
    avgtemp: Math.round(weatherInfo ? weatherInfo.day.avgtemp_c : 0),
    avgvis: Math.round(weatherInfo ? weatherInfo?.day.avgvis_km : 0),
  };

  return {
    weatherDay,
    weatherHour,
    setId,
    id
  };
};
