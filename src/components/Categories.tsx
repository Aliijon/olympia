import { categories } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  const { translations } = useLanguage();

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case 'Accessories':
        return translations.accessories;
      case 'Clothing':
        return translations.clothing;
      case 'Footwear':
        return translations.footwear;
      case 'Jewelry':
        return translations.jewelry;
      case 'Bags':
        return translations.bags;
      default:
        return category;
    }
  };

  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{translations.categories}</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory('')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedCategory === ''
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {translations.all}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getCategoryTranslation(category)}
          </button>
        ))}
      </div>
    </div>
  );
} 