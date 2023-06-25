import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
      <div className={`theme-button ${darkMode ? "dark-mode" : "light-mode"}`}>
        <button className="theme-button" onClick={toggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    </ThemeContext.Provider>
  );
};
