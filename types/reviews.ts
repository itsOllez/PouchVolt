export interface ProductStats {
  brand: string;
  name: string;
  flavor: string;
  strength: number;
  strengthUnit: "mg" | "mg/portion";
  portionsPerCan: number;
  price?: {
    amount: number;
    currency: string;
  };
  availableIn: string[];
  format: "Slim" | "Original" | "Mini";
  type: "White" | "Regular" | "All White";
  releaseDate?: string;
}

export interface ReviewFAQ {
  question: string;
  answer: string;
}

export interface Review {
  slug: string;
  brand: string;
  name: string;
  title: string;
  description: string;
  stats: ProductStats;
  heroImage: string;
  content: string;
  rating: number;
  pros?: string[];
  cons?: string[];
  faqs?: ReviewFAQ[];
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface Brand {
  slug: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  foundedYear: number;
  headquarters: string;
  content?: string;
  pros?: string[];
  cons?: string[];
}