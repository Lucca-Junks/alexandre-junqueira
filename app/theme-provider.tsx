"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("alexandre-theme");

    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }

    setReady(true);
  }, []);

  function toggleTheme() {
    setDark((current) => {
      const next = !current;

      localStorage.setItem(
        "alexandre-theme",
        next ? "dark" : "light"
      );

      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return next;
    });
  }

  if (!ready) {
    return (
      <div className="min-h-screen bg-[#E7DECF]" />
    );
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme precisa estar dentro de ThemeProvider"
    );
  }

  return context;
}