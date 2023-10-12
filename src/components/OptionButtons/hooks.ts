import { DataContext } from "@/context/data/dataContext";
import {
  CORRECT_ANSWER,
  GLOBAL_TIME,
  SESSION_TIME,
  WRONG_ANSWER,
  handleScore,
} from "@/utils/general.helper";
import { useContext } from "react";
import { ItemProps } from "../Sidebar/types";
import { OptionButtonsProps } from "./types";
import { getItem, setItem } from "@/utils/storage.helper";

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

    const list = getItem("list");
    const parsedList = list ? JSON.parse(list) : [];
    setItem("list", JSON.stringify([chosedList, ...parsedList]));

    setData((prevData) => ({
      ...prevData,
      globalTimer: handleIncreaseOrDecreaseTimer(
        prevData.globalTimer,
        rightColor
      ),
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

function handleIncreaseOrDecreaseTimer(currentTime: number, increase: boolean) {
  const value = currentTime + (increase ? 1 : -1);
  if (value > GLOBAL_TIME) return GLOBAL_TIME;
  return value > 0 ? value : 0;
}
