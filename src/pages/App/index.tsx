import { Center, HStack, Text, VStack } from "@/styles/general";
import { InfoBar } from "@/components/InfoBar";
import { ActiveColor } from "@/components/ActiveColor";
import { OptionButtons } from "@/components/OptionButtons";
import { IThemeProvider } from "@/styles/baseTheme";
import { useTheme } from "styled-components";
import { ChangeTheme } from "@/components/ChangeTheme";
import { Reset } from "@/components/Reset";
import { Sidebar } from "@/components/Sidebar";
import { useColors } from "./hooks";
import { DataContext } from "@/context/data/dataContext";
import { useContext } from "react";
import { When } from "@/components/When";

const App = () => {
  const { theme }: IThemeProvider = useTheme();
  const { data } = useContext(DataContext);
  const colors = useColors();

  return (
    <HStack>
      <Sidebar />
      <div
        style={{ background: theme?.primary, height: "100vh", width: "100%" }}
      >
        <Center style={{ gap: "2rem", height: "100%" }}>
          <Text as={"h1"}>Guess the color</Text>
          <VStack
            style={{
              gap: "2rem",
              width: "400px",
            }}
          >
            <InfoBar />
            <ActiveColor color={colors.activeColor} />
            <When is={!!data.difficulty}>
              <OptionButtons {...colors} />
            </When>
          </VStack>
        </Center>
        <ChangeTheme />
        <Reset />
      </div>
    </HStack>
  );
};

export default App;
