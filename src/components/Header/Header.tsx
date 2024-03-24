import React, { FC, useState, memo, useCallback } from "react";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";
import s from "./Header.module.scss";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeConext";
import { weatherSlice } from "../../redux/slices/weatherSlice";
import { useCustomDispatch } from "../../hooks/store";
import { usePopup } from "../../provider/PopupProvider";
import { MyPopup, MyTheme } from "../../tipes";
import { useWeather } from "../../hooks/useWeather";

interface Props {}

export const Header: FC<Props> = memo(() => {
  const dispatch = useCustomDispatch();
  const [value, setValue] = useState<string>(``);
  const popup: MyPopup = usePopup();
  const theme: MyTheme = useTheme();
  const { weatherHour, setId } = useWeather();

  const changeTheme = useCallback((): void => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, [theme]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const customStyles: object = {
    option: (styles?: StylesConfig<string, false, GroupBase<string>> | undefined) => ({
      ...styles,
      width: "100%",
      marginTop: "6px",
      height: "36px",
      border: "none",
      borderRadius: "6px",
      zIndex: "100",
    }),
    control: (styles?: StylesConfig<string, false, GroupBase<string>> | undefined) => ({
      ...styles,
      minWidth: "14rem",
      borderRadius: "4px",
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "#fff",
      borderColor: theme.theme === Theme.DARK ? "#fff" : "#4F4F4F",
      transition: 0,
    }),
    container: (styles?: StylesConfig<string, false, GroupBase<string>> | undefined) => ({
      ...styles,
      zIndex: 3,
    }),
    singleValue: (styles?: StylesConfig<string, false, GroupBase<string>> | undefined) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    menu: (styles?: StylesConfig<string, false, GroupBase<string>> | undefined) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "#fff",
    }),
  };

  const insertCity = useCallback((): void => {
    if (value) {
      dispatch(weatherSlice.actions.addCity(value));
    } else popup.allPopup("popupInput");
  }, [value, dispatch, popup]);

  const setHour = (e: { value: string; label: string }) => {
    setId(~~e.value)
    // dispatch(weatherSlice.actions.changeId(~~e.value))
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper__logo}>
        <div className={s.logo}>
          <GlobalSvgSelecotr id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelecotr id="change-theme" />
        </div>
        <div className={s.input__wrapp}>
          <input
            className={s.input}
            value={value}
            placeholder="Введите город"
            type="text"
            onChange={onChange}
            // onKeyDown={keyDownHandler}
          />
          <button className={s.input__btn} onClick={insertCity}>
            Add
          </button>
        </div>
        <Select
          styles={customStyles}
          defaultValue={weatherHour.hourList[0]}
          options={weatherHour.hourList}
          onChange={(e: SingleValue<string>) => setHour(e)}
        />
      </div>
    </header>
  );
});
