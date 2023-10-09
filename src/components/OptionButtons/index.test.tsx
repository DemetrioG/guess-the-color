import { render } from "@testing-library/react";
import { Button, OptionButtons } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";

describe("OptionButtons", () => {
  const props = {
    shuffledList: ["#FF0000", "#00FF00", "#0000FF"],
    activeColor: "#FF0000",
  };

  test("renders the correct number of buttons", () => {
    const { getAllByRole } = render(
      <BaseWrap>
        <OptionButtons {...props} />
      </BaseWrap>
    );
    const buttons = getAllByRole("option-button");
    expect(buttons.length).toBe(props.shuffledList.length);
  });
});

describe("Button", () => {
  const hex = "#FF0000";
  test("renders button with hex prop", () => {
    const { getByText } = render(
      <BaseWrap>
        <Button hex={hex} />
      </BaseWrap>
    );

    const buttonElement = getByText(hex);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with restProps", () => {
    const className = "custom-button";
    const { getByTestId } = render(
      <BaseWrap>
        <Button hex={hex} className={className} aria-disabled={true} />
      </BaseWrap>
    );

    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveAttribute("aria-disabled", "true");
    expect(buttonElement).toHaveClass(className);
  });

  test("renders button with default styles", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <Button hex={hex} />
      </BaseWrap>
    );

    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveStyle({ width: "120px" });
  });
});
