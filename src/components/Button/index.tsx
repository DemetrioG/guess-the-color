import { IThemeProvider } from "@/styles/baseTheme";
import { CSSProperties } from "react";
import { useTheme } from "styled-components";

export const Button = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: CSSProperties;
}) => {
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
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
