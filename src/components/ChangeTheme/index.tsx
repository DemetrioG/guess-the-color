import { IThemeProvider } from "@/styles/baseTheme";
import { Center } from "@/styles/general";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "styled-components";
import { When } from "../When";
import { useChangeTheme } from "./hooks";

export const ChangeTheme = () => {
  const { theme }: IThemeProvider = useTheme();
  const { handleChangeTheme } = useChangeTheme();

  return (
    <Center
      data-testid="change-theme"
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: "0.5rem",
        backgroundColor: theme?.secondary,
        borderRadius: 50,
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        cursor: "pointer",
      }}
      onClick={handleChangeTheme}
    >
      <When is={!theme?.isOnDarkTheme}>
        <div data-testid="moon" style={{ width: "24px", height: "24px" }}>
          <Moon color={theme?.text} />
        </div>
      </When>
      <When is={!!theme?.isOnDarkTheme}>
        <div data-testid="sun" style={{ width: "24px", height: "24px" }}>
          <Sun color={theme?.text} />
        </div>
      </When>
    </Center>
  );
};
