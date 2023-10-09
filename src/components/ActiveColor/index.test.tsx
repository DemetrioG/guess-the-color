import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { ActiveColor } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { useStart } from "./hooks";

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

  // test("calls handleStart on button click", () => {
  //   const { handleStart } = useStart();
  //   render(
  //     <BaseWrap>
  //       <ActiveColor color="green" />
  //     </BaseWrap>
  //   );
  //   const startButton = screen.getByText("START");
  //   const parentElement = startButton.parentElement as Element;
  //   fireEvent.click(parentElement);
  //   expect(handleStart).toHaveBeenCalled();
  // });
});
