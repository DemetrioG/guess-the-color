import { DataContext } from "@/context/data/dataContext";
import { useContext } from "react";

export const useStart = () => {
  const { setData } = useContext(DataContext);

  function handleStart() {
    setData((prevData) => ({
      ...prevData,
      started: true,
      sidebarList: [],
      score: 0,
    }));
  }

  return {
    handleStart,
  };
};
