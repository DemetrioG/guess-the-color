import { Center, Text, VStack } from "@/styles/general";
import { InfoBar } from "@/components/InfoBar";
import { ActiveColor } from "@/components/ActiveColor";
import { OptionButtons } from "@/components/OptionButtons";
import { IThemeProvider } from "@/styles/baseTheme";
import { useTheme } from "styled-components";

const App = () => {
  const { theme }: IThemeProvider = useTheme();
  return (
    <div style={{ background: theme?.primary, height: "100vh" }}>
      <Center style={{ gap: "3rem", height: "100%" }}>
        <Text as={"h1"}>Guess the color</Text>
        <VStack
          style={{
            gap: "1rem",
            width: "400px",
          }}
        >
          <InfoBar />
          <ActiveColor color="#468C98" />
          <OptionButtons activeColor="#468C98" />
        </VStack>
      </Center>
    </div>
  );
};

export default App;
