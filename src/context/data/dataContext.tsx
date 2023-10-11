import { ItemProps } from "@/components/Sidebar/types";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";
import { getItem } from "@/utils/storage.helper";
import React, { createContext, useEffect, useState } from "react";

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

  function handleSetList() {
    const list = getItem("list");
    setData((prevData) => ({
      ...prevData,
      sidebarList: list ? (JSON.parse(list) as ItemProps[]) : [],
    }));
  }

  useEffect(() => {
    window.addEventListener("list", handleSetList);
    return () => window.removeEventListener("list", handleSetList);
  }, []);

  useEffect(() => {
    if (!!window) {
      handleSetList();
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
