"use client";

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types'; 

// type SectionName = (typeof links)[number]['name'];

type ActionSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  active: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
    // useState hook to keep track of the section that currently has focus
  const [active, setActive] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link


  return <ActiveSectionContext.Provider value={{
    active,
    setActive,
    timeOfLastClick,
    setTimeOfLastClick,
  }}>{children}</ActiveSectionContext.Provider>
}


export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
  }
  return context;
}