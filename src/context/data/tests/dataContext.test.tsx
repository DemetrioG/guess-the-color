import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { DataContext, DataContextProvider } from "../dataContext";

describe("DataContextProvider", () => {
  test("renders children without crashing", () => {
    const { getByText } = render(
      <DataContextProvider>
        <div>Child Component</div>
      </DataContextProvider>
    );

    const childElement = getByText("Child Component");
    expect(childElement).toBeInTheDocument();
  });

  test("provides data state to children", () => {
    const { getByText } = render(
      <DataContextProvider>
        <DataContext.Consumer>
          {({ data }) => <div>{data.score}</div>}
        </DataContext.Consumer>
      </DataContextProvider>
    );
    expect(getByText("0")).toBeInTheDocument();
  });

  test("sets data state correctly", () => {
    const { getByText } = render(
      <DataContextProvider>
        <DataContext.Consumer>
          {({ data, setData }) => (
            <>
              <div>{data.score}</div>
              <button onClick={() => setData({ ...data, score: 20 })}>
                Update Data
              </button>
            </>
          )}
        </DataContext.Consumer>
      </DataContextProvider>
    );
    expect(getByText("0")).toBeInTheDocument();
    fireEvent.click(getByText("Update Data"));
    expect(getByText("20")).toBeInTheDocument();
  });
});
