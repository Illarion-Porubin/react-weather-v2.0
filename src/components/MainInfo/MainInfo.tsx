import React from "react";
import s from "./MainInfo.module.scss";
import { useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { useWeather } from "../../hooks/useWeather";

export const MainInfo: React.FC = React.memo(() => {
  const { data } = useCustomSelector(selectWeatherData);
  const { weatherDay } = useWeather();

    return (
      <div className={s.thisDay}>
        <div className={s.topBlock}>
          <div>
            <div className={s.thisTemp}>
              <span>{weatherDay.maxtemp}°</span>
            </div>
            <div className={s.thisDayName}>
              Сегодня {weatherDay.dayOfWeek} {weatherDay.dayOfMonth}
            </div>
          </div>
        </div>
        <div className={s.bottomBlock}>
          <p className={s.thisInfo}>
            Восход: <span>{weatherDay.sunrise}</span>
          </p>
          <p className={s.thisInfo}>
            Закат: <span>{weatherDay.sunset}</span>
          </p>
          <p className={s.thisInfo}>
            Страна: <span>{data?.location?.country}</span>
          </p>
          <p className={s.thisInfo}>
            Город: <span>{data?.location?.name}</span>
          </p>
        </div>
      </div>
    );
});
