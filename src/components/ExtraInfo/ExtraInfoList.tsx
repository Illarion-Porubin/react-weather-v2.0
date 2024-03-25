import { FC, memo } from "react";
import { WeatherInfoTypes } from "../../tipes";
import { IndicatorSvgSelector } from "../../assets/indicators/IndicatorSvgSelector"
import s from "./ExtraInfo.module.scss";

interface Props {
  weatherInfo: WeatherInfoTypes;
}

export const ExtraInfoList: FC<Props> = memo(({ weatherInfo }) => {
  const { icon_id, name, value } = weatherInfo;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id = {icon_id}/>
      </div>
      <div className={s.indicatorName}>{name}</div>
      <div className={s.indicatorValue}>{value}</div>
    </div>
  )
})