'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/types/product';
import ShareButtons from './ShareButtons';
import ImageModal from './ImageModal';
import { FaSearch } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { translations } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Product Image with Zoom Functionality */}
      <div 
        className="relative w-full h-64 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Zoom indicator */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-black/50 p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform">
            <FaSearch className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={product.image}
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {product.price.toFixed(2)} {translations.language === 'en' ? 'Af' : 'اف'}
          </span>
          <ShareButtons product={product} />
        </div>
      </div>
    </div>
  );
} 