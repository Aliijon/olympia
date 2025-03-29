'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '@/context/DarkModeContext';
import { useLanguage } from '@/context/LanguageContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { translations } = useLanguage();

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded-lg bg-black hover:bg-gray-800 text-white transition-colors duration-200 flex items-center gap-2 shadow-lg"
    >
      {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
      {translations.darkMode}
    </button>
  );
} 