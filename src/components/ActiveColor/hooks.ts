import { DataContext, Difficulty } from "@/context/data/dataContext";
import { removeItem } from "@/utils/storage.helper";
import { useContext } from "react";

export const useStart = () => {
  const { setData } = useContext(DataContext);

  function handleStart(difficulty: Difficulty) {
    removeItem("list");
    setData((prevData) => ({
      ...prevData,
      difficulty: difficulty,
      started: true,
      score: 0,
    }));
  }

  return {
    handleStart,
  };
};
