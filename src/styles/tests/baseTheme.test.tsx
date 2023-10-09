import "@testing-library/jest-dom";
import { useEffect } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, useTheme } from "styled-components";
import { BaseTheme, IThemeProvider } from "../baseTheme";
import { ThemeContextProvider } from "@/context/theme/themeContext";
import { DataContextProvider } from "@/context/data/dataContext";

export const BaseWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <BaseTheme>{children}</BaseTheme>
      </DataContextProvider>
    </ThemeContextProvider>
  );
};

const Content = (props: { theme?: "dark" | "light" }) => {
  const { theme }: IThemeProvider = useTheme();

  useEffect(() => {
    if (!props.theme) return;
    localStorage.setItem("theme", props.theme);
  }, []);

  return <div style={{ backgroundColor: theme?.primary }}>Test</div>;
};

describe("BaseTheme", () => {
  it("should render children", () => {
    const { getByText } = render(
      <BaseTheme>
        <Content />
      </BaseTheme>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should apply the dark theme when theme mode is dark", () => {
    const { container } = render(
      <BaseWrap>
        <Content theme="dark" />
      </BaseWrap>
    );
    expect(container.firstChild).toHaveStyle("background-color: #000000");
  });

  it("should apply the light theme when theme mode is light", () => {
    const { container } = render(
      <ThemeProvider theme={{ mode: "light" }}>
        <BaseTheme>
          <Content theme="light" />
        </BaseTheme>
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle("background-color: #ffffff");
  });
});
