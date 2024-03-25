import React from "react";
import s from "./Card.module.scss";
import { Card } from "./Card";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectWeatherData } from "../../redux/selectors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { weatherSlice } from "../../redux/slices/weatherSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { DayInfoTypes } from "../../tipes";

export const CardList: React.FC = React.memo(() => {
  const { isLoading, data } = useCustomSelector(selectWeatherData);
  const dispatch = useCustomDispatch();

  React.useEffect(() => {
    if (isLoading === "loaded" && data.curentDay === null) {
      dispatch(
        weatherSlice.actions.setWeatherInfo(data.forecast.forecastday[0])
      );
    }
  }, [data, dispatch, isLoading]);

  const fakeArray = new Array(10).fill(" ");

    return (
      <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={7}
          touchRatio={1}
          touchAngle={45}
          grabCursor={true}
          draggable={true}
          onSlideChange={() => console.log("slide change")}
          navigation
          breakpoints={{
            1180: {
              slidesPerView: 7,
            },
            980: {
              slidesPerView: 6,
            },
            800: {
              slidesPerView: 5,
            },
            680: {
              slidesPerView: 4,
            },
            580: {
              slidesPerView: 3,
            },
            340: {
              slidesPerView: 2,
            },
            100: {
              slidesPerView: 1,
            },
          }}
        >
          {data.forecast
            ? data.forecast.forecastday.map((dayInfo: DayInfoTypes, id: number) => (
                <SwiperSlide key={id}>
                  <div className={s.days} key={id}>
                    <Card dayInfo={dayInfo} key={id} />
                  </div>
                </SwiperSlide>
              ))
            : fakeArray.map((_, id: number) => (
                <SwiperSlide key={id}>
                  <div className={s.skelet} key={id}></div>
                </SwiperSlide>
              ))}
        </Swiper>
      </>
    );
});
