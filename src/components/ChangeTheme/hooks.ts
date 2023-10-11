import { getItem, setItem } from "@/utils/storage.helper";

export const useChangeTheme = () => {
  function handleChangeTheme() {
    const isOnDarkTheme = getItem("theme") === "dark";
    return isOnDarkTheme ? setItem("theme", "light") : setItem("theme", "dark");
  }

  return {
    handleChangeTheme,
  };
};
