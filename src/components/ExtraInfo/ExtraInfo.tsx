import React from "react";
import s from "./ExtraInfo.module.scss";
import cloud from "../../assets/images/cloud.png";
import { Item } from "../../tipes";
import { ExtraInfoList } from "./ExtraInfoList";
import { useWeather } from "../../hooks/useWeather";


export const ExtraInfo: React.FC = React.memo(() => {
  const { weatherHour, id } = useWeather();

  console.log(id, 'ExtraInfo');

  const items = React.useMemo(
    () => [
      {
        icon_id: "temp",
        name: "Tемпература",
        value: `${weatherHour.temp}°`,
      },
      {
        icon_id: "pressure",
        name: "Давление ",
        value: `${weatherHour.pressure}м.б`,
      },
      {
        icon_id: "humidity",
        name: "Осадки",
        value: `${weatherHour.humidity}%`,
      },
      {
        icon_id: "wind",
        name: "Ветер",
        value: `${weatherHour.wind_mph}м/с`,
      },
      {
        icon_id: "compass",
        name: "Направление",
        value: weatherHour.wind_dir,
      },
    ],
    [weatherHour]
  );

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_item}>
        {items.map((item: Item, index: number) => (
          <ExtraInfoList item={item} key={index} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
});
