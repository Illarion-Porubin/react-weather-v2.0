import React from "react";
import { Link } from "react-router-dom";
import s from "./Error.module.scss";

export const Error: React.FC = () => {
  return (
    <div className={s.error}>
      <h1>Страница не найдена</h1>
      <Link to="/">Вернитесь на главную</Link>
    </div>
  );
};
