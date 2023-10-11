import { DataContext } from "@/context/data/dataContext";
import { GLOBAL_TIME, RESET_DATA, SESSION_TIME } from "@/utils/general.helper";
import { removeItem } from "@/utils/storage.helper";
import { useContext, useEffect } from "react";

export const useInfoBar = () => {
  const { data, setData } = useContext(DataContext);

  function handleRestart() {
    removeItem("list");
    return setData((prevData) => ({
      ...prevData,
      ...RESET_DATA,
    }));
  }

  useEffect(() => {
    if (!data.started) return;

    const globalTimerInterval = setInterval(() => {
      setData((prevData) => {
        if (prevData.globalTimer < 1) {
          clearInterval(globalTimerInterval);
          return { ...prevData, started: false, globalTimer: GLOBAL_TIME };
        } else {
          return { ...prevData, globalTimer: prevData.globalTimer - 1 };
        }
      });
    }, 1000);

    const sessionTimerInterval = setInterval(() => {
      setData((prevData) => {
        if (prevData.sessionTimer < 2 || prevData.globalTimer === GLOBAL_TIME) {
          return { ...prevData, sessionTimer: SESSION_TIME };
        } else {
          return { ...prevData, sessionTimer: prevData.sessionTimer - 1 };
        }
      });
    }, 1000);

    return () => {
      clearInterval(globalTimerInterval);
      clearInterval(sessionTimerInterval);
    };
  }, [data.started]);

  return {
    handleRestart,
  };
};
