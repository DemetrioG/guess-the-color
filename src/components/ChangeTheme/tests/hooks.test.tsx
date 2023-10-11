import { useChangeTheme } from "../hooks";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeContextProvider } from "@/context/theme/themeContext";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

describe("useChangeTheme", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  it("should change theme from dark to light", () => {
    localStorageMock.getItem.mockReturnValue("dark");

    const { result } = renderHook(() => useChangeTheme(), {
      wrapper: ThemeContextProvider,
    });

    const dispatchEventMock = jest.spyOn(window, "dispatchEvent");
    act(() => result.current.handleChangeTheme());

    expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "light");
    expect(dispatchEventMock).toHaveBeenCalledWith(new Event("storage"));
  });

  it("should change theme from light to dark", () => {
    localStorageMock.getItem.mockReturnValue("light");

    const { result } = renderHook(() => useChangeTheme(), {
      wrapper: ThemeContextProvider,
    });

    const dispatchEventMock = jest.spyOn(window, "dispatchEvent");
    act(() => result.current.handleChangeTheme());

    expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "dark");
    expect(dispatchEventMock).toHaveBeenCalledWith(new Event("storage"));
  });
});
