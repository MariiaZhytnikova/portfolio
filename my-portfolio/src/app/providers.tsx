import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { darkTheme, lightTheme } from "../theme/theme";

type ThemeMode = "dark" | "light";

type ThemeModeContextValue = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within Providers");
  }

  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  // Read initial mode from localStorage, fallback to dark
  const getInitialMode = (): ThemeMode => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme-mode");
      if (stored === "light" || stored === "dark") return stored;
    }
    return "dark";
  };

  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  const contextValue = useMemo(
    () => ({ mode, toggleMode }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}