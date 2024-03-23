import React from "react";
import s from "./ExtraInfo.module.scss";
import cloud from "../../assets/images/cloud.png";
import { Item } from "../../tipes";
import { ExtraInfoList } from "./ExtraInfoList";
import { useWeatherDay } from "../../hooks/useWeatherDay";


export const ExtraInfo: React.FC = React.memo(() => {
  const { weather } = useWeatherDay();



  const items = React.useMemo(
    () => [
      {
        icon_id: "temp",
        name: "Макс температура",
        value: `${weather.maxtemp}°`,
      },
      {
        icon_id: "pressure",
        name: "Влажность ",
        value: `${weather.totalprecip}%`,
      },
      {
        icon_id: "precipitation",
        name: "Осадки",
        value: `${weather.avghumidity}мм` ,
      },
      {
        icon_id: "wind",
        name: "Ветер",
        value: `${weather.avghumidity}к/ч`,
      },
    ],
    [weather]
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
