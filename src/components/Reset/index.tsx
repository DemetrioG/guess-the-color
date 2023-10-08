import { Text } from "@/styles/general";
import { Button } from "../Button";
import { DataContext } from "@/context/data/dataContext";
import { useContext } from "react";
import { GLOBAL_TIME, SESSION_TIME } from "@/utils/general.helper";

export const Reset = () => {
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

  return (
    <Button
      styles={{ position: "absolute", right: 20, bottom: 20 }}
      onClick={handleReset}
    >
      <Text>Reset all data</Text>
    </Button>
  );
};
