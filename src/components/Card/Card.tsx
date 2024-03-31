import React from "react";
import s from "./Card.module.scss";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { weatherSlice } from "../../redux/slices/weatherSlice";
import { DayInfoTypes } from "../../tipes";

interface Props {
  dayInfo: DayInfoTypes;
  dayId?: number;
}

export const Card: React.FC<Props> = React.memo(({ dayInfo, dayId }) => {
  const dispatch = useCustomDispatch();
  const { week } = useCustomSelector(selectWeatherData);
  const checkWeek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun" =
  Object(`${new Date(dayInfo.date_epoch * 1000)}`).slice(0, 3);

  return (
    <article
      className={s.card}
      onClick={() => dispatch(weatherSlice.actions.setWeatherInfo(dayInfo))}
    >
      <span className={s.tt}>
        {dayId === 0 ? "Сегодня" : dayId === 1 ? "Завтра" : ""}
      </span>
      <div className={s.curentDay}>
        {Number(dayInfo.date.slice(-2))} <span>{week[checkWeek]}</span>
      </div>
      <span className={s.temp}>{Math.round(dayInfo.day.maxtemp_c)}°</span>
      <img
        className={s.weatherImg}
        src={`https://${dayInfo.day.condition.icon}`}
        alt="icon"
      />
      <div className={s.info}>
        Вероятность дождя {dayInfo.day.daily_chance_of_rain}%
      </div>
    </article>
  );
});
