"use client"
import React, { createContext, useState } from 'react'

export const ActiveSectionContex = createContext(null)
export  const ActiveSectionContextProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState("Home")

  return (
    <ActiveSectionContex.Provider value={{
        activeSection,
        setActiveSection
    }}>
        {children}
    </ActiveSectionContex.Provider>
  )
}
