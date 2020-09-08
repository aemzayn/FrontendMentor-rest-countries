import React from 'react'
import ThemeProvider from './ThemeProvider'
import CountryStateProvider from './CountryStateProvider'

const GlobalStateProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <CountryStateProvider>{children}</CountryStateProvider>
    </ThemeProvider>
  )
}

export default GlobalStateProvider
