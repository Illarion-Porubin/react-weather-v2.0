import React from "react";
import s from "./MainInfo.module.scss";
// import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { useWeatherDay } from "../../hooks/useWeatherDay";

export const MainInfo: React.FC = React.memo(() => {
  const { isLoading, data, curentDay } = useCustomSelector(selectWeatherData);
  const { weather } = useWeatherDay();


  if (isLoading === "loaded" && curentDay)
    return (
      <div className={s.this__day}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>
              <span>{weather.avgtemp}°</span>
            </div>
            {/* <img className={s.img} src={icon} alt="icon" /> */}
            <div className={s.this__day_name}>
              Сегодня {weather.dayOfWeek} {weather.dayOfMonth}
            </div>
          </div>
        </div>
        <div className={s.bottom__block}>
          <p className={s.this__info}>
            Восход: <span>{weather.sunrise}</span>
          </p>
          <p className={s.this__info}>
            Закат: <span>{weather.sunset}</span>
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
