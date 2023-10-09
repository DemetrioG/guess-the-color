import { useContext, useEffect } from "react";
import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { render } from "@testing-library/react";
import { InfoBar } from ".";
import { DataContext } from "@/context/data/dataContext";

const Content = () => {
  const { setData } = useContext(DataContext);

  useEffect(() => {
    localStorage.setItem("highScore", "10");
    setData((prevData) => ({
      ...prevData,
      globalTimer: 60,
      score: 5,
    }));
  }, []);

  return <InfoBar />;
};

describe("InfoBar", () => {
  test("renders InfoBar component", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <InfoBar />
      </BaseWrap>
    );
    expect(getByTestId("info-bar")).toBeInTheDocument();
  });

  test("displays remaining time correctly", () => {
    const { getByText } = render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );
    expect(getByText("Remaing Time (s)")).toBeInTheDocument();
    expect(getByText("60")).toBeInTheDocument();
  });

  test("displays high score and current score correctly", () => {
    const { getByText } = render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );
    expect(getByText("High Score")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("Score")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });
});
