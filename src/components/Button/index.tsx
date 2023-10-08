import { IThemeProvider } from "@/styles/baseTheme";
import { useTheme } from "styled-components";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { theme }: IThemeProvider = useTheme();
  return (
    <div
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        backgroundColor: theme?.secondary,
        padding: "1rem",
        textAlign: "center",
        borderRadius: 10,
        cursor: "pointer",
        ...props.styles,
      }}
    >
      {props.children}
    </div>
  );
};
