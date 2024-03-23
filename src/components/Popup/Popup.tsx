import { FC, memo } from "react";
import { Item, MyPopup } from "../../tipes";
import { ExtraInfoList } from "../ExtraInfo/ExtraInfoList";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { usePopup } from "../../provider/PopupProvider";
// import { useCustomSelector } from "../../hooks/store";
// import { selectWeatherData } from "../../store/selectors";
import s from "./Popup.module.scss";

interface Props {}

export const Popup: FC<Props> = memo(() => {
  // const { data } = useCustomSelector(selectWeatherData);
  const popup: MyPopup = usePopup();
  const popupCheck: string = popup.style ? `${s.popup} ${s.active}` : s.popup;
  // const checTemp: string = Math.floor(payloadDay.main.temp) >= 0 ? "+" : "-";
  // const date: string = String(new Date(payloadDay.dt * 1000 - 10800));

  // const checkWind: string =
  //   Math.ceil(payloadDay.wind.speed) < 5
  //     ? "м/с - легкий ветер"
  //     : "м/с - сильный ветер";
  const items: Item[] = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `-° - ощущается как -°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `- mm ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `- mm`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `- m/s`,
    },
  ];

  return popup.state ? (
    <>
      <div className={s.blur}></div>
      <div className={popupCheck}>
        <div className={s.day}>
          <div className={s.curentDay}>{`week[date.slice(0, 3)]`}</div>

          <div className={s.day__temp}>
            {/* {checTemp} */}
            {`Math.floor(payloadDay.main.temp)`}°
          </div>
          <div className={s.img}>
            <GlobalSvgSelecotr id="sun" />
          </div>
          <div className={s.day__time}>
            <div>
              <span>Дата: </span>
              {`date.slice(8, 15)`}
            </div>
          </div>
          <div className={s.day__time}>
            Город: <span>{`weather.city.name`}</span>
          </div>
        </div>
        <div className={s.this__day_info_item}>
          {items.map((item: Item, index) => (
            <ExtraInfoList item={item} key={index} />
          ))}
        </div>
        <div className={s.close} onClick={() => popup.allPopup("popupDay")}>
          <GlobalSvgSelecotr id="close" />
        </div>
      </div>
    </>
  ) : popup.inputState ? (
    <>
      <div className={s.blur}></div>
      <div className={popupCheck}>
        <h1>Введите название города</h1>
        <div className={s.close} onClick={() => popup.allPopup("popupInput")}>
          <GlobalSvgSelecotr id="close" />
        </div>
      </div>
    </>
  ) : null;
});
