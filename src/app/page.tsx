'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { FaShoppingCart, FaStar, FaTruck, FaHeadset } from 'react-icons/fa';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { translations } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" />;
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image Container */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75 z-10" />
          
          {/* Background image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/background.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={85}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {translations.welcome}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {translations.discover}
            </p>
            <p className="text-lg mb-12 text-white/90 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {translations.storeDescription}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {translations.features.quality}
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {translations.features.prices}
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTruck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {translations.features.delivery}
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeadset className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {translations.features.support}
                </h3>
              </div>
            </div>

            <Link 
              href="/products"
              className="inline-block px-8 py-4 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {translations.viewProducts}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
