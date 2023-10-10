import { ItemProps } from "@/components/Sidebar/types";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";
import React, { createContext, useState } from "react";

export interface IData {
  started: boolean;
  globalTimer: number;
  sessionTimer: number;
  sidebarList: ItemProps[] | [];
  trigger: number;
  score: number;
  chosed: boolean;
}

export const initialDataState: IData = {
  started: false,
  globalTimer: GLOBAL_TIME,
  sessionTimer: SESSION_TIME,
  sidebarList: [],
  trigger: 0,
  score: 0,
  chosed: false,
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
