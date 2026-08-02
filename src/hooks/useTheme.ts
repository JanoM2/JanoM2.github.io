import { useEffect, useState } from "react";
import type { Theme } from "../types";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  return (document.body.dataset.theme as Theme) || "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    toggleTheme,
  };
}
