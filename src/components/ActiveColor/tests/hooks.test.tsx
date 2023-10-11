import { useContext } from "react";
import { DataContext, DataContextProvider, Difficulty } from "@/context/data/dataContext";
import { act, renderHook } from "@testing-library/react";
import { useStart } from "../hooks";

const useStartWithContext = () => {
  const startHook = useStart();
  const dataHook = useContext(DataContext);

  return {
    ...startHook,
    data: dataHook.data,
  };
};

describe("useStart", () => {
  it("should update the data context with the correct values when handleStart is called", () => {
    const { result } = renderHook(() => useStartWithContext(), {
      wrapper: DataContextProvider,
    });

    act(() => result.current.handleStart(Difficulty.Easy));
    expect(result.current.data.started).toBe(true);
    expect(result.current.data.sidebarList).toEqual([]);
    expect(result.current.data.score).toBe(0);
  });
});
