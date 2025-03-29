'use client';

import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';
import { DarkModeProvider } from '@/context/DarkModeContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <LanguageProvider>
      <DarkModeProvider>
        <div className="relative">
          {/* Fixed header with buttons */}
          <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
            <div className="flex items-center gap-4">
              {!isHomePage && <DarkModeToggle />}
              <LanguageSwitcher />
            </div>
          </div>
          {children}
        </div>
      </DarkModeProvider>
    </LanguageProvider>
  );
} 