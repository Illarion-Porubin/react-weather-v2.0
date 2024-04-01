import { WeatherInfoTypes } from "../../tipes";
import { IndicatorSvgSelector } from "../../assets/indicators/IndicatorSvgSelector";
import s from "./ExtraInfoDesc.module.scss";
import React from "react";

interface Props {
  weatherInfo: WeatherInfoTypes;
}

export const ExtraInfoDesc: React.FC<Props> = ({ weatherInfo }) => {
  const { icon_id, name, value } = weatherInfo;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </div>
      <div className={s.indicatorName}>{name}</div>
      <div className={s.indicatorValue}>{value}</div>
    </div> 
  );  
};