import { FC, memo } from "react";
import { Item } from "../../tipes";
import { IndicatorSvgSelector } from "../../assets/indicators/IndicatorSvgSelector"
import s from "./ExtraInfo.module.scss";

interface Props {
  item: Item;
}

export const ExtraInfoList: FC<Props> = memo(({ item }) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id = {icon_id}/>
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  )
})