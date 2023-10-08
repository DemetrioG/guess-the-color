import { DataContext } from "@/context/data/dataContext";
import { generateRandomHex } from "@/utils/general.helper";
import { useState, useContext, useEffect } from "react";

export const useColors = () => {
  const { data } = useContext(DataContext);
  const [hex, setHex] = useState("#468C98");

  useEffect(() => {
    if (data.sessionTimer !== 10) return;
    setHex(generateRandomHex());
  }, [data.sessionTimer]);

  return {
    hex,
  };
};
