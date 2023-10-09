import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ActiveColor } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";

describe("ActiveColor", () => {
  test("renders without crashing", () => {
    render(
      <BaseWrap>
        <ActiveColor color="red" />
      </BaseWrap>
    );
    const activeColorElement = screen.getByTestId("active-color");
    expect(activeColorElement).toBeInTheDocument();
  });

  test("displays the correct background color", () => {
    const color = "blue";
    render(
      <BaseWrap>
        <ActiveColor color={color} />
      </BaseWrap>
    );
    const activeColorElement = screen.getByTestId("active-color");
    expect(activeColorElement).toHaveStyle(`background-color: ${color}`);
  });

  test("renders the ProgressBar component", () => {
    render(
      <BaseWrap>
        <ActiveColor color="red" />
      </BaseWrap>
    );
    const progressBarElement = screen.getByTestId("progress-bar");
    expect(progressBarElement).toBeInTheDocument();
  });

  test("renders the START button when data.started is false", () => {
    render(
      <BaseWrap>
        <ActiveColor color="red" />
      </BaseWrap>
    );
    const startButtonElement = screen.getByText("START");
    expect(startButtonElement).toBeInTheDocument();
  });
});
