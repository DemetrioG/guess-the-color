import { IThemeProvider } from "@/styles/baseTheme";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { DataContext } from "@/context/data/dataContext";

export const ProgressBar = () => {
  const { theme }: IThemeProvider = useTheme();
  const { data } = useContext(DataContext);
  const value = (data.globalTimer * 100) / 30;
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
          width: `${value}%`,
          height: "100%",
          backgroundColor: theme?.gray,
        }}
      ></div>
    </div>
  );
};
