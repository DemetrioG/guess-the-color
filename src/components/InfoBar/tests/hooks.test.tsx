import { renderHook } from "@testing-library/react";
import { useInfoBar } from "../hooks";
import {
  DataContext,
  DataContextProvider,
  IData,
} from "@/context/data/dataContext";
import { act } from "react-dom/test-utils";
import { useContext, useEffect } from "react";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";

const useInfoBarWithContext = (dataUpdater?: (prevData: IData) => IData) => {
  const infoHook = useInfoBar();
  const dataHook = useContext(DataContext);

  useEffect(() => {
    if (!dataUpdater) return;
    dataHook.setData(dataUpdater);
  }, []);

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

  it("should start timers when data.started is true and globalTimer is less than 1", async () => {
    const { result } = renderHook(
      () =>
        useInfoBarWithContext((prevData) => ({
          ...prevData,
          started: true,
          globalTimer: 0,
        })),
      {
        wrapper: DataContextProvider,
      }
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });
    expect(result.current.data.started).toBe(false);
    expect(result.current.data.globalTimer).toBe(GLOBAL_TIME);
  });

  it("should start timers when data.started is true and globalTimer is more than 1", async () => {
    const { result } = renderHook(
      () =>
        useInfoBarWithContext((prevData) => ({
          ...prevData,
          started: true,
          globalTimer: 2,
        })),
      {
        wrapper: DataContextProvider,
      }
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });
    expect(result.current.data.started).toBe(true);
    expect(result.current.data.globalTimer).toBe(1);
  });
});
