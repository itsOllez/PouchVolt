import { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/lib/reviews-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nicotine Pouch Reviews - Expert Analysis & Ratings",
  description: "In-depth reviews of nicotine pouches from all major brands. Find detailed analysis, ratings, and comparisons to help you make informed decisions.",
};

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nicotine Pouch Reviews",
    description: "Comprehensive collection of nicotine pouch reviews and brand information.",
    publisher: {
      "@type": "Organization",
      name: "PouchVolt",
      logo: {
        "@type": "ImageObject",
        url: "https://pouchvolt.com/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container py-8">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Nicotine Pouch Reviews
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive collection of nicotine pouch reviews. We provide detailed analysis, 
            ratings, and comparisons to help you find the perfect product for your needs. Browse reviews 
            by brand below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(brands).map((brand) => (
            <Link key={brand.slug} href={`/reviews/${brand.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className="relative h-8 w-8">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {brand.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {brand.description}
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