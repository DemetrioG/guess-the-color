import { renderHook } from "@testing-library/react";
import { useInfoBar } from "../hooks";
import { DataContext, DataContextProvider } from "@/context/data/dataContext";
import { act } from "react-dom/test-utils";
import { useContext } from "react";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";

const useInfoBarWithContext = () => {
  const infoHook = useInfoBar();
  const dataHook = useContext(DataContext);

  return {
    ...infoHook,
    data: dataHook.data,
  };
};

describe("useInfoBar", () => {
  test("handleRestart updates the data with correct values", () => {
    const { result } = renderHook(() => useInfoBarWithContext(), {
      wrapper: DataContextProvider,
    });

    act(() => {
      result.current.handleRestart();
    });

    expect(result.current.data.globalTimer).toBe(GLOBAL_TIME);
    expect(result.current.data.sessionTimer).toBe(SESSION_TIME);
  });
});
