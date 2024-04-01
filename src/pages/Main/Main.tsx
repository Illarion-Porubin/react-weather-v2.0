import React from "react";
import s from "./Main.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { CardList } from "../../modules/cardList/CardList";
import { MainInfo } from "../../components/mainInfo/MainInfo";
import { ExtraInfo } from "../../modules/extraInfo/ExtraInfo";
import { Header } from "../../modules/header/Header";
import { fetchFindCity } from "../../redux/slices/weatherSlice";

interface Props {}

export const Main: React.FC<Props> = React.memo(() => {
  const dispatch = useCustomDispatch();

  React.useEffect(() => {
    dispatch(fetchFindCity());
  }, [dispatch]);

  return (
    <div className={s.bgWeatherImage}>
      <div className="container">
        <Header />
        <div className={s.wrapper}>
          <MainInfo />
          <ExtraInfo />
        </div>
        <CardList />
      </div>
    </div>
  );
});
