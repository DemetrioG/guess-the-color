import { render, screen } from "@testing-library/react";
import { Button, OptionButtons } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";

describe("OptionButtons", () => {
  const props = {
    shuffledList: ["#FF0000", "#00FF00", "#0000FF"],
    activeColor: "#FF0000",
  };

  beforeEach(() => {
    render(
      <BaseWrap>
        <OptionButtons {...props} />
      </BaseWrap>
    );
  });

  test("renders the correct number of buttons", () => {
    const buttons = screen.getAllByRole("option-button");
    expect(buttons.length).toBe(props.shuffledList.length);
  });
});

describe("Button", () => {
  const hex = "#FF0000";
  test("renders button with hex prop", () => {
    render(
      <BaseWrap>
        <Button hex={hex} />
      </BaseWrap>
    );

    const buttonElement = screen.getByText(hex);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with restProps", () => {
    const className = "custom-button";
    render(
      <BaseWrap>
        <Button hex={hex} className={className} aria-disabled={true} />
      </BaseWrap>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveAttribute("aria-disabled", "true");
    expect(buttonElement).toHaveClass(className);
  });

  test("renders button with default styles", () => {
    render(
      <BaseWrap>
        <Button hex={hex} />
      </BaseWrap>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveStyle({ width: "120px" });
  });
});
