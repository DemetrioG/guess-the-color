import { Center, HStack, Text, VStack } from "@/styles/general";
import { InfoBar } from "@/components/InfoBar";
import { ActiveColor } from "@/components/ActiveColor";
import { OptionButtons } from "@/components/OptionButtons";
import { ChangeTheme } from "@/components/ChangeTheme";
import { Reset } from "@/components/Reset";
import { Sidebar } from "@/components/Sidebar";
import { useColors } from "./hooks";
import { DataContext } from "@/context/data/dataContext";
import { useContext } from "react";
import { When } from "@/components/When";

const App = () => {
  const { data } = useContext(DataContext);
  const { activeColor, shuffledList } = useColors();

  return (
    <HStack>
      <Sidebar />
      <Center
        style={{
          width: "100%",
          padding: "2rem 0",
        }}
      >
        <Center
          style={{
            flexDirection: "unset",
            overflow: "auto",
            height: "calc(100vh - 4rem)",
            width: "100%",
          }}
        >
          <div style={{ margin: "auto" }}>
            <Text
              as={"h1"}
              style={{ textAlign: "center", marginBottom: "2rem" }}
            >
              Guess the color
            </Text>
            <VStack
              style={{
                gap: "1rem",
                width: "400px",
                margin: "auto",
              }}
            >
              <InfoBar />
              <ActiveColor color={activeColor} />
              <When is={!!data.difficulty}>
                <OptionButtons
                  activeColor={activeColor}
                  shuffledList={shuffledList}
                />
              </When>
            </VStack>
          </div>
        </Center>
        <ChangeTheme />
        <Reset />
      </Center>
    </HStack>
  );
};

export default App;
