export const useChangeTheme = () => {
  function handleChangeTheme() {
    const isOnDarkTheme = localStorage.getItem("theme") === "dark";
    isOnDarkTheme
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
    return window.dispatchEvent(new Event("storage"));
  }

  return {
    handleChangeTheme,
  };
};
