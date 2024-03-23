import { useCustomSelector } from "./store";
import { selectWeatherData } from "../redux/selectors";

interface WeatherTypes {
  pressure: number;
  sunrise: number;
  sunset: number;
  dayOfWeek?: string;
  dayOfMonth?: string;
  avgtemp?: number;
  maxtemp?: number;
  avghumidity?: number;
  totalprecip?: number;
  avgvis?: number;
}
export const useWeatherDay = () => {
  const { curentDay, week } = useCustomSelector(selectWeatherData);

  console.log(curentDay);

  const weather: WeatherTypes = {
    pressure: Math.round(curentDay ? curentDay.day.pressure_in : 0),
    sunrise: curentDay ? curentDay.astro.sunrise : 0,
    sunset: curentDay ? curentDay.astro.sunset : 0,
    dayOfWeek: curentDay ? curentDay.date.slice(-2) : '',
    dayOfMonth: curentDay ? week[String(new Date(curentDay.date_epoch * 1000)).slice(0, 3)] : '',
    avgtemp: Math.round(curentDay ? curentDay.day.avgtemp_c : 0),
    maxtemp: Math.round(curentDay ? curentDay?.day.maxtemp_c : 0),
    avghumidity: Math.round(curentDay ? curentDay?.day.avghumidity : 0),
    totalprecip: curentDay ? curentDay?.day.totalprecip_mm : 0,
    avgvis: Math.round(curentDay ? curentDay?.day.avgvis_km : 0),
  };
  return {
    weather,
  };
};
