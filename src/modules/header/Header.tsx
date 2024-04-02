import React from "react";
import s from "./Header.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeConext";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindCity } from "../../redux/slices/weatherSlice";
import { CustomInput } from "../../UI/input/customInput";
import { Logo } from "../../UI/logo/logo";
import { Link } from "react-router-dom";

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
      <Link to="/" className={s.wrapperLogo}>
        <Logo />
      </Link>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill={theme.theme === Theme.LIGHT ? "#FFCD00" : "#none"}
            />
            <path
              d="M11.382 1C8.04494 4.24859 7.92135 9.70621 10.8876 13.2147C13.8539 16.7232 19.1685 16.8531 22.5056 13.7345C22.6292 13.6045 22.8764 13.4746 23 13.2147C22.6292 19.1921 17.809 24 12 24C5.94382 24 1 18.8023 1 12.435C1 6.45763 5.69663 1.38983 11.382 1Z"
              fill={theme.theme === Theme.LIGHT ? "#none" : "#FFCD00"}
            />
          </svg>
        </div>
        <CustomInput callback={findCity} />
      </div>
    </header>
  );
});
