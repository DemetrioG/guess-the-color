import React, { useContext, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { DataContext } from "@/context/data/dataContext";
import { GLOBAL_TIME } from "@/utils/general.helper";

const Content = () => {
  const { setData } = useContext(DataContext);
  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      globalTimer: 60,
    }));
  }, []);

  return <ProgressBar />;
};

describe("ProgressBar", () => {
  test("renders ProgressBar component with different data", () => {
    render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );
  });

  test("checks if the width of the div matches the value", () => {
    render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );

    const progressBarElement = screen.getByTestId("progress-bar-value");
    const value = (60 * 100) / GLOBAL_TIME;
    expect(progressBarElement).toHaveStyle(`width: ${value}%`);
  });
});
