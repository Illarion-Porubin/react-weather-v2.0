import React, { FC, memo } from "react";
import { useContext } from "react";
import { ReactNode } from "react";
import { PopupContext, defaultState } from "../context/PopupContext";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { weatherSlice } from "../store/slices/weatherSlice";
// import { PayloadDay } from "../tipes";

interface Props {
  children: ReactNode;
}

export const usePopup = () => { return useContext(PopupContext) };
export const PopupProvider: FC<Props> = memo(({ children }) => {
  const [state, setState] = useState(defaultState.state);
  const [style, setStyle] = useState(defaultState.style);
  const [inputState, setInputState] = useState(defaultState.inputState);
  // const dispatch = useDispatch();

  // const dayValue = (day: PayloadDay) => {
  //   allPopup("popupDay")
  //   dispatch(weatherSlice.actions.payloadDay(day));
  // }


  const allPopup = (popup: string) => {
    switch (popup) {
      case "popupDay": return (
        setStyle(!style),
        state ? setTimeout(() => setState(!state), 500): setState(!state)
      )
      case "popupInput": return (
        setStyle(!style),
        inputState ? setTimeout(() => setInputState(!inputState), 500) : setInputState(!inputState)
      )
      default:
        return null;
    }
  };

  return (
    <PopupContext.Provider
      value={{
        state,
        inputState,
        style,
        allPopup,
        // dayValue,
      }}
    >
      {children} 
    </PopupContext.Provider>
  );
});
