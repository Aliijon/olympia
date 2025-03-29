import { ChangeEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { translations } = useLanguage();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={translations.search}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
} 