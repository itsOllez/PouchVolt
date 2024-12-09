import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Star } from "lucide-react";
import { reviews } from "@/lib/reviews-data";
import { ProductStatsCard } from "@/components/reviews/product-stats-card";
import { ProsCons } from "@/components/reviews/pros-cons";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/metadata";

interface Props {
  params: {
    brand: string;
    product: string;
  };
}

export async function generateStaticParams() {
  return Object.values(reviews).map((review) => ({
    brand: review.brand,
    product: review.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const review = Object.values(reviews).find(
    (r) => r.brand === params.brand && r.slug === params.product
  );

  if (!review) {
    return generatePageMetadata({
      title: "Not Found",
      description: "The review you're looking for doesn't exist.",
      path: `/reviews/${params.brand}/${params.product}`
    });
  }

  return generatePageMetadata({
    title: review.title,
    description: review.description,
    path: `/reviews/${params.brand}/${params.product}`,
    openGraph: {
      type: "article",
      images: [review.heroImage]
    }
  });
}

export default function ProductPage({ params }: Props) {
  const review = Object.values(reviews).find(
    (r) => r.brand === params.brand && r.slug === params.product
  );

  if (!review) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: review.title,
    description: review.description,
    image: review.heroImage,
    brand: {
      "@type": "Brand",
      name: review.stats.brand
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: review.author.name
      },
      datePublished: review.publishedAt
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container max-w-4xl py-10">
        <Link
          href={`/reviews/${params.brand}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to {review.stats.brand}
        </Link>

        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={review.heroImage}
            alt={review.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Image
            src={review.author.avatar}
            alt={review.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{review.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(review.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-6">
          {review.title}
        </h1>

        <ProductStatsCard stats={review.stats} />

        <div className="prose dark:prose-invert mt-8 mb-12">
          <MDXRemote source={review.content} />
        </div>

        {(review.pros || review.cons) && (
          <ProsCons pros={review.pros} cons={review.cons} />
        )}

        {review.faqs && review.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {review.faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}