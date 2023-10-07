import { IThemeProvider } from "@/styles/baseTheme";
import { useTheme } from "styled-components";
import { ProgressBarProps } from "./types";

export const ProgressBar = (props: ProgressBarProps) => {
  const { theme }: IThemeProvider = useTheme();
  return (
    <div
      style={{
        width: "100%",
        height: "15px",
        position: "relative",
        backgroundColor: theme?.secondary,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: `${props.percentual}%`,
          height: "100%",
          backgroundColor: theme?.gray,
        }}
      ></div>
    </div>
  );
};
