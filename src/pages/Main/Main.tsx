import React from "react";
import s from "./Main.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { CardList } from "../../components/Card/CardList";
import { MainInfo } from "../../components/MainInfo/MainInfo";
import { ExtraInfo } from "../../components/ExtraInfo/ExtraInfo";
import { Header } from "../../components/Header/Header";
import { fetchFindCity } from "../../redux/slices/weatherSlice";

interface Props {}

export const Main: React.FC<Props> = React.memo(() => {
  const dispatch = useCustomDispatch();

  React.useEffect(() => {
    dispatch(fetchFindCity());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <MainInfo />
        <ExtraInfo />
      </div>
      <CardList />
    </>
  );
});
