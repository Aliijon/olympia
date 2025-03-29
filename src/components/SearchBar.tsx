import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { Product } from '@/types/product';

interface SearchBarProps {
  onSearch: (filteredProducts: Product[]) => void;
  products: Product[];
}

export default function SearchBar({ onSearch, products }: SearchBarProps) {
  const { translations, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      onSearch(products);
      return;
    }

    const searchTermLower = term.toLowerCase();
    const filtered = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchTermLower);
      const descriptionMatch = product.description.toLowerCase().includes(searchTermLower);
      const categoryMatch = product.category.toLowerCase().includes(searchTermLower);
      const priceMatch = product.price.toString().includes(searchTermLower);
      
      return nameMatch || descriptionMatch || categoryMatch || priceMatch;
    });

    onSearch(filtered);
  };

  return (
    <div className="w-full max-w-md mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={language === 'fa' ? 'جستجو محصولات...' : 'Search products...'}
        className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
          language === 'fa' ? 'text-right' : 'text-left'
        }`}
      />
    </div>
  );
} 