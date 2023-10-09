import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { ThemeContext, ThemeContextProvider } from "../themeContext";

describe("ThemeContextProvider", () => {
  test("renders children without crashing", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <div>Child Component</div>
      </ThemeContextProvider>
    );

    const childElement = getByText("Child Component");
    expect(childElement).toBeInTheDocument();
  });

  test("provides theme state to children", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {({ theme }) => <div>{theme.mode}</div>}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
    expect(getByText("light")).toBeInTheDocument();
  });

  test("sets theme state correctly", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <>
              <div>{theme.mode}</div>
              <button onClick={() => setTheme({ ...theme, mode: "dark" })}>
                Update Data
              </button>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
    expect(getByText("light")).toBeInTheDocument();
    fireEvent.click(getByText("Update Data"));
    expect(getByText("dark")).toBeInTheDocument();
  });
});
