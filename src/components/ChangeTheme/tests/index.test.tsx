import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { render } from "@testing-library/react";
import { ChangeTheme } from "..";
import { useEffect } from "react";

const Content = (props: { theme: "dark" | "light" }) => {
  useEffect(() => {
    localStorage.setItem("theme", props.theme);
  }, []);

  return <ChangeTheme />;
};

describe("ChangeTheme", () => {
  test("renders without crashing", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <ChangeTheme />
      </BaseWrap>
    );
    const changeThemeElement = getByTestId("change-theme");
    expect(changeThemeElement).toBeInTheDocument();
  });

  test("render moon icon when theme is light", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <Content theme="light" />
      </BaseWrap>
    );
    const changeThemeElement = getByTestId("moon");
    expect(changeThemeElement).toBeInTheDocument();
  });

  test("render sun icon when theme is dark", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <Content theme="dark" />
      </BaseWrap>
    );
    const changeThemeElement = getByTestId("sun");
    expect(changeThemeElement).toBeInTheDocument();
  });
});
