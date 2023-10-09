import { DataContext, DataContextProvider } from "@/context/data/dataContext";
import { act, renderHook } from "@testing-library/react";
import { useReset } from "../hooks";
import { useContext } from "react";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";

const useResetWithContext = () => {
  const resetHook = useReset();
  const dataHook = useContext(DataContext);

  return {
    ...resetHook,
    data: dataHook.data,
  };
};

describe("useReset", () => {
  it("should reset the data", () => {
    const { result } = renderHook(() => useResetWithContext(), {
      wrapper: DataContextProvider,
    });

    act(() => result.current.handleReset());

    expect(localStorage.getItem("highScore")).toBe(null);
    expect(result.current.data.started).toBe(false);
    expect(result.current.data.score).toBe(0);
    expect(result.current.data.sidebarList).toHaveLength(0);
    expect(result.current.data.globalTimer).toBe(GLOBAL_TIME);
    expect(result.current.data.sessionTimer).toBe(SESSION_TIME);
  });
});
