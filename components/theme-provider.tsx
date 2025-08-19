"use client"

import type React from "react"
import { createContext, useContext } from "react"

// Theme Context
export const ThemeContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({
  isDark: false,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children, value }: { children: React.ReactNode, value: { isDark: boolean, toggleTheme: () => void } }) => {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}