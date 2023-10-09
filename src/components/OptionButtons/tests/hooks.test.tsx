import { renderHook, act } from "@testing-library/react";
import { useOptionButtons } from "../hooks";
import { useContext, useEffect } from "react";
import { DataContext, DataContextProvider } from "@/context/data/dataContext";
import { SESSION_TIME } from "@/utils/general.helper";

const list = {
  activeColor: "#3e3e3e",
  shuffledList: ["#FF0000", "#00FF00", "#3e3e3e"],
};

const useOptionButtonsWithContext = () => {
  const optionHook = useOptionButtons(list);
  const dataHook = useContext(DataContext);

  useEffect(() => {
    dataHook.setData((prevData) => ({
      ...prevData,
      started: true,
      score: 10,
    }));
  }, []);

  return {
    ...optionHook,
    data: dataHook.data,
  };
};

describe("useOptionButtons", () => {
  it("should call setData with the correct values when data.started is true and chosed value are correct", () => {
    const { result } = renderHook(() => useOptionButtonsWithContext(), {
      wrapper: DataContextProvider,
    });

    act(() => {
      result.current.handlePressItem("#3e3e3e");
    });

    expect(result.current.data.chosed).toBe(true);
    expect(result.current.data.sessionTimer).toBe(SESSION_TIME);
    expect(result.current.data.sidebarList).toEqual([
      {
        color: "#3e3e3e",
        guessed: "#3e3e3e",
        time: SESSION_TIME - result.current.data.sessionTimer,
      },
    ]);
    expect(result.current.data.score).toBe(10 + 5);
  });

  it("should call setData with the correct values when data.started is true and chosed value are incorrect", () => {
    const { result } = renderHook(() => useOptionButtonsWithContext(), {
      wrapper: DataContextProvider,
    });

    act(() => {
      result.current.handlePressItem("#FF0000");
    });

    expect(result.current.data.chosed).toBe(true);
    expect(result.current.data.sessionTimer).toBe(SESSION_TIME);
    expect(result.current.data.sidebarList).toEqual([
      {
        color: "#3e3e3e",
        guessed: "#FF0000",
        time: SESSION_TIME - result.current.data.sessionTimer,
      },
    ]);
    expect(result.current.data.score).toBe(10 - 1);
  });
});
