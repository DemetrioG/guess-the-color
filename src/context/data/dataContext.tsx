import React, { createContext, useState } from "react";

interface IData {
  started: boolean;
  timer: number;
}

export const initialDataState: IData = {
  started: false,
  timer: 30,
};

export const DataContext = createContext<{
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}>({
  data: {
    ...initialDataState,
  },
  setData: () => {},
});

export function DataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<IData>({
    ...initialDataState,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
