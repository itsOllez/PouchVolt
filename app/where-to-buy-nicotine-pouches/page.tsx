import { Metadata } from "next";
import Link from "next/link";
import { locationData } from "@/lib/locations-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Where to Buy Nicotine Pouches - Global Availability Guide",
  description: "Find out where to buy nicotine pouches worldwide. Comprehensive guide covering legal status, availability, and store locations across different countries.",
  openGraph: {
    title: "Where to Buy Nicotine Pouches - Global Availability Guide",
    description: "Find out where to buy nicotine pouches worldwide. Comprehensive guide covering legal status, availability, and store locations across different countries.",
    type: "website",
  },
};

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Where to Buy Nicotine Pouches - Global Availability Guide",
    description: "Find out where to buy nicotine pouches worldwide. Comprehensive guide covering legal status, availability, and store locations across different countries.",
    publisher: {
      "@type": "Organization",
      name: "Nicotine Pouch Guide",
      logo: {
        "@type": "ImageObject",
        url: "https://your-domain.com/logo.png"
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
          Where to Buy Nicotine Pouches
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Finding nicotine pouches can be challenging as regulations and availability vary significantly across different countries and regions. 
            Our comprehensive guide helps you understand the legal status, availability, and specific locations where you can purchase nicotine pouches 
            in various countries. Select a country below to learn more about local regulations and find nearby retailers.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(locationData).map(([countrySlug, country]) => (
            <Link
              key={countrySlug}
              href={`/where-to-buy-nicotine-pouches/${countrySlug}`}
              className="block"
            >
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {country.name}
                    </span>
                    <Badge
                      variant={country.legal.status === "legal" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {country.legal.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {Object.keys(country.cities).length} cities listed
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {country.purchasable.status 
                      ? "Available for purchase in stores" 
                      : "Limited availability - check city guides for details"}
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