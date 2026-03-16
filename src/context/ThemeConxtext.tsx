import React, { createContext, useState, useContext, type ReactNode} from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";

interface ThemeContextData {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <StyledProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);