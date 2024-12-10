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
        name: "John Smith",
        url: "/authors/john-smith",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
      },
      heroImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=630&fit=crop",
    }
  },
  "reviews": {
    "top-brands-2024": {
      slug: "top-brands-2024",
      category: "reviews",
      title: "Top Nicotine Pouch Brands in 2024",
      description: "Comprehensive review of the best nicotine pouch brands available in 2024.",
      content: `
# Top Nicotine Pouch Brands in 2024

Our comprehensive review of the best nicotine pouch brands available this year.

## Top Picks

<ProductComparison products={[
  {
    name: "Premium Brand A",
    strength: "6mg",
    flavors: ["Mint", "Berry", "Citrus"],
    price: "$6.99",
    rating: 5,
    pros: ["Premium quality", "Great taste"],
    cons: ["Premium price"]
  },
  {
    name: "Value Brand B",
    strength: "8mg",
    flavors: ["Mint", "Original"],
    price: "$4.99",
    rating: 4,
    pros: ["Good value", "Strong effect"],
    cons: ["Limited flavors"]
  }
]} />

<CTABox 
  title="Compare Prices"
  description="Find the best deals on your favorite brands"
  buttonText="Compare Now"
  buttonLink="/compare-prices"
/>
      `,
      publishedTime: "2024-01-16T10:00:00Z",
      modifiedTime: "2024-01-16T10:00:00Z",
      author: {
        name: "Jane Doe",
        url: "/authors/jane-doe",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      },
      heroImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=630&fit=crop",
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

## Long-term Considerations

<CTABox 
  title="Speak with a Healthcare Provider"
  description="Get professional medical advice about nicotine use"
  buttonText="Find a Provider"
  buttonLink="/healthcare-directory"
/>

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
        name: "Dr. Sarah Johnson",
        url: "/authors/sarah-johnson",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
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
  

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author.name, url: article.author.url }],
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