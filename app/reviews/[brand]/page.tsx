import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { brands, reviews } from "@/lib/reviews-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: {
    brand: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(brands).map((brand) => ({
    brand,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = brands[params.brand];

  if (!brand) {
    return {
      title: "Not Found",
      description: "The brand you're looking for doesn't exist.",
    };
  }

  return {
    title: `${brand.name} Nicotine Pouches Review`,
    description: brand.description,
  };
}

export default function BrandPage({ params }: Props) {
  const brand = brands[params.brand];

  if (!brand) {
    notFound();
  }

  const brandReviews = Object.values(reviews).filter(
    (review) => review.brand === params.brand
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    description: brand.description,
    url: brand.website,
    logo: brand.logo,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container py-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative h-16 w-16">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {brand.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {brand.description}
            </p>
          </div>
        </div>

        {brand.content && (
          <div className="prose max-w-none mb-8">
            <MDXRemote source={brand.content} />
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-6">Product Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brandReviews.map((review) => (
            <Link
              key={review.slug}
              href={`/reviews/${params.brand}/${review.slug}`}
            >
              <Card className="hover:bg-muted/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src={review.heroImage}
                    alt={review.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{review.name}</CardTitle>
                    <Badge variant="secondary">
                      {review.stats.strength}{review.stats.strengthUnit}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {review.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}