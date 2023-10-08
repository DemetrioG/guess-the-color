import { ButtonProps, OptionButtonsProps } from "./types";
import { HStack, Text } from "@/styles/general";
import { Button as BaseButton } from "../Button";
import { useContext } from "react";
import { DataContext } from "@/context/data/dataContext";
import { ItemProps } from "../Sidebar/types";
import {
  CORRECT_ANSWER,
  SESSION_TIME,
  WRONG_ANSWER,
} from "@/utils/general.helper";

export const OptionButtons = (props: OptionButtonsProps) => {
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

  return (
    <HStack style={{ justifyContent: "space-between" }}>
      {props.shuffledList.map((color, i) => (
        <Button key={i} hex={color} onClick={() => handlePressItem(color)} />
      ))}
    </HStack>
  );
};

const Button = (props: ButtonProps) => {
  const { hex, ...restProps } = props;
  return (
    <BaseButton
      styles={{
        width: "120px",
      }}
      {...restProps}
    >
      <Text
        style={{
          WebkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
      >
        {props.hex}
      </Text>
    </BaseButton>
  );
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
