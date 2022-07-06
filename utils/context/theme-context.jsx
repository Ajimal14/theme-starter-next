import React,{ createContext , useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ defaultTheme = 'light', children }) => {
    
    const [ theme , setTheme ] = useState(defaultTheme);
    
    const toggleTheme = () => {
        let activeTheme = theme === 'light' ? 'dark' : 'light'; 
        document.querySelector('body').className = activeTheme;
        setTheme(activeTheme);
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    return useContext(ThemeContext);
};