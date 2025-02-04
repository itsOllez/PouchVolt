import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "../../lib/articles-data";

export const metadata: Metadata = {
  title: "Nicotine Pouch Articles & Guides | Expert Advice & Information",
  description: "Comprehensive guides about nicotine pouches, from beginner basics to advanced topics. Expert advice, safety information, and detailed product guides.",
};

export default function GuidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nicotine Pouch Articles & Guides",
    description: "Comprehensive collection of nicotine pouch guides and information.",
    publisher: {
      "@type": "Organization",
      name: "PouchVolt",
      logo: {
        "@type": "ImageObject",
        url: "/pouchvolt-cropped-cropped.svg"
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
          Nicotine Pouch Articles & Guides
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive collection of nicotine pouch guides and articles. From beginner basics to advanced topics, 
            find expert advice, safety information, and detailed product guides to help you make informed decisions.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(categories).map(([categorySlug, category]) => (
            <section key={categorySlug}>
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(category.articles).map(([slug, article]) => (
                  <Link
                    key={slug}
                    href={`/${article.category}/${article.slug}`}
                    className="block"
                  >
                    <Card className="overflow-hidden hover:bg-muted/50 transition-colors">
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.heroImage}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src={article.author.image}
                              alt={article.author.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span className="text-sm text-muted-foreground">
                              {article.author.name}
                            </span>
                          </div>
                          <Badge variant="secondary">
                            {new Date(article.publishedTime).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric"
                            })}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}