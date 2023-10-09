import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ActiveColor } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";

describe("ActiveColor", () => {
  test("renders without crashing", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <ActiveColor color="red" />
      </BaseWrap>
    );
    const activeColorElement = getByTestId("active-color");
    expect(activeColorElement).toBeInTheDocument();
  });

  test("displays the correct background color", () => {
    const color = "blue";
    const { getByTestId } = render(
      <BaseWrap>
        <ActiveColor color={color} />
      </BaseWrap>
    );
    const activeColorElement = getByTestId("active-color");
    expect(activeColorElement).toHaveStyle(`background-color: ${color}`);
  });

  test("renders the ProgressBar component", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <ActiveColor color="red" />
      </BaseWrap>
    );
    const progressBarElement = getByTestId("progress-bar");
    expect(progressBarElement).toBeInTheDocument();
  });

  test("renders the START button when data.started is false", () => {
    const { getByText } = render(
      <BaseWrap>
        <ActiveColor color="red" />
      </BaseWrap>
    );
    const startButtonElement = getByText("START");
    expect(startButtonElement).toBeInTheDocument();
  });
});
