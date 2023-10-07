import { useTheme } from "styled-components";
import { OptionButtonsProps } from "./types";
import { IThemeProvider } from "@/styles/baseTheme";
import { HStack, Text } from "@/styles/general";

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
  const { theme }: IThemeProvider = useTheme();
  return (
    <div
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        backgroundColor: theme?.secondary,
        padding: "1rem",
        width: "120px",
        textAlign: "center",
        borderRadius: 10,
        cursor: "pointer",
      }}
    >
      <Text>{hex}</Text>
    </div>
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
