import { useState } from "react";

export const useLocale = () => {
  const [locale, setLocale] = useState("id");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  return [locale, toggleLocale];
};
