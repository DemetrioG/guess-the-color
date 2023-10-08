import { DataContext } from "@/context/data/dataContext";
import {
  CORRECT_ANSWER,
  SESSION_TIME,
  WRONG_ANSWER,
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
      sidebarList: [chosedList, ...prevData.sidebarList],
      sessionTimer: SESSION_TIME,
      trigger: Math.random(),
      score: handleScore(prevData.score, rightColor),
    }));
  }

  return {
    handlePressItem,
  };
};

function handleScore(prevScore: number, isRight: boolean) {
  const calcScore = prevScore + (isRight ? CORRECT_ANSWER : WRONG_ANSWER);
  const score = calcScore > 0 ? calcScore : 0;
  const highScore = Number(localStorage.getItem("highScore") ?? 0);
  if (score > highScore) {
    localStorage.setItem("highScore", score.toString());
  }
  return score;
}
