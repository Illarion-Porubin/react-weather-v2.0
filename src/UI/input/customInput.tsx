import React from "react";
import s from "./customInput.module.scss";

interface Props {
  callback?: (value: string) => void;
  className?: string;
}

export const CustomInput: React.FC<Props> = ({ className, callback }) => {
  const [value, setValue] = React.useState<string>(``);

  return (
    <div className={s.inputWrapp}>
      <input
        className={className ? `${s.mainClass} ${className}` : `${s.mainClass}`}
        value={value}
        placeholder={value || "Введите город"}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={s.inputBtn}
        onClick={callback ? () => callback(value) : undefined}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8907 19.3607L14.0636 13.5257C15.5499 12.0904 16.4707 10.1118 16.4707 7.92962C16.4707 3.557 12.7765 0 8.23534 0C3.69414 0 0 3.557 0 7.92962C0 12.3022 3.69414 15.8592 8.23534 15.8592C10.2287 15.8592 12.0581 15.1731 13.484 14.0347L19.3252 19.8841C19.4021 19.9615 19.5048 20 19.608 20C19.706 20 19.8036 19.9649 19.8797 19.8946C20.0358 19.75 20.0405 19.511 19.8907 19.3607ZM8.23534 15.104C4.12669 15.104 0.784319 11.8857 0.784319 7.92962C0.784319 3.97349 4.12669 0.755201 8.23534 0.755201C12.344 0.755201 15.6864 3.97349 15.6864 7.92962C15.6864 11.8857 12.3436 15.104 8.23534 15.104Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};
