import { useContext, useEffect } from "react";
import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { render, screen } from "@testing-library/react";
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
    render(
      <BaseWrap>
        <InfoBar />
      </BaseWrap>
    );
    expect(screen.getByTestId("info-bar")).toBeInTheDocument();
  });

  test("displays remaining time correctly", () => {
    render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );
    expect(screen.getByText("Remaing Time (s)")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
  });

  test("displays high score and current score correctly", () => {
    render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );
    expect(screen.getByText("High Score")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Score")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
