import { Dispatch, ReactNode, createContext, useContext, useState } from "react";

type TThemeContext={
    dark:boolean,
    setDark:Dispatch<React.SetStateAction<boolean>>
}
const ThemeContext=createContext<TThemeContext | undefined>(undefined);
type TThemeProviderProps={
children:ReactNode;
}
const ThemeProvider = ({children}:TThemeProviderProps) => {
    const [dark, setDark]= useState(false);
    const values={
        dark,
        setDark
    }
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};
const useTheme=():TThemeContext=>{
    const context=useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
      return context;
}

export  {ThemeProvider, useTheme};