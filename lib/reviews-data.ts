import { Review, Brand } from '@/types/reviews';

export const brands: Record<string, Brand> = {
  zyn: {
    slug: "zyn",
    name: "ZYN",
    description: "Swedish Match's popular nicotine pouch brand, known for quality and variety.",
    logo: "https://example.com/zyn-logo.png",
    website: "https://www.zyn.com",
    foundedYear: 2016,
    headquarters: "Stockholm, Sweden",
    content: `
# ZYN Nicotine Pouches

ZYN is a leading brand in the nicotine pouch market, created by Swedish Match. Known for their quality and innovative approach...

## History

Founded in 2016, ZYN has quickly become...

## Product Range

ZYN offers various strengths and flavors...
    `
  },
  velo: {
    slug: "velo",
    name: "VELO",
    description: "British American Tobacco's modern nicotine pouch brand.",
    logo: "https://example.com/velo-logo.png",
    website: "https://www.velo.com",
    foundedYear: 2019,
    headquarters: "London, UK",
    content: `
# VELO Nicotine Pouches

VELO represents the modern approach to nicotine pouches...

## History

Launched in 2019 by British American Tobacco...

## Innovation

VELO has introduced several innovations...
    `
  }
};

export const reviews: Record<string, Review> = {
  "zyn-cool-mint": {
    slug: "cool-mint",
    brand: "zyn",
    name: "Cool Mint",
    title: "ZYN Cool Mint Review - A Fresh Take on Nicotine Pouches",
    description: "An in-depth review of ZYN Cool Mint nicotine pouches, examining strength, flavor duration, and overall experience.",
    stats: {
      brand: "ZYN",
      name: "Cool Mint",
      flavor: "Mint",
      strength: 6,
      strengthUnit: "mg/portion",
      portionsPerCan: 24,
      price: {
        amount: 4.99,
        currency: "USD"
      },
      availableIn: ["United States", "Sweden", "United Kingdom", "Germany"],
      format: "Slim",
      type: "All White"
    },
    heroImage: "https://images.unsplash.com/photo-example",
    content: `
# ZYN Cool Mint Review

ZYN's Cool Mint offers a refreshing take on the classic mint flavor profile...

## Flavor Profile

The mint flavor is crisp and natural, avoiding the artificial sweetness found in some competitors...

## Nicotine Delivery

At 6mg/portion, the nicotine delivery is smooth and consistent...

## Value for Money

Priced competitively at $4.99 per can...
    `,
    rating: 4.5,
    pros: [
      "Long-lasting flavor",
      "Consistent nicotine delivery",
      "Minimal drip",
      "Good portion material"
    ],
    cons: [
      "Slightly expensive",
      "Can be too strong for beginners"
    ],
    faqs: [
      {
        question: "How long does the flavor last?",
        answer: "The flavor typically lasts 45-60 minutes, with the mint remaining noticeable throughout."
      },
      {
        question: "Is this good for beginners?",
        answer: "Due to its 6mg strength, we recommend starting with ZYN's 3mg version if you're new to nicotine pouches."
      }
    ],
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T15:30:00Z",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-avatar"
    }
  },
  "velo-freeze": {
    slug: "freeze",
    brand: "velo",
    name: "Freeze",
    title: "VELO Freeze Review - Extra Strong Mint Experience",
    description: "A detailed review of VELO Freeze nicotine pouches, known for their intense mint flavor and strong nicotine content.",
    stats: {
      brand: "VELO",
      name: "Freeze",
      flavor: "Strong Mint",
      strength: 11,
      strengthUnit: "mg/portion",
      portionsPerCan: 20,
      price: {
        amount: 5.99,
        currency: "USD"
      },
      availableIn: ["United Kingdom", "Germany", "Poland"],
      format: "Slim",
      type: "All White"
    },
    heroImage: "https://images.unsplash.com/photo-example-2",
    content: `
# VELO Freeze Review

VELO Freeze lives up to its name with an intense cooling sensation...

## Flavor Profile

The mint flavor is intense and long-lasting...

## Nicotine Delivery

With 11mg/portion, this is one of the stronger options available...
    `,
    rating: 4.0,
    pros: [
      "Very strong mint flavor",
      "Long-lasting nicotine satisfaction",
      "Quality pouch material"
    ],
    cons: [
      "May be too intense for some users",
      "Higher price point",
      "Smaller portion count per can"
    ],
    publishedAt: "2024-01-18T10:00:00Z",
    author: {
      name: "Jane Doe",
      avatar: "https://images.unsplash.com/photo-avatar-2"
    }
  }
};