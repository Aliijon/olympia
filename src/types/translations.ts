export interface Translations {
  welcome: string;
  discover: string;
  storeDescription: string;
  features: {
    quality: string;
    prices: string;
    delivery: string;
    support: string;
  };
  viewProducts: string;
  categories: string;
  all: string;
  showing: string;
  products: string;
  accessories: string;
  clothing: string;
  footwear: string;
  jewelry: string;
  bags: string;
  search: string;
  price: string;
  discount: string;
  checkProduct: string;
  share: string;
  previous: string;
  next: string;
  page: string;
  of: string;
  darkMode: string;
  // Categories
  barzu: string;
  blouse: string;
  blouseBarzu: string;
  jumperBarzu: string;
  // Product names
  barzuWinter: string;
  barzuClassic: string;
  barzuSpecial: string;
  barzuLuxury: string;
  blouseClassic: string;
  blouseModern: string;
  blouseSpecial: string;
  blouseLuxury: string;
  blousePremium: string;
  blouseBarzuSpecial: string;
  blouseBarzuLuxury: string;
  blouseBarzuPremium: string;
  blouseBarzuClassic: string;
  blouseBarzuModern: string;
  jumperBarzuSilk: string;
  jumperBarzuFur: string;
  jumperBarzuSpecial: string;
  jumperBarzuLuxury: string;
  jumperBarzuPremium: string;
  [key: string]: string | { [key: string]: string }; // Allow string indexing and nested objects
} 