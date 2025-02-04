import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { generateArticleSchema } from "@/lib/schema";
import { ProductComparison } from "@/components/mdx/product-comparison";
import { FAQSection } from "@/components/mdx/faq-section";
import { CTABox } from "@/components/mdx/cta-box";
import { categories } from "../../../lib/articles-data";

export async function generateStaticParams() {
  return Object.entries(categories).flatMap(([category, { articles }]) =>
    Object.keys(articles).map((slug) => ({
      category,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const article = categories[params.category]?.articles?.[params.slug];
  
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
  const article = categories[params.category]?.articles?.[params.slug];

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
            <p className="text-sm text-muted-foreground"><span>Created: </span> 
              {new Date(article.publishedTime).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
            {article.modifiedTime ? <p className="text-sm text-foreground"><span>Updated: </span> 
              {new Date(article.modifiedTime).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p> : null }
            
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