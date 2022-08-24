import { createContext, useState, useEffect } from "react";


const themeStyles = {
    dark: {
        backgroundElements: '#2b3945',
        backgroundBody: '#202c37',
        color: '#ffffff',
        moonImg: './moon-light.svg'
    },
    light: {
        backgroundElements: '#ffffff',
        backgroundBody: '#fafafa',
        color: '#111517',
        moonImg: './moon-dark.svg'
    }
}

export const ThemeContext = createContext()

export const Theme = ({children}) => {

    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? themeStyles.dark : themeStyles.light
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    useEffect(()=>{
        const isDark = localStorage.getItem("isDark") === "true"
        setIsDark(isDark)
    },[])

    return(
        <ThemeContext.Provider value={[{theme, isDark},toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
    
}