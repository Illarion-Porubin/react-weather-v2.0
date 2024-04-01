import React from "react";
import s from "./logo.module.scss";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";

export const Logo: React.FC = () => {
  return (
    <div className={s.logo}>
      <GlobalSvgSelecotr id="header-logo" />
    </div>
  );
};
