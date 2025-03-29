import { Product } from '@/types/product';

export const categories = [
  "برزو",
  "بلوز",
  "بلوز برزو",
  "جمپر برزو"
];

export const products: Product[] = [
  // برزو products
  {
    id: "1",
    name: "برزو پت دار گرم زمستانی",
    description: "برزو پت دار گرم زمستانی",
    price: 759,
    previousPrice: 999,
    image: "/images/برزو/IMG-20250121-WA0007.jpg",
    category: categories[0]
  },
  {
    id: "2",
    name: "برزو پت دار گرم زمستانی",
    description: "برزو پت دار گرم زمستانی",
    price: 759,
    previousPrice: 999,
    image: "/images/برزو/IMG-20250121-WA0010.jpg",
    category: categories[0]
  },
  {
    id: "3",
    name: "برزو کلاسیک",
    description: "برزو کلاسیک با کیفیت عالی",
    price: 649,
    previousPrice: 849,
    image: "/images/برزو/IMG-20241006-WA0009.jpg",
    category: categories[0]
  },
  {
    id: "4",
    name: "برزو ویژه",
    description: "برزو ویژه با طراحی مدرن",
    price: 699,
    previousPrice: 899,
    image: "/images/برزو/IMG-20241118-WA0017.jpg",
    category: categories[0]
  },
  {
    id: "5",
    name: "برزو لوکس",
    description: "برزو لوکس با کیفیت برتر",
    price: 699,
    previousPrice: 899,
    image: "/images/برزو/IMG-20241118-WA0021.jpg",
    category: categories[0]
  },

  // بلوز products
  {
    id: "6",
    name: "بلوز کلاسیک",
    description: "بلوز کلاسیک با کیفیت عالی",
    price: 449,
    previousPrice: 659,
    image: "/images/بلوز/IMG-20241112-WA0010.jpg",
    category: categories[1]
  },
  {
    id: "7",
    name: "بلوز مدرن",
    description: "بلوز مدرن با طراحی جدید",
    price: 499,
    previousPrice: 699,
    image: "/images/بلوز/IMG-20250215-WA0005.jpg",
    category: categories[1]
  },
  {
    id: "8",
    name: "بلوز ویژه",
    description: "بلوز ویژه با کیفیت برتر",
    price: 499,
    previousPrice: 749,
    image: "/images/بلوز/IMG-20241204-WA0007.jpg",
    category: categories[1]
  },
  {
    id: "9",
    name: "بلوز لوکس",
    description: "بلوز لوکس با طراحی منحصر به فرد",
    price: 699,
    previousPrice: 849,
    image: "/images/بلوز/IMG-20250215-WA0011.jpg",
    category: categories[1]
  },
  {
    id: "10",
    name: "بلوز پرمیوم",
    description: "بلوز پرمیوم با کیفیت عالی",
    price: 649,
    previousPrice: 849,
    image: "/images/بلوز/IMG-20250215-WA0014.jpg",
    category: categories[1]
  },

  // بلوز برزو products
  {
    id: "11",
    name: "بلوز برزو ویژه",
    description: "بلوز برزو ویژه با کیفیت عالی",
    price: 999,
    previousPrice: 1299,
    image: "/images/بلوز برزو/IMG-20250129-WA0007.jpg",
    category: categories[2]
  },
  {
    id: "12",
    name: "بلوز برزو لوکس",
    description: "بلوز برزو لوکس با طراحی منحصر به فرد",
    price: 1199,
    previousPrice: 1899,
    image: "/images/بلوز برزو/IMG-20250215-WA0010.jpg",
    category: categories[2]
  },
  {
    id: "13",
    name: "بلوز برزو پرمیوم",
    description: "بلوز برزو پرمیوم با کیفیت برتر",
    price: 1199,
    previousPrice: 1899,
    image: "/images/بلوز برزو/IMG-20250215-WA0013.jpg",
    category: categories[2]
  },
  {
    id: "14",
    name: "بلوز برزو کلاسیک",
    description: "بلوز برزو کلاسیک با کیفیت عالی",
    price: 999,
    previousPrice: 1299,
    image: "/images/بلوز برزو/IMG-20250215-WA0020.jpg",
    category: categories[2]
  },
  {
    id: "15",
    name: "بلوز برزو مدرن",
    description: "بلوز برزو مدرن با طراحی جدید",
    price: 1149,
    previousPrice: 1499,
    image: "/images/بلوز برزو/IMG-20250215-WA0025.jpg",
    category: categories[2]
  },

  // جمپر برزو products
  {
    id: "16",
    name: "جمپر برزو ابریشمی",
    description: "جنس ابریشمی - کیفیت عالی",
    price: 1249,
    previousPrice: 1749,
    image: "/images/جمپر برزو/IMG-20241118-WA0011.jpg",
    category: categories[3]
  },
  {
    id: "17",
    name: "جمپر برزو فراشوتی",
    description: "جنس فراشوتی",
    price: 1299,
    previousPrice: 1799,
    image: "/images/جمپر برزو/IMG-20241118-WA0022.jpg",
    category: categories[3]
  },
  {
    id: "18",
    name: "جمپر برزو ویژه",
    description: "جمپر برزو ویژه با کیفیت عالی",
    price: 1199,
    previousPrice: 1749,
    image: "/images/جمپر برزو/IMG-20241204-WA0021.jpg",
    category: categories[3]
  },
  {
    id: "19",
    name: "جمپر برزو لوکس",
    description: "جمپر برزو لوکس با طراحی منحصر به فرد",
    price: 1349,
    previousPrice: 1749,
    image: "/images/جمپر برزو/IMG-20250215-WA0007.jpg",
    category: categories[3]
  },
  {
    id: "20",
    name: "جمپر برزو پرمیوم",
    description: "جنس ابریشمی - کیفیت عالی",
    price: 1349,
    previousPrice: 1749,
    image: "/images/جمپر برزو/IMG-20250215-WA0018.jpg",
    category: categories[3]
  }
]; 