import { Product } from '@/types/product';
import { useLanguage } from '@/context/LanguageContext';

interface ShareButtonsProps {
  product: Product;
}

export default function ShareButtons({ product }: ShareButtonsProps) {
  const { translations, language } = useLanguage();
  
  const shareMessage = `${language === 'fa' ? 'آیا این محصول موجود است؟' : 'Is this item available?'}\n\n${translations.checkProduct}\n${product.name}\n${translations.price}: ${product.price.toFixed(2)} ${language === 'en' ? 'Af' : 'اف'}\n${product.description}`;
  
  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/93771749100?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTelegramShare = () => {
    const telegramUrl = `https://t.me/Alijanelyasi?text=${encodeURIComponent(shareMessage)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
        {language === 'en' ? 'To buy, click on:' : 'برای خرید روی آیکون کلیک کنید:'}
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleWhatsAppShare}
          className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200"
          aria-label="Share on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
          </svg>
        </button>
        <button
          onClick={handleTelegramShare}
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
          aria-label="Share on Telegram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.89.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
          </svg>
        </button>
      </div>
    </div>
  );
} 