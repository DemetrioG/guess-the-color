import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { render, screen } from "@testing-library/react";
import { ChangeTheme } from ".";
import { useEffect } from "react";

const Content = (props: { theme: "dark" | "light" }) => {
  useEffect(() => {
    localStorage.setItem("theme", props.theme);
  }, []);

  return <ChangeTheme />;
};

describe("ChangeTheme", () => {
  test("renders without crashing", () => {
    render(
      <BaseWrap>
        <ChangeTheme />
      </BaseWrap>
    );
    const changeThemeElement = screen.getByTestId("change-theme");
    expect(changeThemeElement).toBeInTheDocument();
  });

  test("render moon icon when theme is light", () => {
    render(
      <BaseWrap>
        <Content theme="light" />
      </BaseWrap>
    );
    const changeThemeElement = screen.getByTestId("moon");
    expect(changeThemeElement).toBeInTheDocument();
  });

  test("render sun icon when theme is dark", () => {
    render(
      <BaseWrap>
        <Content theme="dark" />
      </BaseWrap>
    );
    const changeThemeElement = screen.getByTestId("sun");
    expect(changeThemeElement).toBeInTheDocument();
  });
});
