import { DataContext, Difficulty } from "@/context/data/dataContext";
import { useContext } from "react";

export const useStart = () => {
  const { setData } = useContext(DataContext);

  function handleStart(difficulty: Difficulty) {
    setData((prevData) => ({
      ...prevData,
      difficulty: difficulty,
      started: true,
      sidebarList: [],
      score: 0,
    }));
  }

  return {
    handleStart,
  };
};
