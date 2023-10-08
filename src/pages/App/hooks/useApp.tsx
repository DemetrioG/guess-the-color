import { useState, useContext, useEffect, useMemo } from "react";
import { DataContext } from "@/context/data/dataContext";
import {
  SESSION_TIME,
  generateRandomHex,
  generateRandomHexPair,
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
    if (data.sessionTimer !== SESSION_TIME) return;
    setHex(generateRandomHex());
  }, [data.sessionTimer]);

  useEffect(() => {
    setHex(generateRandomHex());
  }, [data.trigger]);

  // useEffect(() => {
  //   if (data.sessionTimer !== SESSION_TIME || !data.started) return;
  //   const item: ItemProps = {
  //     color: hex,
  //     guessed: firstColor,
  //     time: SESSION_TIME,
  //   };

  //   setHex(generateRandomHex());
  //   setData((prevData) => ({
  //     ...prevData,
  //     sidebarList: [item, ...prevData.sidebarList],
  //   }));
  // }, [data.sessionTimer]);

  return {
    activeColor: hex,
    shuffledList,
  };
};
