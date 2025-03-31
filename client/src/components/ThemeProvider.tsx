import { createContext, useState, useEffect, useContext, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Check if there's a saved theme preference in localStorage
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') as Theme : null;
  const [theme, setTheme] = useState<Theme>(savedTheme || "dark");

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      // Save the new theme preference to localStorage
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    // Apply the theme to both document.body and html element for complete coverage
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    
    // Also set data-theme attribute for components that rely on it
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme-color meta tag for browser UI
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#13151a' : '#ffffff');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
