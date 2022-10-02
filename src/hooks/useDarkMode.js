import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      localStorage.setItem(
        "theme",
        JSON.stringify(prevTheme === "dark" ? "light" : "dark")
      );
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme"));
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, toggleTheme];
};
