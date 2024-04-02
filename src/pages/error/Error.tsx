import React from "react";
import { Link } from "react-router-dom";
import s from "./Error.module.scss";

export const Error: React.FC = () => {
  return (
    <div className={s.error}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link className={s.link} to="/">На главную</Link>
    </div>
  );
};
