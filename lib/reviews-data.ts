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
        pros: ["A wide range of flavors and strengths to suit everyone.", "Super discreet—no one even notices you’re using one.", "High-quality ingredients and consistent manufacturing standards."],
        cons: ["While the flavors are great, the range isn’t as expansive as some competitors.", "The can design could use a little more flair—it’s functional but not eye-catching.", "Prices have crept up recently, which might put off some users."],
        headquarters: "Stockholm, Sweden",
        content: `
        Let me introduce you to **Nordic Spirit**, one of the most well-loved tobacco-free nicotine pouch brands in the UK. They’ve been around since 2019, and let me tell you, they’ve made quite the name for themselves. Inspired by Sweden’s long-standing tradition of snus, Nordic Spirit offers a sleek, smoke-free, and discreet alternative to traditional tobacco products.  

## Product Overview  

Here’s the lowdown on what they offer:  
- **Flavors:** You’ve got a solid lineup of 10 options, from classics like mint and spearmint to adventurous picks like bergamot wildberry, elderflower, and mocha. My personal favorite? Watermelon—it’s like summer in a pouch!  
- **Nicotine Strengths:** Whether you’re a newbie or a seasoned pro, they’ve got you covered. Choose from Mini (3mg), Regular (5.5mg), Strong (8.3mg), or Extra Strong (10.3mg).  
- **Pouch Sizes:** Available in two sizes, so you can pick what suits your lifestyle best.  
- **Quantity:** Each can comes with 20 pouches—perfect for on-the-go use.  

## The PouchVolt Experience

Let’s talk about how these pouches deliver in real life.  

- **Flavor:** The flavors are spot on. The mint varieties, in particular, are clean and refreshing without being overpowering. They’ve really nailed the balance.  
- **Nicotine Delivery:** The steady release of nicotine is a game-changer. It lasts up to 30 minutes, which is just the right amount of time to feel satisfied without overdoing it. However, if you prefer more of a harsh release, these may not be for you.  
- **Convenience:** These little guys are a lifesaver. Discreet and smoke-free, I can use them literally anywhere—on a coffee break, during a meeting, or even on the train. 

## Our Ratings  

Here’s how I’d rate Nordic Spirit:  
- **Taste:** 4.5/5  
- **Flavor Range:** 3.5/5  
- **Nicotine Strength Options:** 4/5  
- **Design:** 3.5/5  
- **Overall:** 4/5  

## Final Thoughts  

If you’re on the hunt for a tobacco-free nicotine pouch, **Nordic Spirit** is a fantastic choice. Sure, the flavor range isn’t the biggest, and the price might sting a little, but the quality and reliability of these pouches more than make up for it. Whether you’re trying to quit smoking or just looking for a cleaner nicotine option, Nordic Spirit ticks most of the boxes. Personally, I’m hooked on their minty freshness and discreet design.  

Give them a try—I’d love to hear what you think!  
        `
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
        content: `# Helwit Nicotine Pouches: A Personal Review

When I first came across **Helwit**, a Swedish brand of nicotine pouches, I wasn’t sure what to expect. But after trying a variety of their products, I can confidently say they’ve made a strong impression on me. Their focus on flavor, quality, and sustainability really stands out, making them a noteworthy option in the nicotine pouch market.

## First Impressions

Helwit originates from Sweden's Småland region, and you can tell there’s a lot of pride and craftsmanship behind their work. They offer a range of **tobacco-free nicotine pouches** that are perfect for those looking for a discreet and enjoyable experience. What really caught my attention, though, was their wide selection of flavors and the thoughtfulness of their design.

---

## Flavor Variety

Helwit’s lineup of flavors is nothing short of impressive. Whether you’re into the classics like **Mint** or want to experiment with something unique like **Violet** or **Mocha**, there’s something for everyone. Here’s a quick peek at some of their options:

- Mint
- Orange
- Violet
- Mocha
- Blueberry
- Cherry
- Cola
- Banana
- Salmiak

Personally, I found the **Violet** flavor to be a standout. It’s not something I’d usually go for, but it was a surprisingly pleasant experience—subtle, floral, and just different enough to keep me coming back for more.

---

## Nicotine Strength and Fit

Helwit caters to a range of nicotine preferences with their offerings. They have Regular (7mg/g), Strong (9mg/g), and Extra Strong (12mg/g) options. For someone like me, who prefers a milder experience, the Regular strength was just right. It delivers a gentle buzz without being overwhelming, making it a great choice for beginners or those easing off stronger products.

The pouches themselves are slim and lightweight, weighing just 0.42 grams each. They sit comfortably under your lip and are barely noticeable—perfect for when you’re out and about. Plus, the soft material means no irritation, which is a big plus in my book.

---

## Taste and Longevity

One of the things I appreciated most about Helwit was their attention to flavor quality. They work with some of Europe’s top flavor experts, and it really shows. Each pouch is juicy, flavorful, and delivers a smooth nicotine release, thanks to the premium nicotine they use.

On average, I found that the flavors lasted about 30-40 minutes, which is comparable to other brands. In some cases, they even went longer without losing their punch. For someone who values both flavor and longevity, Helwit checks all the boxes.

---

## Sustainability Matters

Helwit doesn’t just focus on their product; they care about how it’s made, too. Their production facility in Gransholm, Sweden, is powered by a nearby hydropower plant, which is pretty impressive. On top of that, their cans are made of recyclable plastic, so they’re doing their part to minimize environmental impact. It’s always nice to support a brand that aligns with your values.

---

## Final Thoughts

If you’re looking for nicotine pouches that deliver on flavor, comfort, and sustainability, Helwit is a solid choice. While the nicotine strengths might feel a bit light for heavier users, they’re ideal for beginners or anyone trying to scale back their intake. 

For me, Helwit’s unique flavors, smooth delivery, and environmentally conscious approach make them a brand worth sticking with. Whether you’re a seasoned pouch user or just starting out, I’d definitely recommend giving Helwit a try—you might just find your new favorite.
`
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
    },
    rogue: {
      slug: "rogue",
      name: "Rogue",
      description: "Known for its tobacco-free nicotine pouches that are spit-free and stain-free, offering various nicotine levels.",
      logo: "/brand-logo/rogue-logo.jpg",
      website: "https://www.roguenicotine.com",
      foundedYear: 2018,
      headquarters: "USA",
      content: "Rogue offers tobacco-free nicotine pouches with various nicotine levels."
      },
      juice_head: {
      slug: "juice-head",
      name: "Juice Head",
      description: "Known for its premium quality and unique, satisfying flavors, Juice Head offers a wide selection of nicotine pouch products.",
      logo: "/brand-logo/juice-head-logo.webp",
      website: "https://juicehead.co",
      foundedYear: 2014,
      headquarters: "Long Beach, California, USA",
      content: "Juice Head provides premium quality nicotine products with unique flavors."
      },
      fre: {
      slug: "fre",
      name: "FRE",
      description: "Known for its strong and extra strong synthetic nicotine pouches, FRE offers a tobacco-free alternative for adults transitioning from traditional tobacco products.",
      logo: "/brand-logo/fre-logo.webp",
      website: "https://frepouch.com",
      foundedYear: 2020,
      headquarters: "Louisville, Kentucky, United States",
      content: "FRE specializes in strong synthetic nicotine pouches as a tobacco-free alternative."
      },
      sesh: {
      slug: "sesh",
      name: "Sesh",
      description: "Known for its innovative nicotine products, particularly the Sesh+ nicotine pouches.",
      logo: "/brand-logo/sesh-logo.png",
      website: "https://seshproducts.com",
      foundedYear: 2020,
      headquarters: "Vancouver, Canada",
      content: "Sesh offers innovative nicotine products, focusing on Sesh+ nicotine pouches."
      },
      lucy: {
      slug: "lucy",
      name: "Lucy",
      description: "Committed to bringing innovative nicotine products to the market, focusing on cleaner formulations of nicotine gum.",
      logo: "/brand-logo/lucy-logo.jpg",
      website: "https://lucy.co",
      foundedYear: 2016,
      headquarters: "Los Angeles, California, USA",
      content: "Lucy focuses on innovative nicotine products, particularly cleaner nicotine gum formulations."
      },
      zone: {
      slug: "zone",
      name: "Zone",
      description: "Known for its various flavors and nicotine strengths, Zone offers tobacco-free nicotine pouches.",
      logo: "/brand-logo/zone-logo.webp",
      website: "https://www.zonepouches.com",
      foundedYear: 2002,
      headquarters: "London, England",
      content: "Zone provides tobacco-free nicotine pouches in various flavors and strengths."
      },
      grizzly: {
      slug: "grizzly",
      name: "Grizzly",
      description: "An American brand known for dipping tobacco in its variety of flavors and products although now sells nicotine pouches under the same brand.",
      logo: "/brand-logo/grizzly-logo.webp",
      website: "https://www.mygrizzly.com",
      foundedYear: 2001,
      headquarters: "Memphis, Tennessee, United States",
      content: "Grizzly is an American dipping tobacco brand offering various flavors and nicotine products."
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
      name: "PouchVolt",
      avatar: "/logo.png"
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
      name: "PouchVolt",
      avatar: "/logo.png"
    }
  }
};