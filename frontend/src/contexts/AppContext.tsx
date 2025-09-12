'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Simple navigation context for static site
interface AppState {
  navigation: {
    isMenuOpen: boolean;
    activeSection: string;
  };
}

interface AppContextType {
  state: AppState;
  toggleMenu: () => void;
  closeMenu: () => void;
  setActiveSection: (section: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const state: AppState = {
    navigation: {
      isMenuOpen,
      activeSection,
    },
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const value: AppContextType = {
    state,
    toggleMenu,
    closeMenu,
    setActiveSection,
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}