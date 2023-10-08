import { DataContext } from "@/context/data/dataContext";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";
import { useContext } from "react";

export const useReset = () => {
  const { setData } = useContext(DataContext);

  function handleReset() {
    localStorage.removeItem("highScore");
    setData((prevData) => ({
      ...prevData,
      started: false,
      score: 0,
      sidebarList: [],
      globalTimer: GLOBAL_TIME,
      sessionTimer: SESSION_TIME,
    }));
  }

  return {
    handleReset,
  };
};
