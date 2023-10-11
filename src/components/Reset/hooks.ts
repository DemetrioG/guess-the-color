import { DataContext } from "@/context/data/dataContext";
import { RESET_DATA } from "@/utils/general.helper";
import { removeItem } from "@/utils/storage.helper";
import { useContext } from "react";

export const useReset = () => {
  const { setData } = useContext(DataContext);

  function handleReset() {
    removeItem("highScore");
    removeItem("list");
    setData((prevData) => ({
      ...prevData,
      ...RESET_DATA,
    }));
  }

  return {
    handleReset,
  };
};
