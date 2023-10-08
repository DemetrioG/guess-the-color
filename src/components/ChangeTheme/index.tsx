import { IThemeProvider } from "@/styles/baseTheme";
import { Center } from "@/styles/general";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "styled-components";
import { When } from "../When";

export const ChangeTheme = () => {
  const { theme }: IThemeProvider = useTheme();

  function handleChangeTheme() {
    const isOnDarkTheme = localStorage.getItem("theme") === "dark";
    isOnDarkTheme
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
    return window.dispatchEvent(new Event("storage"));
  }

  return (
    <Center
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: "0.5rem",
        backgroundColor: theme?.secondary,
        borderRadius: 50,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        cursor: "pointer",
      }}
      onClick={handleChangeTheme}
    >
      <When is={!theme?.isOnDarkTheme}>
        <Moon color={theme?.text} />
      </When>
      <When is={!!theme?.isOnDarkTheme}>
        <Sun color={theme?.text} />
      </When>
    </Center>
  );
};
