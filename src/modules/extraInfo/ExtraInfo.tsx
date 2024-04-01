import React from "react";
import s from "./ExtraInfo.module.scss";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";
import { ExtraInfoDesc } from "../../components/extraInfoDesc/ExtraInfoDesc";
import { useWeather } from "../../hooks/useWeather";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeConext";
import { WeatherInfoTypes } from "../../tipes";

export const ExtraInfo: React.FC = React.memo(() => {
  const { weatherHour, setId } = useWeather();
  const theme = useTheme();

  const weatherInfo = React.useMemo(
    () => [
      {
        icon_id: "temp",
        name: "Tемпература",
        value: `${weatherHour.temp}°`,
      },
      {
        icon_id: "pressure",
        name: "Давление ",
        value: `${weatherHour.pressure} м.б`,
      },
      {
        icon_id: "humidity",
        name: "Осадки",
        value: `${weatherHour.humidity}%`,
      },
      {
        icon_id: "wind",
        name: "Ветер",
        value: `${weatherHour.wind_mph} м/с`,
      },
      {
        icon_id: "compass",
        name: "Направление",
        value: weatherHour.wind_dir,
      },
    ],
    [weatherHour]
  );

  const setHour = (value: number | undefined) => {
    if(value)setId(~~value);
  };

  const customStyles: object = {
    option: (
      styles?: StylesConfig<string, false, GroupBase<string>> | undefined
    ) => ({
      ...styles,
      marginTop: "6px",
      height: "36px",
      border: "none",
      borderRadius: "6px",
      zIndex: "100",
    }),
    control: (
      styles?: StylesConfig<string, false, GroupBase<string>> | undefined
    ) => ({
      ...styles,
      borderRadius: "4px",
      backgroundColor: theme.theme === Theme.DARK ? "#0000005e" : "#ffffff5e",
      borderColor: theme.theme === Theme.DARK ? "#ffffff" : "#4F4F4F",
      transition: 0,
      minWidth: "220px",
    }),
    container: (
      styles?: StylesConfig<string, false, GroupBase<string>> | undefined
    ) => ({
      ...styles,
      zIndex: 3,
    }),
    singleValue: (
      styles?: StylesConfig<string, false, GroupBase<string>> | undefined
    ) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#ffffff" : "#000000",
    }),
    menu: (
      styles?: StylesConfig<string, false, GroupBase<string>> | undefined
    ) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#ffffff" : "#000000",
      backgroundColor: theme.theme === Theme.DARK ? "#0000005e" : "#ffffff5e",
    }),
  };


  return (
    <div className={s.extrainfo}>
      <div className={s.extrainfoContent}>
        <div className={s.selectTimeWrap}>
          <Select
            className={s.selectTime}
            styles={customStyles}
            defaultValue={weatherHour?.hourList[0]}
            options={weatherHour?.hourList}
            onChange={(e: SingleValue<{value: number | undefined; label: string}>) => setHour(e?.value)}
          />
        </div>
        {weatherInfo.map((item: WeatherInfoTypes, index: number) => (
          <ExtraInfoDesc weatherInfo={item} key={index} />
        ))}
      </div>
      {/* <img className={s.cloudImg} src={cloud} alt="облако" /> */}
    </div>
  );
});
