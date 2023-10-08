import { OptionButtonsProps } from "./types";
import { HStack, Text } from "@/styles/general";
import { Button as BaseButton } from "../Button";

export const OptionButtons = (props: OptionButtonsProps) => {
  const [firstColor, secondColor] = generateRandomHexPair(props.activeColor);
  const shuffledColor = shuffle([props.activeColor, firstColor, secondColor]);

  return (
    <HStack style={{ justifyContent: "space-between" }}>
      <Button hex={shuffledColor[0]} />
      <Button hex={shuffledColor[1]} />
      <Button hex={shuffledColor[2]} />
    </HStack>
  );
};

const Button = ({ hex }: { hex: string }) => {
  return (
    <BaseButton
      styles={{
        width: "120px",
      }}
    >
      <Text>{hex}</Text>
    </BaseButton>
  );
};

function generateRandomHexPair(activeHex: string) {
  const characters = "0123456789ABCDEF";
  const randomHexPair: string[] = [];

  while (randomHexPair.length < 2) {
    const randomHex =
      "#" +
      Array.from(
        { length: 6 },
        () => characters[Math.floor(Math.random() * 16)]
      ).join("");

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
