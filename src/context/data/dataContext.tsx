import { ItemProps } from "@/components/Sidebar/types";
import React, { createContext, useState } from "react";

interface IData {
  started: boolean;
  globalTimer: number;
  sessionTimer: number;
  sidebarList: ItemProps[] | [];
}

export const initialDataState: IData = {
  started: false,
  globalTimer: 30,
  sessionTimer: 10,
  sidebarList: [],
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
