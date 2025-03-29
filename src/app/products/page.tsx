'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useDarkMode } from '@/context/DarkModeContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { translations } = useLanguage();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" />;
  }

  const categories = Array.from(new Set(products.map(product => product.category)));
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const getCategoryTranslation = (category: string): string => {
    const translation = translations[category];
    return typeof translation === 'string' ? translation : category;
  };

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {translations.products} ({filteredProducts.length} {translations.showing})
        </h1>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedCategory === null
                ? 'bg-black text-white'
                : isDarkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {translations.all}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {getCategoryTranslation(category)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
} 