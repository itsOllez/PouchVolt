import { Review, Brand } from '@/types/reviews';
import { ProsCons } from '@/components/reviews/pros-cons';

export const brands: Record<string, Brand> = {
  zyn: {
    slug: "zyn",
    name: "ZYN",
    description: "Swedish Match's popular nicotine pouch brand, known for quality and variety.",
    logo: "/brand-logo/zyn-logo.png",
    website: "https://www.zyn.com",
    foundedYear: 2016,
    headquarters: "Stockholm, Sweden",
    content: `
ZYN is a leading brand in the nicotine pouch market, created by Swedish Match. Known for their quality and innovative approach, ZYN offers a tobacco-free alternative to traditional nicotine products. These small pouches are designed to be placed between the upper lip and gum, providing a discreet and convenient way to enjoy nicotine without smoke, vapor, or spit.

## History

Founded in 2014, ZYN has quickly become a dominant force in the nicotine pouch industry. The brand was initially launched on a small scale in the US market, starting in Colorado and then expanding to various western US states in 2016. That same year, ZYN also entered the Swedish market.

From 2017 to 2019, Swedish Match invested $115 million to expand their US manufacturing plant in Owensboro, Kentucky, to handle the production of ZYN pouches directly in the US. This expansion was completed in May 2019, significantly boosting production capacity.

ZYN's growth has been remarkable. In the last six years, ZYN's shipments in the US have surged from 1 million to 334 million, representing an impressive 119% annualized growth rate. By the end of 2020, ZYN pouches were available in approximately 100,000 US stores.

In November 2022, Swedish Match was acquired by Philip Morris International, identifying ZYN as one of the strategic brands to achieve their vision of a "smoke-free future."

## Product Range

### Nicotine Strengths

ZYN pouches are available in several nicotine strengths, typically including:
- 3 mg/pouch
- 6 mg/pouch
- 9 mg/pouch (in some markets)
- 11 mg/pouch (in some markets)
- 12.5 mg/pouch (in some markets)

### Flavors

ZYN provides a wide array of flavors, including but not limited to:
- Cool Mint
- Wintergreen
- Citrus
- Espressino
- Icy Mint
- Chili Guava
- Icy Blackcurrant

Each flavor is carefully crafted to provide a pleasant and long-lasting taste experience.

## User Experience

ZYN pouches are designed for ease of use and comfort. They are small, lightweight (0.7g each), and fit discreetly under the upper lip. Users typically experience a nicotine effect within the first couple of minutes, with each pouch lasting about 30–60 minutes.

The brand is known for its smooth and consistent nicotine release, providing a satisfying experience without harshness. The flavors are well-balanced, offering an enjoyable taste throughout the duration of use.

## Market Position

ZYN has established itself as a category leader in the nicotine pouch market. As of Q3 2023, ZYN captured an impressive 76% retail market share in the U.S. nicotine pouch segment, measured in dollars. This dominance has led to ZYN often being described as a "category killer" in the industry.

## Safety and Regulation

While ZYN pouches offer a smoke-free and tobacco-free alternative to traditional nicotine products, it's important to note that they still contain nicotine, which is addictive. The long-term effects of nicotine pouch use are still being studied.

ZYN pouches are regulated differently in various countries. In the UK, for example, they are sold as consumer products, while in some other markets they may be subject to tobacco product regulations.

## Conclusion

ZYN has revolutionized the nicotine consumption landscape with its innovative, tobacco-free pouches. Its rapid growth and dominant market position testify to the brand's quality and appeal to consumers seeking alternatives to traditional tobacco products. As the nicotine pouch market continues to evolve, ZYN remains at the forefront, continually adapting to meet consumer needs and regulatory requirements.
    `
  },
  velo: {
    slug: "velo",
    name: "VELO",
    description: "British American Tobacco's modern nicotine pouch brand.",
    logo: "/brand-logo/velo-logo.webp",
    website: "https://www.velo.com",
    foundedYear: 2019,
    pros: ["Wide variety of flavors and nicotine strengths", "Tobacco-free composition with fewer toxins", "Discreet design suitable for any environment", "Long-lasting flavor and effect"],
    cons: ["Packaging quality could be improved", "Some flavors may feel less intense than competitors", "Limited availability of ultra-high-strength options", "Rebranding confusion with flavor names in some regions"],
    headquarters: "London, UK",
    content: `
VELO nicotine pouches have emerged as a leading product in the modern oral nicotine market. Developed by British American Tobacco (BAT), VELO offers a tobacco-free alternative to traditional nicotine products such as cigarettes, snus, and vapes. With a wide range of flavors, strengths, and innovative designs, VELO has gained significant popularity among users seeking a discreet and versatile nicotine experience.

## History

VELO was officially launched in 2019 by British American Tobacco as part of its efforts to expand the modern oral nicotine category. The brand evolved from EPOK, a pioneering all-white snus product that transitioned into tobacco-free pouches. Initially marketed under the names LYFT in Europe and VELO in the U.S., BAT later unified the brand globally under the VELO name to create a consistent identity. The product has since grown into one of the top-selling nicotine pouch brands worldwide, with strong demand in markets such as the U.S., Europe, and emerging regions like Pakistan.

## Innovation

VELO distinguishes itself through several innovations:

- **Tobacco-Free Composition**: Unlike traditional snus, VELO pouches are entirely tobacco-free, using synthetic nicotine derived from tobacco plants. This eliminates many of the toxins associated with tobacco products.
- **Variety of Flavors and Strengths**: VELO offers an extensive range of flavors, including mint (spearmint, peppermint), fruit (dragon fruit, black cherry), coffee, and cinnamon. Nicotine strengths range from mild (2 mg) to ultra-strong (up to 20 mg), catering to both novice and experienced users.
- **Discreet Design**: The pouches are small, lightweight, and come in Mini or Slim formats for a comfortable fit under the lip. They are stain-free, spit-free, and designed for use anytime and anywhere.
- **Dot Strength System**: VELO employs a user-friendly dot system on its packaging to indicate nicotine strength levels, making it easier for users to select their preferred intensity.

## User Experience

VELO nicotine pouches are praised for their convenience and versatility. Here are some highlights based on user reviews:

- **Flavor Quality**: While not as intense as some competitors like ZYN, VELO's flavors are described as subtle yet satisfying. They provide a long-lasting essence that appeals to a wide audience.
- **Nicotine Delivery**: The pouches offer effective nicotine absorption with effects lasting between 20 to 45 minutes depending on the format. Users appreciate the range of strengths available for different preferences.
- **Packaging**: The plastic cans include a two-part lid for storing used pouches. Although functional, some users find the packaging slightly flimsy compared to competitors.
- **Discretion**: The pouches are unobtrusive and ideal for situations where smoking or vaping is not permitted.

## Conclusion

VELO nicotine pouches are a standout choice for those seeking a modern alternative to traditional nicotine products. With their tobacco-free composition, diverse flavor options, and varying strengths, they cater to a broad spectrum of users. While there is room for improvement in packaging design and flavor intensity, VELO remains one of the most popular brands in the market due to its innovation and user-centric approach.
    `
  },
    nordic_spirit: {
        slug: "nordic-spirit",
        name: "Nordic Spirit",
        description: "Nordic Spirit is a Swedish brand of tobacco-free nicotine pouches, designed to provide a smoke-free alternative for nicotine users. The brand offers a variety of flavors and strengths, catering to different consumer preferences.",
        logo: "/brand-logo/nordic-spirit.png",
        website: "https://nordicspirit.com/",
        foundedYear: 2018,
        headquarters: "Stockholm, Sweden",
        content: ""
    },
    on: {
        slug: "on",
        name: "On!",
        description: "On! is a tobacco leaf-free nicotine pouch designed to offer an alternative to traditional tobacco products.",
        logo: "/brand-logo/on-logo.webp",
        website: "https://www.onnicotine.com/",
        foundedYear: 2020,
        headquarters: "Richmond, Virginia, USA",
        content: ""
    },
    loop: {
        slug: "loop",
        name: "LOOP",
        description: "LOOP offers tobacco-free nicotine pouches in a variety of flavors, utilizing Instant Rush technology for fast nicotine release.",
        logo: "/brand-logo/loop-logo.png",
        website: "https://loopnicotinepouches.com/",
        foundedYear: 2019,
        headquarters: "Stockholm, Sweden",
        content: ""
    },
    helwit: {
        slug: "helwit",
        name: "Helwit",
        description: "Helwit nicotine pouches are a tobacco-free and smoke-free alternative to traditional smoking and vaping, focusing on sustainability and offering a variety of flavors.",
        logo: "/brand-logo/helwit-logo.png",
        website: "https://helwit.co.uk/",
        foundedYear: 2021,
        headquarters: "Växjö, Sweden",
        content: ""
    },
    xqs: {
        slug: "xqs",
        name: "XQS",
        description: "XQS is a Swedish brand known for its tobacco-free nicotine pouches, offering a variety of unique flavors and strengths. It was created by two snus users aiming to quit traditional tobacco products.",
        logo: "/brand-logo/xqs-logo.webp",
        website: "https://xqsnicotinepouches.com",
        foundedYear: 2005,
        headquarters: "Dalarna, Sweden",
        content: ""
    },
    skruf: {
        slug: "skruf",
        name: "Skruf",
        description: "Skruf is a nicotine brand known for its tobacco-free nicotine pouches, offering a variety of flavors and strengths. Founded in 2002, it has gained popularity across Scandinavia, especially with its Skruf Super White product line.",
        logo: "/brand-logo/skruf-logo.png",
        website: "https://skruf.se",
        foundedYear: 2002,
        headquarters: "Sävsjö, Småland, Sweden",
        content: ""
    },
    white_fox: {
        slug: "white-fox",
        name: "White Fox",
        description: "White Fox offers a range of tobacco-free nicotine pouches with various mint flavors and strengths, known for their high nicotine content and innovative design.",
        logo: "/brand-logo/white-fox.webp",
        website: "https://whitefox.me/",
        foundedYear: 2019,
        headquarters: "Enköping, Sweden",
        content: ""
    },
    avant: {
        slug: "avant",
        name: "Avant",
        description: "Avant offers a range of tobacco-free nicotine products, including nicotine pouches, manufactured in Sweden by Kurbits Snus. The brand features various flavors and strengths.",
        logo: "/brand-logo/avant-logo.webp",
        website: "https://kurbitssnus.com/",
        foundedYear: 2023,
        headquarters: "Sweden",
        content: ""
    },
    baow: {
        slug: "baow",
        name: "BAOW",
        description: "BAOW is a brand of nicotine pouches established in 2024 by Yoik in Sweden. The brand offers a range of extra strong nicotine pouches with flavors such as chili lime and gin tonic.",
        logo: "/brand-logo/baow-logo.webp",
        website: "/",
        foundedYear: 2024,
        headquarters: "Sweden",
        content: ""
    },
    elf_bar_tacja: {
        slug: "elf-bar-tacja",
        name: "Elf Bar Tacja",
        description: "Elf Bar Tacja, new product from the famous vape brand 'Elf Bar' offers a range of tobacco-free nicotine pouches available in various flavors and strengths, known for their convenience and discreet use.",
        logo: "/brand-logo/elf-bar-tacja.webp",
        website: "https://www.elfbar.com",
        foundedYear: 2023,
        headquarters: "China",
        content: ""
    },
    fumi: {
        slug: "fumi",
        name: "Fumi",
        description: "Fumi offers premium, tobacco-free nicotine pouches with unique salty flavors and varying strengths, crafted with high-quality materials. The brand is known for its innovative approach to flavor and quality control.",
        logo: "/brand-logo/fumi-logo.png",
        website: "https://fumipods.com/",
        foundedYear: 2021,
        headquarters: "Ödeshög, Sweden",
        content: ""
    },
    its: {
        slug: "its",
        name: "It's",
        description: "It's offers a range of tobacco-free nicotine pouch products.",
        logo: "/brand-logo/its-logo.webp",
        website: "/",
        foundedYear: 2000,
        headquarters: "Unknown",
        content: ""
    },
    klint: {
        slug: "klint",
        name: "Klint",
        description: "Klint Nicotine Pouches are manufactured by the Swedish company Habit Factory, offering a variety of flavors and strengths in a tobacco-free format.",
        logo: "/brand-logo/klint-logo.png",
        website: "https://klint-allwhite.com/",
        foundedYear: 2018,
        headquarters: "Stockholm, Sweden",
        content: ""
    },
    neafs: {
        slug: "neafs",
        name: "NEAFS",
        description: "NEAFS is an innovative brand providing tobacco-free alternatives to cigarettes, primarily known for their heat-not-burn products and nicotine pouches. They focus on offering a variety of flavors and a safer experience compared to traditional tobacco products.",
        logo: "/brand-logo/neafs-logo.png",
        website: "https://neafs.com/",
        foundedYear: 2015,
        headquarters: "London, UK",
        content: ""
    },
    siberia: {
        slug: "siberia",
        name: "Siberia",
        description: "Siberia is known for its high nicotine strength and unique flavors, particularly mint. It offers a range of nicotine pouches that are popular among experienced users.",
        logo: "/brand-logo/siberia-logo.webp",
        website: "https://swedishsmokeless.com/",
        foundedYear: 2004,
        headquarters: "Enköping, Sweden",
        content: ""
    },
    vid: {
        slug: "vid",
        name: "VID",
        description: "VID is a brand of nicotine pouches produced by Kurbits Snus, offering a variety of flavors and strengths.",
        logo: "/brand-logo/vid-logo.webp",
        website: "https://kurbitssnus.com/",
        foundedYear: 2020,
        headquarters: "Sweden",
        content: ""
    },
    ubbs: {
        slug: "ubbs",
        name: "ÜBBS",
        description: "ÜBBS nicotine pouches are a tobacco-free alternative available in a range of flavours and strengths, including 6mg, 11mg, and 14mg. They are designed for a quick and easy nicotine hit and are manufactured to pharmaceutical standards.",
        logo: "/brand-logo/ubbs-logo.webp",
        website: "https://ubbspouches.com/",
        foundedYear: 2022,
        headquarters: "Unknown",
        content: ""
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