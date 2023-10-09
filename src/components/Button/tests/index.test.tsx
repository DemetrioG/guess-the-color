import { render } from "@testing-library/react";
import { Button } from "..";
import { BaseWrap } from "@/styles/tests/baseTheme.test";

describe("Button component", () => {
  it("renders the children correctly", () => {
    const { getByText } = render(
      <BaseWrap>
        <Button>Hello</Button>
      </BaseWrap>
    );
    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("applies additional styles correctly", () => {
    const { container } = render(
      <BaseWrap>
        <Button styles={{ color: "red", fontWeight: "bold" }}>Click me</Button>
      </BaseWrap>
    );
    expect(container.firstChild).toHaveStyle("color: red");
    expect(container.firstChild).toHaveStyle("font-weight: bold");
  });

  it("passes rest props correctly", () => {
    const { container } = render(
      <BaseWrap>
        <Button aria-disabled={true} data-testid="button">
          Click me
        </Button>
      </BaseWrap>
    );
    expect(container.firstChild).toHaveAttribute("data-testid", "button");
    expect(container.firstChild).toHaveAttribute("aria-disabled", "true");
  });
});
