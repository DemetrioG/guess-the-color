import * as React from "react";

type Theme = "light" | "dark";

interface ITheme {
  mode: Theme;
}

export const initialThemeState: ITheme = {
  mode: "light",
};

export const ThemeContext = React.createContext<{
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
  const [theme, setTheme] = React.useState<ITheme>({
    ...initialThemeState,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
