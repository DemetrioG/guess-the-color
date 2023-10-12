import { IThemeProvider } from "@/styles/baseTheme";
import { useTheme } from "styled-components";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { theme }: IThemeProvider = useTheme();
  const { children, styles, ...restProps } = props;
  return (
    <div
      style={{
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        backgroundColor: theme?.secondary,
        padding: "1rem",
        textAlign: "center",
        borderRadius: 10,
        cursor: "pointer",
        ...props.styles,
      }}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
