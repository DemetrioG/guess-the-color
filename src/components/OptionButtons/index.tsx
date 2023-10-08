import { ButtonProps, OptionButtonsProps } from "./types";
import { HStack, Text } from "@/styles/general";
import { Button as BaseButton } from "../Button";
import { generateRandomHex } from "@/utils/general.helper";
import { memo, useCallback, useMemo } from "react";
import { useContext } from "react";
import { DataContext } from "@/context/data/dataContext";
import { ItemProps } from "../Sidebar/types";

export const OptionButtons = memo((props: OptionButtonsProps) => {
  const { data, setData } = useContext(DataContext);
  const [firstColor, secondColor] = generateRandomHexPair(props.activeColor);
  const shuffledColor = useMemo(
    () => shuffle([props.activeColor, firstColor, secondColor]),
    [props.activeColor]
  );

  const handlePressItem = useCallback(
    (hex: string) => {
      const chosedList: ItemProps = {
        color: props.activeColor,
        guessed: hex,
        time: 10 - data.sessionTimer,
      };
      setData((prevData) => ({
        ...prevData,
        sidebarList: [chosedList, ...prevData.sidebarList],
        sessionTimer: 10,
      }));
    },
    [props.activeColor, data.sessionTimer]
  );

  return (
    <HStack style={{ justifyContent: "space-between" }}>
      {shuffledColor.map((color, i) => (
        <Button key={i} hex={color} onClick={() => handlePressItem(color)} />
      ))}
    </HStack>
  );
});

const Button = (props: ButtonProps) => {
  const { hex, ...restProps } = props;
  return (
    <BaseButton
      styles={{
        width: "120px",
      }}
      {...restProps}
    >
      <Text>{props.hex}</Text>
    </BaseButton>
  );
};

function generateRandomHexPair(activeHex: string) {
  const randomHexPair: string[] = [];
  while (randomHexPair.length < 2) {
    const randomHex = generateRandomHex();
    if (randomHex !== activeHex && !randomHexPair.includes(randomHex)) {
      randomHexPair.push(randomHex);
    }
  }

  return randomHexPair;
}

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
