import { DataContext } from "@/context/data/dataContext";
import {
  CORRECT_ANSWER,
  SESSION_TIME,
  WRONG_ANSWER,
  handleScore,
} from "@/utils/general.helper";
import { useContext } from "react";
import { ItemProps } from "../Sidebar/types";
import { OptionButtonsProps } from "./types";

export const useOptionButtons = (props: OptionButtonsProps) => {
  const { data, setData } = useContext(DataContext);

  function handlePressItem(hex: string) {
    if (!data.started) return;

    const rightColor = hex === props.activeColor;
    const chosedList: ItemProps = {
      color: props.activeColor,
      guessed: hex,
      time: SESSION_TIME - data.sessionTimer,
    };

    setData((prevData) => ({
      ...prevData,
      globalTimer: prevData.globalTimer + (rightColor ? 1 : -1),
      sidebarList: [chosedList, ...prevData.sidebarList],
      sessionTimer: SESSION_TIME,
      trigger: Math.random(),
      score: handleScore(
        prevData.score,
        rightColor ? CORRECT_ANSWER : WRONG_ANSWER
      ),
      chosed: true,
    }));
  }

  return {
    handlePressItem,
  };
};
