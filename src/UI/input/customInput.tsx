import s from "./customInput.module.scss";

interface Props {
    className?: string;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value: string
}

export const CustomInput: React.FC<Props> = ({onChange, value, className, placeholder}) => {
  return (
    <>
      <input
        className={`${s.mainClass} ${className}`}
        value={value}
        placeholder={placeholder || "Введите город"}
        type="text"
        onChange={onChange}
      />
    </>
  );
};
