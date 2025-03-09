import { createContext, useState, useMemo, useContext, ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

interface IThemeToggle {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}
const ColorModeContext = createContext<IThemeToggle | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);

interface IContext {
  children: ReactNode;
}
export const ThemeToggleProvider = ({ children }: IContext) => {
  const storedMode = localStorage.getItem("themeMode") as
    | "light"
    | "dark"
    | null;
  const [mode, setMode] = useState<"light" | "dark">(storedMode || "light");

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

// Usage in a component
