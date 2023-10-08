import { useState, useContext, useEffect, useMemo } from "react";
import { DataContext } from "@/context/data/dataContext";
import {
  SESSION_TIME,
  TIMEOUT_ANSWER,
  generateRandomHex,
  generateRandomHexPair,
  handleScore,
  shuffle,
} from "@/utils/general.helper";
import { ItemProps } from "@/components/Sidebar/types";

export const useColors = () => {
  const { data, setData } = useContext(DataContext);
  const [hex, setHex] = useState("#468C98");
  const [firstColor, secondColor] = generateRandomHexPair(hex);
  const shuffledList = useMemo(
    () => shuffle([hex, firstColor, secondColor]),
    [hex]
  );

  useEffect(() => {
    setHex(generateRandomHex());
    setData((prevData) => ({
      ...prevData,
      chosed: false,
    }));
  }, [data.trigger]);

  useEffect(() => {
    if (data.sessionTimer !== SESSION_TIME || !data.started || data.chosed)
      return;

    const item: ItemProps = {
      color: hex,
      guessed: firstColor,
      time: SESSION_TIME,
    };

    setHex(generateRandomHex());
    setData((prevData) => ({
      ...prevData,
      score: handleScore(prevData.score, TIMEOUT_ANSWER),
      sidebarList: [item, ...prevData.sidebarList],
    }));
  }, [data.sessionTimer]);

  return {
    activeColor: hex,
    shuffledList,
  };
};
