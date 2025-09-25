import React, { createContext, useContext, useState } from 'react';


const ThemeToggleContext = createContext({ isDark: false, toggle: () => {} });


export default function ThemeToggleProvider({ children }) {
const [isDark, setIsDark] = useState(false);
const toggle = () => setIsDark((v) => !v);
const value = { isDark, toggle };
return <ThemeToggleContext.Provider value={value}>{children}</ThemeToggleContext.Provider>;
}


export const useThemeToggle = () => useContext(ThemeToggleContext);