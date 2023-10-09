import { render } from "@testing-library/react";
import { When } from ".";

describe("When", () => {
  it('renders children when "is" prop is true', () => {
    const { container } = render(
      <When is={true}>
        <div>Test</div>
      </When>
    );
    expect(container.innerHTML).toBe("<div>Test</div>");
  });

  it('does not render children when "is" prop is false', () => {
    const { container } = render(
      <When is={false}>
        <div>Test</div>
      </When>
    );
    expect(container.innerHTML).toBe("");
  });
});
