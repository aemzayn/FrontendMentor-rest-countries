import React, { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = window.localStorage.getItem('darkMode')
    if (theme === null) window.localStorage.setItem('darkMode', false)
    if (theme) setDarkMode(theme)
  }, [])

  const changeTheme = () => {
    setDarkMode(!darkMode)
    window.localStorage.setItem('darkMode', !darkMode)
  }

  return (
    <ThemeContext.Provider value={[darkMode, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
