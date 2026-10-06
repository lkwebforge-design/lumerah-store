export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: 'hand-bags' | 'clutch' | 'shoulder-bags' | 'totes' | 'the-mini-edit' | 'branded-bags';
  categoryLabel: string;
  image: string;
  gallery?: string[];
  description: string;
  material: string;
  dimensions: string;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  colors?: { name: string; hex: string }[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Slide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  productName: string;
  date: string;
}
