import React from "react";
import { ThemeProvider } from "styled-components";
import { DARK, LIGHT } from "./theme";
import { ThemeContext } from "@/context/theme/themeContext";

export interface IThemeProvider {
  theme?: typeof LIGHT;
}

export const BaseTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme: themeContext } = React.useContext(ThemeContext);

  const theme = themeContext.mode === "dark" ? DARK : LIGHT;

  return <ThemeProvider theme={{ theme: theme }}>{children}</ThemeProvider>;
};
