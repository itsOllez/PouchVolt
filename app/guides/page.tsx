import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Nicotine Pouch Guides - Expert Advice & Information",
  description: "Comprehensive guides about nicotine pouches, from beginner basics to advanced topics. Expert advice, safety information, and detailed product guides.",
};

// This would typically come from your CMS or data source
const guides = {
  beginners: {
    title: "Beginner's Guides",
    guides: {
      "getting-started": {
        title: "Getting Started with Nicotine Pouches",
        description: "Everything you need to know about nicotine pouches as a beginner.",
        category: "beginners",
        slug: "getting-started",
        publishedAt: "2024-11-15T10:00:00Z",
        author: {
          name: "PouchVolt",
          image: "/logo.png"
        },
        heroImage: "https://images.unsplash.com/photo-1682775399553-b2e250dc35f8?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  },
  reviews: {
    title: "Product Reviews & Comparisons",
    guides: {
      "top-brands-2024": {
        title: "Top Nicotine Pouch Brands in 2024",
        description: "Comprehensive review of the best nicotine pouch brands available this year.",
        category: "reviews",
        slug: "top-brands-2024",
        publishedAt: "2024-12-02T10:00:00Z",
        author: {
          name: "PouchVolt",
          image: "/logo.png"
        },
        heroImage: "/article-images/podium.webp"
      }
    }
  },
  health: {
    title: "Health & Safety",
    guides: {
      "nicotine-effects": {
        title: "Understanding Nicotine's Effects on Your Body",
        description: "A detailed exploration of how nicotine affects your body and what you should know.",
        category: "health",
        slug: "nicotine-effects",
        publishedAt: "2024-12-08T10:00:00Z",
        author: {
          name: "PouchVolt",
          image: "/logo.png"
        },
        heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop"
      }
    }
  }
};

export default function GuidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nicotine Pouch Guides",
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
          Nicotine Pouch Guides
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive collection of nicotine pouch guides. From beginner basics to advanced topics, 
            find expert advice, safety information, and detailed product guides to help you make informed decisions.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(guides).map(([category, { title, guides: categoryGuides }]) => (
            <section key={category}>
              <h2 className="text-2xl font-semibold mb-6">{title}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(categoryGuides).map(([slug, guide]) => (
                  <Link
                    key={slug}
                    href={`/guides/${guide.category}/${guide.slug}`}
                    className="block"
                  >
                    <Card className="overflow-hidden hover:bg-muted/50 transition-colors">
                      <div className="relative h-48 w-full">
                        <Image
                          src={guide.heroImage}
                          alt={guide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src={guide.author.image}
                              alt={guide.author.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span className="text-sm text-muted-foreground">
                              {guide.author.name}
                            </span>
                          </div>
                          <Badge variant="secondary">
                            {new Date(guide.publishedAt).toLocaleDateString("en-US", {
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