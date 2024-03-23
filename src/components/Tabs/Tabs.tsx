import { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { weatherSlice } from "../../redux/slices/weatherSlice";
import s from "./Tabs.module.scss";

interface Props {}

export const Tabs: FC<Props> = memo(() => {
  const { filter } = useCustomSelector(selectWeatherData);
  const { payloadDays } = useCustomSelector(selectWeatherData);
  
  const dispatch = useDispatch();

  const filterSelect = useCallback((day: number | boolean) => {
    dispatch(weatherSlice.actions.filter(day)
  )}, [dispatch]);

  return (
    <>
      <div className={s.tabs}>
        <div
          className={filter ? s.tabs__wrapper : `${s.tabs__wrapper} ${s.none}`}
        >
          {payloadDays.map((day: number, index: number) => (
            <div
              className={filter === day ? `${s.tab} ${s.active}` : s.tab}
              key={index}
              onClick={() => filterSelect(day)}
            >
              {day}
            </div>
          ))}
        </div>
        <div
          className={s.concel}
          onClick={() => filterSelect(filter ? false : payloadDays[0])}
        >
          {filter ? "Скрыть" : "Показать"}
        </div>
      </div>
    </>
  );
});
