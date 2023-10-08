import { IThemeProvider } from "@/styles/baseTheme";
import { Center, HStack, Text, VStack } from "@/styles/general";
import { Check, X } from "lucide-react";
import { useTheme } from "styled-components";
import { ColorProps, ItemProps } from "./types";
import { When } from "../When";
import { useContext } from "react";
import { DataContext } from "@/context/data/dataContext";

export const Sidebar = () => {
  const { theme }: IThemeProvider = useTheme();
  const {
    data: { sidebarList },
  } = useContext(DataContext);

  return (
    <VStack
      style={{
        backgroundColor: theme?.secondary,
        height: "100vh",
        minWidth: "350px",
      }}
    >
      <VStack
        style={{
          padding: "1.5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text as={"h3"}>Current / Latest Game</Text>
      </VStack>
      <HStack
        style={{
          padding: "1rem",
          gap: "1rem",
          borderBottomWidth: 2,
          borderColor: theme?.primary,
          borderBottomStyle: "solid",
        }}
      >
        <div
          style={{
            width: "100px",
            textAlign: "center",
            borderRightWidth: 2,
            borderRightStyle: "solid",
            borderColor: theme?.primary,
          }}
        >
          <Text style={{ fontWeight: 600 }}>Guessed color</Text>
        </div>
        <div style={{ width: "100px", textAlign: "center" }}>
          <Text style={{ fontWeight: 600 }}>Correct color</Text>
        </div>
      </HStack>
      <VStack style={{ overflow: "auto" }}>
        {sidebarList.map((item, i) => (
          <Item key={i} data={item} index={i} />
        ))}
      </VStack>
    </VStack>
  );
};

const Item = ({ data, index }: { data: ItemProps; index: number }) => {
  const { theme }: IThemeProvider = useTheme();
  const rightColor = data.color === data.guessed;
  const isEven = index % 2 === 0;

  return (
    <HStack
      style={{
        padding: "1rem",
        gap: "15px",
        alignItems: "center",
        backgroundColor: isEven ? theme?.secondary : theme?.tertiary,
      }}
    >
      <When is={!rightColor}>
        <Color data={data.guessed} />
        <Color data={data.color} />
      </When>
      <When is={rightColor}>
        <Color
          data={data.color}
          styles={{
            width: "215px",
          }}
        ></Color>
      </When>
      <Center
        style={{
          padding: "0.3rem",
          height: "max-content",
          borderRadius: 50,
          backgroundColor: rightColor ? theme?.green : theme?.red,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <When is={rightColor}>
          <Check size={20} />
        </When>
        <When is={!rightColor}>
          <X size={20} />
        </When>
      </Center>
      <Text style={{ fontWeight: "bold", fontSize: "18px" }}>{data.time}s</Text>
    </HStack>
  );
};

const Color = (props: ColorProps) => {
  return (
    <Center
      style={{
        backgroundColor: props.data,
        padding: "1rem",
        textAlign: "center",
        width: "100px",
        borderRadius: 10,
        ...props.styles,
      }}
    >
      <span style={{ color: getContrastColor(props.data) }}>{props.data}</span>
    </Center>
  );
};

function getContrastColor(hex: string) {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  const contrastColor = luminance > 0.5 ? "#000000" : "#FFFFFF";
  return contrastColor;
}
