import { render } from "@testing-library/react";
import { Color, Item, Sidebar, getContrastColor } from ".";
import { BaseWrap } from "@/styles/tests/baseTheme.test";
import { DataContext } from "@/context/data/dataContext";
import { useContext, useEffect } from "react";

const SIDEBAR_LIST = [
  { guessed: "red", color: "blue", time: 2 },
  { guessed: "blue", color: "green", time: 5 },
  { guessed: "blue", color: "blue", time: 1 },
];

const Content = () => {
  const { setData } = useContext(DataContext);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      sidebarList: SIDEBAR_LIST,
    }));
  }, []);

  return <Sidebar />;
};

describe("Sidebar", () => {
  it("renders without errors", () => {
    const { getByText } = render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );

    expect(getByText("Current / Latest Game")).toBeInTheDocument();
    expect(getByText("Guessed color")).toBeInTheDocument();
    expect(getByText("Correct color")).toBeInTheDocument();
  });

  it("renders the correct number of items from the sidebar list", () => {
    const { getAllByRole } = render(
      <BaseWrap>
        <Content />
      </BaseWrap>
    );
    const items = getAllByRole("item");
    expect(items.length).toBe(SIDEBAR_LIST.length);
  });
});

describe("Item", () => {
  it("renders correctly with right color", () => {
    const data = {
      color: "blue",
      guessed: "blue",
      time: 10,
    };

    const { getByText, getByTestId } = render(
      <BaseWrap>
        <Item data={data} index={0} />
      </BaseWrap>
    );

    expect(getByTestId("color-guessed/correct")).toBeInTheDocument();
    expect(getByTestId("check")).toBeInTheDocument();
    expect(getByText("10s")).toBeInTheDocument();
  });

  it("renders correctly with wrong color", () => {
    const data = {
      color: "blue",
      guessed: "red",
      time: 5,
    };

    const { getByText, getByTestId } = render(
      <BaseWrap>
        <Item data={data} index={1} />
      </BaseWrap>
    );

    expect(getByTestId("color-guessed")).toBeInTheDocument();
    expect(getByTestId("color-correct")).toBeInTheDocument();
    expect(getByTestId("x")).toBeInTheDocument();
    expect(getByText("5s")).toBeInTheDocument();
  });
});

describe("Color", () => {
  test("renders color component with correct background color", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <Color data="#FF0000" />
      </BaseWrap>
    );

    const colorComponent = getByTestId("color");
    expect(colorComponent).toHaveStyle("background-color: #FF0000");
  });

  test("renders color component with correct text color", () => {
    const { getByText } = render(
      <BaseWrap>
        <Color data="#FF0000" />
      </BaseWrap>
    );

    const textElement = getByText("#FF0000");
    expect(textElement).toHaveStyle("color: #FFFFFF");
  });

  test("renders color component with custom styles", () => {
    const { getByTestId } = render(
      <BaseWrap>
        <Color data="#FF0000" styles={{ fontSize: "16px" }} />
      </BaseWrap>
    );

    const colorComponent = getByTestId("color");
    expect(colorComponent).toHaveStyle("font-size: 16px");
  });
});

describe("getContrastColor", () => {
  test("should return black for a light color", () => {
    const color = "#FFFFFF";
    const contrastColor = getContrastColor(color);
    expect(contrastColor).toBe("#000000");
  });

  test("should return white for a dark color", () => {
    const color = "#000000";
    const contrastColor = getContrastColor(color);
    expect(contrastColor).toBe("#FFFFFF");
  });

  test("should return black for a color with equal RGB values", () => {
    const color = "#808080";
    const contrastColor = getContrastColor(color);
    expect(contrastColor).toBe("#000000");
  });

  test("should return black for a color with low luminance", () => {
    const color = "#333333";
    const contrastColor = getContrastColor(color);
    expect(contrastColor).toBe("#FFFFFF");
  });
});
