import React, { FC, useState, memo, useCallback } from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeConext";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindCity } from "../../redux/slices/weatherSlice";

interface Props {}

export const Header: FC<Props> = memo(() => {
  const [value, setValue] = useState<string>(``);
  const dispatch = useCustomDispatch();
  const theme = useTheme();

  const changeTheme = useCallback((): void => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, [theme]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);


  return (
    <header className={s.header}>
      <div className={s.wrapperLogo}>
        <div className={s.logo}>
          <GlobalSvgSelecotr id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelecotr id="change-theme" />
        </div>
        <div className={s.inputWrapp}>
          <input
            className={s.input}
            value={value}
            placeholder="Введите город"
            type="text"
            onChange={onChange}
          />
          <button className={s.inputBtn} onClick={() => dispatch(fetchFindCity(value))}>Add</button>
        </div>
      </div>
    </header>
  );
});
