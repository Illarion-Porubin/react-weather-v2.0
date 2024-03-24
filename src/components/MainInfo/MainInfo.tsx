import React from "react";
import s from "./MainInfo.module.scss";
import { useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { useWeather } from "../../hooks/useWeather";

export const MainInfo: React.FC = React.memo(() => {
  const { isLoading, data, weatherInfo } = useCustomSelector(selectWeatherData);
  const { weatherDay } = useWeather();


  if (isLoading === "loaded" && weatherInfo)
    return (
      <div className={s.this__day}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>
              <span>{weatherDay.maxtemp}°</span>
            </div>
            {/* <img className={s.img} src={icon} alt="icon" /> */}
            <div className={s.this__day_name}>
              Сегодня {weatherDay.dayOfWeek} {weatherDay.dayOfMonth}
            </div>
          </div>
        </div>
        <div className={s.bottom__block}>
          <p className={s.this__info}>
            Восход: <span>{weatherDay.sunrise}</span>
          </p>
          <p className={s.this__info}>
            Закат: <span>{weatherDay.sunset}</span>
          </p>
          <p className={s.this__info}>
            Страна: <span>{data.location?.country}</span>
          </p>
          <p className={s.this__info}>
            Город: <span>{data.location?.name}</span>
          </p>
        </div>
      </div>
    );
});
