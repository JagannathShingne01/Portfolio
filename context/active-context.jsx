"use client"
import React, { createContext, useState } from 'react'

export const ActiveSectionContex = createContext(null)
export  const ActiveSectionContextProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContex.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
        {children}
    </ActiveSectionContex.Provider>
  )
}
