import { DataContext } from "@/context/data/dataContext";
import { IThemeProvider } from "@/styles/baseTheme";
import { HStack, Text, VStack } from "@/styles/general";
import { useContext, useEffect } from "react";
import { useTheme } from "styled-components";

export const InfoBar = () => {
  const { theme }: IThemeProvider = useTheme();
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    if (!data.started) return;

    const interval = setInterval(() => {
      setData((prevData) => {
        if (prevData.globalTimer < 1) {
          clearInterval(interval);
          return { ...prevData, started: false, globalTimer: 30 };
        } else {
          return { ...prevData, globalTimer: prevData.globalTimer - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.started]);

  useEffect(() => {
    if (!data.started) return;

    const interval = setInterval(() => {
      setData((prevData) => {
        if (prevData.sessionTimer < 2 || prevData.globalTimer === 30) {
          return { ...prevData, sessionTimer: 10 };
        } else {
          return { ...prevData, sessionTimer: prevData.sessionTimer - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.started]);

  function handleRestart() {
    return setData((prevData) => ({
      ...prevData,
      globalTimer: 30,
      sessionTimer: 10,
    }));
  }

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
          <Text style={{ fontWeight: "bold" }}>{data.sessionTimer}</Text>
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
          <Text style={{ fontWeight: "bold" }}>300</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
