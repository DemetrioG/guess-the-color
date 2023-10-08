import { DataContext } from "@/context/data/dataContext";
import { IThemeProvider } from "@/styles/baseTheme";
import { HStack, Text, VStack } from "@/styles/general";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { useInfoBar } from "./hooks";

export const InfoBar = () => {
  const { theme }: IThemeProvider = useTheme();
  const { data } = useContext(DataContext);
  const { handleRestart } = useInfoBar();

  return (
    <HStack>
      <VStack
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: theme?.secondary,
          width: "37.5%",
          padding: "1rem",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <Text>Remaing Time (s)</Text>
        <Text style={{ fontWeight: "bold", fontSize: "20px" }}>
          {data.globalTimer}
        </Text>
      </VStack>
      <VStack
        onClick={handleRestart}
        style={{
          width: "25%",
          backgroundColor: theme?.tertiary,
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          cursor: "pointer",
        }}
      >
        <Text>Restart</Text>
      </VStack>
      <VStack
        style={{
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: theme?.secondary,
          width: "37.5%",
        }}
      >
        <HStack
          style={{
            height: "50%",
            alignItems: "center",
            padding: "0.5rem 1rem",
            justifyContent: "space-between",
            borderBottomWidth: 2,
            borderBottomStyle: "solid",
            borderColor: theme?.primary,
          }}
        >
          <Text>High Score</Text>
          <Text style={{ fontWeight: "bold" }}>
            {localStorage.getItem("highScore") ?? 0}
          </Text>
        </HStack>
        <HStack
          style={{
            height: "50%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
          }}
        >
          <Text>Score</Text>
          <Text style={{ fontWeight: "bold" }}>{data.score}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
