import React from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeConext";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindCity } from "../../redux/slices/weatherSlice";
import { CustomInput } from "../../UI/input/customInput";

interface Props {}

export const Header: React.FC<Props> = React.memo(() => {
  const dispatch = useCustomDispatch();
  const theme = useTheme();

  const changeTheme = React.useCallback((): void => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, [theme]);

  const findCity = (value: string) => {
    dispatch(fetchFindCity(value));
  };

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
        <CustomInput callback={findCity} />
      </div>
    </header>
  );
});
