import React from "react";
import s from "./Card.module.scss";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { weatherSlice } from "../../redux/slices/weatherSlice";

interface Props {
  dayInfo: any;
}

export const Card: React.FC<Props> = React.memo(({ dayInfo }) => {
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectWeatherData);
  const tyme = new Date(dayInfo.date_epoch * 1000);
  const dayWeek = data.week[String(tyme).slice(0, 3)];
  const icon = `https://${dayInfo.day.condition.icon}`;
  const temp = Math.round(dayInfo.day.maxtemp_c);
  const chanceOfRain = dayInfo.day.daily_chance_of_rain;

  return (
    <article
      className={s.card}
      onClick={() => dispatch(weatherSlice.actions.setCurentDay(dayInfo))}
    >
      <div className={s.curentDay}>
        {dayInfo.date.slice(-2)} <span>{dayWeek}</span>
      </div>
      <span className={s.temp__day}>{temp}°</span>
      <img className={s.img} src={icon} alt="icon" />
      <div className={s.temp__night}></div>
      <div className={s.info}>Вероятность дождя {chanceOfRain}%</div>
    </article>
  );
});
