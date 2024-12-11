import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { generateArticleSchema } from "@/lib/schema";
import { ProductComparison } from "@/components/mdx/product-comparison";
import { FAQSection } from "@/components/mdx/faq-section";
import { CTABox } from "@/components/mdx/cta-box";

// This would typically come from your CMS or data source
const articles = {
  "beginners": {
    "getting-started": {
      slug: "getting-started",
      category: "beginners",
      title: "Getting Started with Nicotine Pouches",
      description: "A comprehensive guide for beginners starting their journey with nicotine pouches.",
      content: `
# Getting Started with Nicotine Pouches

Welcome to our comprehensive guide for beginners. This guide will help you understand everything you need to know about nicotine pouches.

## What Are Nicotine Pouches?

Nicotine pouches are smoke-free, tobacco-free products that provide nicotine in a discreet way.

<ProductComparison products={[
  {
    name: "Brand X Light",
    strength: "4mg",
    flavors: ["Mint", "Citrus"],
    price: "$4.99",
    rating: 4,
    pros: ["Great for beginners", "Mild strength"],
    cons: ["Limited flavors"]
  },
  {
    name: "Brand Y Medium",
    strength: "8mg",
    flavors: ["Mint", "Berry", "Coffee"],
    price: "$5.99",
    rating: 5,
    pros: ["Good flavor variety", "Perfect strength"],
    cons: ["Slightly pricey"]
  }
]} />

## Safety Guidelines

Always follow these important safety guidelines when using nicotine pouches.

<CTABox 
  title="Download Our Safety Guide"
  description="Get our comprehensive safety guide in PDF format"
  buttonText="Download Now"
  buttonLink="/downloads/safety-guide"
/>

## Common Questions

<FAQSection faqs={[
  {
    question: "How long should I keep a pouch in?",
    answer: "Typically 15-60 minutes, depending on your preference and the product strength."
  },
  {
    question: "Can I sleep with a nicotine pouch?",
    answer: "No, it's not recommended to sleep with a nicotine pouch as it can lead to excessive exposure."
  }
]} />
      `,
      publishedTime: "2024-01-15T10:00:00Z",
      modifiedTime: "2024-01-15T10:00:00Z",
      author: {
        name: "PouchVolt",
        url: "/",
        image: "/logo.png"
      },
      heroImage: "https://images.unsplash.com/photo-1682775399553-b2e250dc35f8?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  },
  "reviews": {
    "top-brands-2024": {
      "slug": "top-brands-2024",
      "category": "reviews",
      "title": "Top Nicotine Pouch Brands in 2024",
      "description": "Comprehensive review of the best nicotine pouch brands available in 2024.",
      "content": `# Top Nicotine Pouch Brands in 2024
    
    In recent years, nicotine pouches have become an increasingly popular alternative to traditional tobacco products. Our comprehensive review examines the top brands making waves in 2024, considering factors like flavor variety, nicotine strength, price, and overall user experience.
    
    ## Top Picks
    
    <ProductComparison products={[
      {
        name: "ZYN",
        strength: "3mg, 6mg, 9mg",
        flavors: ["Cool Mint", "Spearmint", "Wintergreen", "Citrus", "Cinnamon"],
        price: "$5.49",
        rating: 4.8,
        pros: [
          "Extensive flavor range",
          "Consistent quality",
          "Smooth nicotine delivery",
          "Discreet packaging"
        ],
        cons: [
          "Slightly higher price point",
          "Some flavors can be intense"
        ]
      },
      {
        name: "On! Nicotine Pouches",
        strength: "2mg, 4mg, 8mg",
        flavors: ["Wintergreen", "Cinnamon", "Mint", "Berry", "Coffee"],
        price: "$4.79",
        rating: 4.5,
        pros: [
          "Compact size",
          "Wide range of strengths",
          "Great for beginners and experienced users",
          "Affordable pricing"
        ],
        cons: [
          "Slightly less flavor intensity",
          "Limited international availability"
        ]
      },
      {
        name: "VELO Nicotine Pouches",
        strength: "2mg, 4mg, 7mg",
        flavors: ["Ice Mint", "Wintergreen", "Citrus", "Dragon Fruit"],
        price: "$5.99",
        rating: 4.6,
        pros: [
          "Innovative flavor profiles",
          "Smooth and consistent nicotine release",
          "Modern packaging",
          "Multiple strength options"
        ],
        cons: [
          "Premium pricing",
          "Some flavors may be hit or miss"
        ]
      },
      {
        name: "Rogue Nicotine Pouches",
        strength: "3mg, 6mg, 9mg",
        flavors: ["Wintergreen", "Mint", "Mango", "Honey Lemon"],
        price: "$5.29",
        rating: 4.4,
        pros: [
          "Bold flavor combinations",
          "Strong nicotine options",
          "Competitive pricing",
          "Clean ingredients"
        ],
        cons: [
          "Limited flavor selection",
          "Might be too strong for some users"
        ]
      }
    ]} />
    
    ## What to Consider When Choosing Nicotine Pouches
    
    ### Nicotine Strength
    Nicotine pouches come in various strengths, typically ranging from 2mg to 9mg. Beginners should start with lower strengths and gradually increase as needed.
    
    ### Flavor Variety
    The market offers an impressive range of flavors, from classic mint to more exotic options like dragon fruit and mango. Consider your taste preferences and willingness to experiment.
    
    ### Price and Value
    Prices range from $4.79 to $5.99 per can. While premium brands might cost more, they often provide better quality and more consistent experience.
    
    ### Discretion and Convenience
    Modern nicotine pouches are designed to be small, discreet, and easy to use, making them a convenient alternative to traditional nicotine products.
    
    <CTABox 
      title="Compare Prices and Find Your Perfect Pouch" 
      description="Use our comparison tool to find the best deals on top nicotine pouch brands" 
      buttonText="Compare Prices Now" 
      buttonLink="/compare-prices" 
    />
    
    ## Safety and Usage Tips
    - Always follow recommended usage guidelines
    - Start with lower nicotine strengths
    - Consult with a healthcare professional if you have concerns
    - Store pouches in a cool, dry place
    - Keep out of reach of children and pets
    
    ## Conclusion
    The nicotine pouch market continues to evolve, offering smokers and nicotine users more choices than ever. Whether you prioritize flavor, strength, or price, there's a brand to suit your needs.`,
      publishedTime: "2024-01-16T10:00:00Z",
      modifiedTime: "2024-01-16T10:00:00Z",
      author: {
        name: "PouchVolt",
        url: "/authors/jane-doe",
        image: "/logo.png"
      },
      heroImage: "https://images.unsplash.com/photo-1682777119396-382cff6b174b?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=630&fit=crop",
    }
  },
  "health": {
    "nicotine-effects": {
      slug: "nicotine-effects",
      category: "health",
      title: "Understanding Nicotine's Effects on Your Body",
      description: "A detailed exploration of how nicotine affects your body and what you should know about nicotine consumption.",
      content: `
# Understanding Nicotine's Effects on Your Body

Learn about how nicotine interacts with your body and what you should know before using nicotine products.

## Short-term Effects

Nicotine has several immediate effects on your body when consumed:

- Increased heart rate
- Elevated blood pressure
- Enhanced focus and alertness
- Mild euphoria
- Reduced appetite

## Health Comparisons

<ProductComparison products={[
  {
    name: "Traditional Tobacco",
    strength: "Variable",
    flavors: ["Tobacco"],
    price: "Varies",
    rating: 2,
    pros: ["Familiar delivery method"],
    cons: ["Contains harmful tobacco", "Produces smoke", "Social stigma"]
  },
  {
    name: "Nicotine Pouches",
    strength: "Controlled",
    flavors: ["Multiple options"],
    price: "Moderate",
    rating: 4,
    pros: ["Smoke-free", "No tobacco", "Discreet use"],
    cons: ["Still contains nicotine", "May cause gum irritation"]
  }
]} />

## Common Health Questions

<FAQSection faqs={[
  {
    question: "Is nicotine the same as tobacco?",
    answer: "No, nicotine is just one compound found in tobacco. While nicotine is addictive, many of the harmful effects of tobacco come from other compounds and the act of smoking."
  },
  {
    question: "Can nicotine pouches help quit smoking?",
    answer: "While some people use nicotine pouches as part of their smoking cessation journey, they should not be considered a smoking cessation product without consulting healthcare providers."
  },
  {
    question: "Are there any health benefits to nicotine?",
    answer: "Some studies suggest nicotine may have cognitive benefits, but more research is needed. Any potential benefits should be weighed against the risks of nicotine dependence."
  }
]} />

## Safety Considerations

Always remember:

1. Nicotine is addictive
2. Individual responses vary
3. Consult healthcare providers
4. Start with lower strengths
5. Monitor your usage

## When to Seek Help

If you experience any of these symptoms, stop use and consult a healthcare provider:

- Severe headaches
- Irregular heartbeat
- Persistent nausea
- Gum irritation or damage
- Signs of nicotine overdose
      `,
      publishedTime: "2024-01-17T10:00:00Z",
      modifiedTime: "2024-01-17T10:00:00Z",
      author: {
        name: "PouchVolt",
        url: "/",
        image: "/logo.png"
      },
      heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop",
    }
  }
};

export async function generateStaticParams() {
  return Object.entries(articles).flatMap(([category, categoryArticles]) =>
    Object.keys(categoryArticles).map((slug) => ({
      category,
      slug,
    }))
  );
}


export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const article = articles[params.category]?.[params.slug];
  
  if (!article) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    };
  }

  const canonicalUrl = `https://pouchvolt.com/guides/${article.category}/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author.name, url: article.author.url }],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      authors: [article.author.url],
      images: [article.heroImage]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage]
    }
  };
}

const components = {
  ProductComparison,
  FAQSection,
  CTABox,
};

export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const article = articles[params.category]?.[params.slug];

  if (!article) {
    notFound();
  }

  const jsonLd = generateArticleSchema({
    title: article.title,
    description: article.description,
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
    author: article.author,
    image: article.heroImage,
    url: `https://pouchvolt.com/guides/${article.category}/${article.slug}`
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="container max-w-4xl py-10">
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Image
            src={article.author.image}
            alt={article.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{article.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(article.publishedTime).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert mt-8">
          <MDXRemote 
            source={article.content}
            components={components}
          />
        </div>
      </article>
    </>
  );
}