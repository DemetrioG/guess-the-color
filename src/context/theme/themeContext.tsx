import { getItem } from "@/utils/storage.helper";
import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ITheme {
  mode: Theme;
}

export const initialThemeState: ITheme = {
  mode: "light",
};

export const ThemeContext = createContext<{
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}>({
  theme: {
    ...initialThemeState,
  },
  setTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ITheme>({
    ...initialThemeState,
  });

  function handleSetTheme() {
    setTheme(() => ({
      mode: (getItem("theme") as Theme) ?? "light",
    }));
  }

  useEffect(() => {
    window.addEventListener("theme", handleSetTheme);
    return () => window.removeEventListener("theme", handleSetTheme);
  }, []);

  useEffect(() => {
    if (!!window) {
      handleSetTheme();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
