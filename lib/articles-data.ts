export type Article = {
    slug: string;
    category: string;
    title: string;
    description: string;
    content: string;
    publishedTime: string;
    modifiedTime?: string;
    author: {
      name: string;
      url: string;
      image: string;
    };
    heroImage: string;
  };
  
  type CategoryData = {
    title: string;
    articles: {
      [slug: string]: Article;
    };
  };
  
  export const categories: Record<string, CategoryData> = {
    beginners: {
      title: "Beginner's Guides",
      articles: {
        "getting-started": {
          slug: "getting-started",
          category: "beginners",
          title: "Getting Started with Nicotine Pouches",
          description: "A comprehensive guide for beginners starting their journey with nicotine pouches.",
          content: `
  # Getting Started with Nicotine Pouches: A Beginner’s Guide for 2025

Nicotine pouches have rapidly become a popular alternative for those looking to enjoy nicotine without the harmful effects of smoking. This comprehensive guide will walk you through what nicotine pouches are, how they work, how to choose the right one for you, and the essential safety tips you need to know as a beginner.

## What Are Nicotine Pouches?

Nicotine pouches are small, discreet sachets that deliver nicotine without using tobacco. They are completely smoke-free and spit-free, making them an attractive option for users who want a clean and convenient nicotine experience. When placed between the gum and upper lip, the pouch releases nicotine gradually, allowing for a controlled intake that can help smokers transition away from traditional cigarettes.

## How Do Nicotine Pouches Work?

Once you place a nicotine pouch under your upper lip, your saliva activates the contents of the pouch. This activation releases nicotine along with flavoring agents, which are absorbed directly through the oral mucosa. The process provides a steady and consistent nicotine delivery without the need to smoke or vape, offering a modern, odorless alternative to traditional tobacco products.

## Choosing the Right Nicotine Pouch for Beginners

For those new to nicotine pouches, it’s important to start with options that are gentle on your system. Look for pouches with lower nicotine strengths (typically 2-4mg) and milder flavors like mint or citrus. These products help you acclimate to nicotine gradually. As you become more comfortable, you may explore higher strengths or different flavor profiles that better suit your taste and tolerance.

## Safety Guidelines

While nicotine pouches are a cleaner alternative to cigarettes, they still contain nicotine—a highly addictive substance. Follow these safety tips to ensure a responsible and enjoyable experience:

- **Limit Duration:** Keep each pouch in your mouth for 15–60 minutes as directed by the product guidelines.
- **Start Low:** Begin with lower nicotine strengths to gauge your reaction.
- **Avoid Overuse:** Stick to recommended usage levels to prevent nicotine overload.
- **Consult a Professional:** If you have any health concerns or preexisting conditions, consult your healthcare provider before using nicotine pouches.
- **Proper Storage:** Store your pouches in a cool, dry place and keep them out of reach of children.

<CTABox 
  title="Download Our Comprehensive Safety Guide"
  description="Access our detailed PDF safety guide for beginners and learn how to use nicotine pouches responsibly."
  buttonText="Download Now" 
/>

## Frequently Asked Questions

<FAQSection faqs={[
  {
    question: "How long should I keep a pouch in my mouth?",
    answer: "It’s recommended to use a nicotine pouch for 15–60 minutes per session, depending on your preference and the specific product instructions."
  },
  {
    question: "Can I use nicotine pouches if I'm not a smoker?",
    answer: "Nicotine pouches are designed primarily for adult smokers looking for a less harmful alternative. Non-smokers should avoid starting nicotine products due to the risk of addiction."
  },
  {
    question: "Are nicotine pouches completely safe?",
    answer: "While they are a safer alternative to smoking, nicotine pouches still deliver nicotine, which is addictive. It’s important to use them responsibly and follow all safety guidelines."
  }
]} />

## Conclusion

Nicotine pouches offer a modern, smoke-free solution for adults seeking a healthier way to enjoy nicotine. By starting with low-strength, mild-flavored options and following essential safety guidelines, beginners can make a smooth transition toward a cleaner nicotine experience. Embrace the future of nicotine consumption and take your first step toward a smoke-free lifestyle today!

*For more updates on nicotine pouch trends and tips for responsible use, be sure to subscribe to our mailing list and stay informed about the latest in 2025.*
          `,
          publishedTime: "2024-01-15T10:00:00Z",
          modifiedTime: "2025-02-04T10:00:00Z",
          author: {
            name: "PouchVolt",
            url: "/",
            image: "/pouchvolt-cropped-cropped.svg"
          },
          heroImage: "/article-images/beginner-jumping.webp",
        }
      }
    },
    articles: {
        title: "Articles",
        articles: {
          "nicotine-pouch-trends": {
            slug: "nicotine-pouch-trends",
            category: "articles",
            title: "The Rise of Nicotine Pouches: Market Trends, Demographics, and Future Predictions",
            description: "A comprehensive guide for beginners starting their journey with nicotine pouches.",
            content: `
    # The Rise of Nicotine Pouches: Market Trends, Demographics, and Future Predictions  

In recent years, nicotine pouches have surged from obscurity to become one of the fastest-growing segments in the nicotine industry. Touted as a discreet, smoke-free alternative to traditional tobacco products, these small pouches are reshaping consumer habits, regulatory debates, and market dynamics worldwide. Let’s unpack the forces driving this revolution and explore what lies ahead.  

---

## The Nicotine Pouch Explosion: By the Numbers

The global nicotine pouch market is on a meteoric rise. Valued at **$3.95 billion in 2024**, it’s projected to grow at a staggering **34.4% CAGR** through 2030, reaching **$22.84 billion** [according to Grand View Research’s 2024 industry report](https://www.grandviewresearch.com/industry-analysis/nicotine-pouches-market-report). In the U.S. alone, sales skyrocketed **300x** between 2016 and 2021, fueled by brands like **ZYN** (Swedish Match) and **Velo** (British American Tobacco) [as detailed in a Rutgers University study](https://nicotine-pouches.org/nicotine-pouches-industry-research-report-2024/).  

**Key drivers of demand**:  
- **Health-conscious shifts**: 30% of users switch from traditional tobacco, citing reduced health risks [per a 2022 Rutgers survey](https://nicotine-pouches.org/nicotine-pouches-industry-research-report-2024/).  
- **Youth appeal**: 38% of 18–24-year-olds have tried nicotine pouches, drawn by flavors like mint and berry [as noted in Euromonitor’s 2024 consumer trends analysis](https://www.gminsights.com/industry-analysis/nicotine-pouches-market).  
- **Regulatory tailwinds**: Strict smoking bans push users toward smoke-free alternatives [highlighted in the WHO’s 2023 harm reduction report](https://www.who.int/publications/i/item/9789241516197).  

---

## Key Trends Reshaping the Industry

### 1. Flavor Innovation: A Gateway for New Users 
Flavored pouches dominate **89.5% of the market**, masking nicotine’s bitterness and attracting younger demographics. Mint, citrus, and tropical blends are top sellers, while brands like **ZYN** and **Nordic Spirit** experiment with exotic options like “Arctic Freeze” and “Sour Red Berry” [as detailed in Nielsen’s 2024 retail data](https://www.gminsights.com/industry-analysis/nicotine-pouches-market). Unflavored variants are rising too, appealing to minimalists and those seeking authentic tobacco-like experiences [per Tobacco Control Journal](https://www.tobaccocontrol.bmj.com).  

### 2. Strength Segmentation: Catering to Every Craving  
Nicotine strengths range from **1 mg to 15 mg per pouch**, with **4–6 mg** (“strong”) pouches leading sales (44.1% share) [as reported in Grand View Research’s segmentation analysis](https://www.grandviewresearch.com/industry-analysis/nicotine-pouches-market-report). These mimic cigarette nicotine levels, aiding smoking cessation, while lower strengths (3 mg) attract casual users.  

### 3. Sustainability and Synthetic Nicotine
Eco-conscious packaging and synthetic nicotine—seen as “safer” due to its tobacco-free origin—are gaining traction. Brands like **NIIN** and **Rush** prioritize 100% synthetic options, projected to grow at **53.6% CAGR** through 2030.  

---

## Demographics: Who’s Using Nicotine Pouches?
- **Age**: 67% of users are men aged **25–34**, though Gen Z adoption is rising fast [as per Euromonitor’s 2024 demographic breakdown](https://www.gminsights.com/industry-analysis/nicotine-pouches-market).  
- **Geography**:  
  - **North America** leads (79.8% market share), driven by U.S. demand [as outlined in Grand View Research’s regional analysis](https://www.grandviewresearch.com/industry-analysis/nicotine-pouches-market-report).  
  - **Europe** follows, with Sweden’s **1.3 million users** (25% women) embracing pouches as culturally accepted alternatives [per Swedish Match’s 2023 consumer report](https://nicotine-pouches.org/nicotine-pouches-industry-research-report-2024/).  
  - **Asia-Pacific** is the fastest-growing region (46.2% CAGR), with brands like **SHIRO** in Japan and **Lyft** in China gaining ground.  

---

## Future Predictions: Where Is the Market Headed? 

### 1. Regulatory Crossroads  
While nicotine pouches avoid combustion-related harms, debates about youth addiction and long-term health effects persist. The [WHO warns of nicotine dependency risks](https://www.who.int/publications/i/item/9789241516197), even as harm-reduction advocates push for balanced regulations. For example, [Kenya banned **Lyft** pouches in 2020 due to regulatory disputes](https://nation.africa/kenya/blogs-opinion/blogs/balancing-between-harm-reduction-prohibition-of-nicotine-pouches-4911664).  

### 2. Digital and Direct-to-Consumer Growth  
Online sales are booming with over 17% of U.S. smokers express interest in trying pouches, signaling untapped potential.  

### 3. Medical Partnerships and Cessation Tools  
Collaborations with healthcare providers could position pouches as smoking cessation aids.

---

## Challenges Ahead 
- **Youth targeting concerns**: 82.9% of U.S. middle/high school users opt for flavored pouches, sparking calls for stricter age controls.  
- **Regulatory fragmentation**: Laws vary wildly—e.g., Kenya banned **Lyft** pouches in 2020, while Scandinavia embraces them [as detailed in the *Regulation of Nicotine Pouches Database 2024*](https://www.globenewswire.com/news-release/2024/10/11/2961840/0/en/Regulation-of-Nicotine-Pouches-Database-2024-Global-Tobacco-free-Pouches-Database-and-U-S-Nicotine-Pouch-Bills-Laws-and-Proposals-Database.html).  
- **Long-term health data gaps**: Limited research on pouch-specific risks fuels skepticism.  

---

## Conclusion: A Market Poised for Evolution 

Nicotine pouches are more than a trend—they’re a paradigm shift in nicotine consumption. With innovation in flavors, sustainability, and nicotine delivery, the industry is poised to redefine harm reduction. However, balancing growth with responsibility—through education, ethical marketing, and rigorous research—will determine its long-term success.  

As Swedish Match CEO Lars Lundgren aptly noted: *“The future of nicotine isn’t in the smoke; it’s in the choices we make today.”*   
            `,
            publishedTime: "2025-02-04T10:00:00Z",
            modifiedTime: "2025-02-04T10:00:00Z",
            author: {
              name: "PouchVolt",
              url: "/",
              image: "/pouchvolt-cropped-cropped.svg"
            },
            heroImage: "/article-images/man-writing-statistic.webp",
          },
          "top-brands-2025": {
          slug: "top-brands-2025",
          category: "articles",
          title: "Top Nicotine Pouch Brands in 2025",
          description: "Comprehensive review of the best nicotine pouch brands available in 2025.",
          content: `# The Ultimate Guide to Top Nicotine Pouch Brands in 2025

In 2025 the nicotine pouch market is thriving as consumers look for cleaner, smoke‐free alternatives to traditional tobacco products. This guide reviews the top nicotine pouch brands dominating the market today, taking into account flavor variety, nicotine strength, packaging, price, and overall user experience. Whether you’re a seasoned user or just exploring alternatives, our expert review will help you choose the best brand for your lifestyle.

## Top Picks

Below is our side‐by‐side comparison of the leading nicotine pouch brands. Our selection is based on quality, innovation, and user satisfaction:

<ProductComparison products={[
  {
    name: "ZYN",
    strength: "3mg, 6mg, 9mg",
    flavors: ["Cool Mint", "Cinnamon", "Wintergreen", "Citrus", "Smooth"],
    price: "$5.49",
    rating: 4.8,
    pros: [
      "Industry leader with unmatched quality",
      "Wide flavor selection",
      "Smooth nicotine delivery",
      "Discreet and consistent"
    ],
    cons: [
      "Premium price point",
      "Some users find lower strengths too mild"
    ]
  },
  {
    name: "On! Nicotine Pouches",
    strength: "2mg, 4mg, 8mg",
    flavors: ["Mint", "Berry", "Cinnamon", "Original"],
    price: "$4.79",
    rating: 4.6,
    pros: [
      "Clear labeling by strength",
      "Great for beginners and experts alike",
      "Compact, pocket-friendly design",
      "Competitive pricing"
    ],
    cons: [
      "Flavor intensity can vary",
      "Limited availability in some regions"
    ]
  },
  {
    name: "VELO Nicotine Pouches",
    strength: "2mg, 4mg, 7mg",
    flavors: ["Peppermint", "Citrus", "Dragon Fruit", "Ice Mint"],
    price: "$5.99",
    rating: 4.7,
    pros: [
      "Innovative flavor profiles",
      "Long-lasting and consistent release",
      "Modern, sleek packaging",
      "Multiple strength options"
    ],
    cons: [
      "Premium pricing",
      "Some experimental flavors may not suit all palates"
    ]
  },
  {
    name: "Rogue Nicotine Pouches",
    strength: "3mg, 6mg, 9mg",
    flavors: ["Mint", "Mango", "Honey Lemon", "Wintergreen"],
    price: "$5.29",
    rating: 4.5,
    pros: [
      "Bold, distinctive flavors",
      "Strong nicotine options for experienced users",
      "Competitive value",
      "Clean ingredient profile"
    ],
    cons: [
      "Fewer flavor variants",
      "May be too intense for some newcomers"
    ]
  },
  {
    name: "Excel Nicotine Pouches",
    strength: "4mg, 6mg, 8mg",
    flavors: ["Classic Mint", "Crisp Citrus"],
    price: "$5.99",
    rating: 4.4,
    pros: [
      "Unique branding tailored for productivity-focused users",
      "Minimalist and stylish packaging",
      "Ideal for high-tolerance users"
    ],
    cons: [
      "Newer to the market with limited flavor options",
      "Niche marketing may not appeal to all users"
    ]
  }
]} />

## What to Consider When Choosing Nicotine Pouches

Choosing the right nicotine pouch is about more than just flavor—it’s about finding a product that suits your lifestyle and tolerance. Here are key factors to keep in mind:

### Nicotine Strength  
Nicotine pouches come in various strengths, typically ranging from 2mg to 9mg per pouch. Beginners are advised to start with lower strengths, while seasoned users might prefer the extra kick offered by higher strengths. Newer brands like Excel also experiment with unique levels for a more tailored experience.  
:contentReference[oaicite:0]{index=0}

### Flavor Variety  
From classic mint and wintergreen to bold fruit and spicy options, the flavor spectrum has never been wider. Look for brands that not only offer a variety but also deliver a balanced release of nicotine and flavor throughout the pouch’s use. This ensures a satisfying experience that lasts.  
:contentReference[oaicite:1]{index=1}

### Price and Value  
While premium brands like ZYN and VELO tend to carry higher price tags, they often justify the cost with superior quality and consistent performance. For budget-conscious users, On! offers excellent value without compromising on quality. Compare pricing based on pouch count and overall nicotine content to get the best bang for your buck.

### Discretion and Convenience  
Modern nicotine pouches are designed to be small, discreet, and portable. Whether you’re at work or on the go, look for products that come in sleek, durable packaging with user-friendly designs. Brands like Rogue and Excel excel in this regard with their minimalist packaging aimed at busy professionals.

<CTABox 
  title="Discover Your Perfect Nicotine Pouch" 
  description="Use our advanced comparison tool to find the best deals on top nicotine pouch brands in 2025." 
  buttonText="Compare Prices Now" 
  buttonLink="/compare-prices" 
/>

## Safety and Usage Tips

Although nicotine pouches provide a smoke-free alternative to cigarettes, they remain nicotine products and should be used responsibly:

- **Follow Usage Guidelines:** Always adhere to the recommended duration and number of pouches per day.
- **Start Low:** Beginners should start with lower nicotine strengths to avoid adverse effects.
- **Consult a Professional:** If you have concerns about nicotine intake or preexisting conditions, seek advice from a healthcare professional.
- **Store Properly:** Keep your pouches in a cool, dry place and out of reach of children and pets.
- **Be Mindful of Tolerance:** Gradually adjust your usage based on your nicotine tolerance to prevent overuse.

## Conclusion

The nicotine pouch market in 2025 is more dynamic and diverse than ever. With industry leaders like ZYN, On!, VELO, and Rogue continuing to set high standards, along with innovative newcomers such as Excel targeting niche markets, consumers have an array of options tailored to different tastes and lifestyles. Whether you prioritize flavor, strength, discreet packaging, or competitive pricing, there’s a brand that fits your needs. Explore our top picks and make an informed decision to enjoy a cleaner, more modern nicotine experience.

Embrace the future of nicotine delivery and join the millions who are switching to a smoke-free lifestyle today!`,
          publishedTime: "2024-01-16T10:00:00Z",
          modifiedTime: "2025-02-04T10:00:00Z",
          author: {
            name: "PouchVolt",
            url: "/",
            image: "/pouchvolt-cropped-cropped.svg"
          },
          heroImage: "/article-images/winning-podium.webp",
        }
        },
        
      },
    health: {
      title: "Health & Safety",
      articles: {
        "nicotine-effects": {
          slug: "nicotine-effects",
          category: "health",
          title: "Understanding Nicotine's Effects on Your Body",
          description: "A detailed exploration of how nicotine affects your body and what you should know about nicotine consumption.",
          content: `
  # Understanding Nicotine's Effects on Your Body

Nicotine is a powerful stimulant that affects multiple systems in your body. Whether delivered via traditional tobacco products or modern alternatives like nicotine pouches, understanding its effects is essential for making informed decisions about your health. In this article, we explore both the short-term and long-term effects of nicotine, compare different nicotine delivery methods, address common health questions, and offer practical safety guidelines.

## Short-term Effects

When you consume nicotine, its effects are felt almost immediately. These short-term effects include:

- **Increased Heart Rate:** Nicotine stimulates the adrenal glands to release adrenaline, causing your heart to beat faster.
- **Elevated Blood Pressure:** The release of adrenaline also causes blood vessels to constrict, leading to a temporary rise in blood pressure.
- **Enhanced Focus and Alertness:** Nicotine boosts the release of neurotransmitters such as dopamine and norepinephrine, which can improve concentration and cognitive function.
- **Mild Euphoria:** The surge in dopamine levels can create a sense of pleasure or mild euphoria.
- **Reduced Appetite:** Nicotine suppresses hunger signals, which is why many users experience decreased appetite.
- **Improved Cognitive Performance:** Short-term enhancements in memory and attention have been observed in some individuals.

These effects, though beneficial in moderation, can vary widely based on the dosage, method of administration, and individual tolerance.  
:contentReference[oaicite:0]{index=0}

## Long-term Effects

While the immediate effects of nicotine may seem appealing, long-term use can lead to significant health risks:

- **Addiction:** Nicotine is highly addictive, leading to dependence and withdrawal symptoms when usage is reduced or stopped.
- **Cardiovascular Issues:** Chronic nicotine consumption can contribute to sustained high blood pressure and an increased risk of heart disease.
- **Altered Brain Function:** Prolonged nicotine exposure may change brain chemistry, affecting mood, memory, and overall cognitive function.
- **Oral Health Problems:** Continuous use of nicotine pouches or other oral products can result in gum irritation, recession, and other dental issues.
- **Metabolic Changes:** Nicotine may impact metabolism and insulin sensitivity, potentially contributing to weight management challenges and a higher risk of developing type 2 diabetes.

Understanding these long-term effects is crucial for users who may consider switching to or starting nicotine products.

## Health Comparisons

Different nicotine delivery methods can have varying health implications. Below is a comparison that highlights some of the key differences between traditional tobacco and modern nicotine pouches:

<ProductComparison products={[
  {
    name: "Traditional Tobacco",
    strength: "Variable",
    flavors: ["Tobacco"],
    price: "Varies",
    rating: 2,
    pros: ["Familiar delivery method"],
    cons: ["Contains harmful tobacco", "Produces smoke", "Social stigma", "Higher risk of respiratory diseases"]
  },
  {
    name: "Nicotine Pouches",
    strength: "Controlled",
    flavors: ["Multiple options"],
    price: "Moderate",
    rating: 4,
    pros: ["Smoke-free", "Tobacco-free", "Discreet use", "Fewer harmful chemicals"],
    cons: ["Still contains nicotine", "May cause gum irritation", "Potential for addiction"]
  }
]} />

## Common Health Questions

<FAQSection faqs={[
  {
    question: "Is nicotine the same as tobacco?",
    answer: "No. Nicotine is the addictive compound found in tobacco, but many of the harmful effects of tobacco come from the other toxic substances produced when tobacco is burned."
  },
  {
    question: "Can nicotine pouches help in quitting smoking?",
    answer: "Nicotine pouches are used by some as a harm reduction tool because they deliver nicotine without combustion products. However, they should only be used as part of a structured cessation plan under professional guidance."
  },
  {
    question: "Are there any health benefits to nicotine?",
    answer: "Some research suggests nicotine may enhance focus and cognitive performance in the short term, but these benefits must be weighed against the risks of addiction and long-term health effects."
  },
  {
    question: "How does nicotine affect oral health?",
    answer: "While nicotine pouches avoid the smoke-related risks of tobacco, they can still irritate the gums and contribute to gum recession if used excessively."
  },
  {
    question: "What are the effects of long-term nicotine use?",
    answer: "Long-term use can lead to addiction, cardiovascular problems, potential alterations in brain function, and metabolic changes that increase health risks."
  }
]} />

## Safety Considerations

Using nicotine products responsibly is key to minimizing potential health risks. Keep these guidelines in mind:

1. **Nicotine is Addictive:** Understand that regular use can lead to dependency.
2. **Individual Responses Vary:** People respond differently to nicotine; what may be a moderate dose for one could be excessive for another.
3. **Consult Healthcare Providers:** Always seek professional advice before starting or changing your nicotine usage, especially if you have underlying health conditions.
4. **Start with Lower Strengths:** Beginners should opt for lower nicotine concentrations to gauge tolerance and avoid adverse reactions.
5. **Monitor Your Usage:** Keep track of your consumption to ensure it remains within safe limits.

## When to Seek Help

It’s important to recognize when your body is signaling that you need to stop using nicotine products. Seek medical advice if you experience:

- **Severe Headaches:** Persistent or intense headaches might indicate an adverse reaction.
- **Irregular Heartbeat:** Noticeable changes in your heart rhythm should be evaluated by a healthcare professional.
- **Persistent Nausea:** Ongoing nausea may be a sign of nicotine overdose or sensitivity.
- **Gum Irritation or Damage:** Continuous discomfort or noticeable damage to your gums warrants a dental consultation.
- **Symptoms of Overdose:** Dizziness, confusion, or rapid breathing are warning signs that require immediate attention.

## How Nicotine Interacts with Your Body

Nicotine primarily affects your body by binding to nicotinic acetylcholine receptors in the brain and peripheral nervous system. This binding triggers the release of various neurotransmitters—most notably dopamine, which is involved in reward and pleasure pathways. Over time, repeated exposure to nicotine can lead to changes in receptor density and function, contributing to tolerance and dependence. These neurochemical changes underline both the short-term stimulating effects and the long-term challenges associated with nicotine addiction.

## Lifestyle Considerations and Alternatives

For many users, nicotine serves as a quick fix for stress or a tool for enhancing focus. However, it's important to consider healthy lifestyle alternatives:
- **Stress Management:** Techniques such as exercise, meditation, or therapy can provide long-term benefits without the risks associated with nicotine.
- **Diet and Hydration:** Maintaining a balanced diet and staying hydrated support overall well-being and can reduce cravings.
- **Exploring Non-Nicotine Alternatives:** Some users might consider other mild stimulants, like caffeine or herbal supplements, to manage energy levels without developing an addiction.

## Final Thoughts

Nicotine offers a complex mix of short-term benefits—such as increased alertness and mild euphoria—and significant long-term risks, including addiction and cardiovascular strain. By understanding how nicotine interacts with your body and comparing different delivery methods, you can make more informed decisions about your usage. Whether you choose to stick with traditional tobacco products or opt for modern nicotine pouches, remember that moderation and informed choices are key.

Empower yourself with knowledge, prioritize your health, and always seek professional advice when needed. Staying informed is your first step toward a healthier lifestyle in a rapidly evolving nicotine market.
          `,
          publishedTime: "2024-01-17T10:00:00Z",
          modifiedTime: "2025-02-04T10:00:00Z",
          author: {
            name: "PouchVolt",
            url: "/",
            image: "/pouchvolt-cropped-cropped.svg"
          },
          heroImage: "/article-images/doctor-typing.webp",
        }
      }
    }
  };