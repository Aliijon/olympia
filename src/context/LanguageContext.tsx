'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '@/translations/en';
import { fa } from '@/translations/fa';
import { Translations } from '@/types/translations';

type Language = 'en' | 'fa';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fa');
  const [direction, setDirection] = useState<Direction>('rtl');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setDirection(savedLanguage === 'fa' ? 'rtl' : 'ltr');
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setDirection(lang === 'fa' ? 'rtl' : 'ltr');
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  const translations = language === 'en' ? en : fa;

  return (
    <LanguageContext.Provider value={{ language, direction, translations, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 