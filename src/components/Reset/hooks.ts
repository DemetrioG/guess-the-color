import { DataContext } from "@/context/data/dataContext";
import { RESET_DATA } from "@/utils/general.helper";
import { useContext } from "react";

export const useReset = () => {
  const { setData } = useContext(DataContext);

  function handleReset() {
    localStorage.removeItem("highScore");
    setData((prevData) => ({
      ...prevData,
      ...RESET_DATA,
    }));
  }

  return {
    handleReset,
  };
};
