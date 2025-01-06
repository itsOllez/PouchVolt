import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locationData } from "@/lib/locations-data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle, MapPin } from "lucide-react";

// Utility function to convert country names to URL-friendly slugs
export function createCountrySlug(country: string): string {
  return country.toLowerCase().replace(/_/g, '-');
}

// Utility function to convert URL slugs back to original keys
export function parseCountrySlug(slug: string): string {
  return slug.toLowerCase().replace(/-/g, '_');
}

interface Props {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((country) => ({
    country: createCountrySlug(country),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Parse the slug back to the original key
  const countryKey = parseCountrySlug(params.country);
  const countryData = locationData[countryKey];

  if (!countryData) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  const title = `Can You Buy Nicotine Pouches in ${countryData.name}?`;
  const description = `Learn about the legal status, availability, and where to buy nicotine pouches in ${countryData.name}. Find local stores and detailed information about nicotine pouch regulations.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Nicotine Pouch Guide",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const statusColors = {
  legal: "text-green-500",
  illegal: "text-red-500",
  restricted: "text-yellow-500",
  unknown: "text-gray-500",
};

const popularityColors = {
  high: "bg-green-500",
  medium: "bg-yellow-500",
  low: "bg-red-500",
  unknown: "bg-gray-500",
};

export default function CountryPage({ params }: Props) {
  // Parse the slug back to the original key
  const countryKey = parseCountrySlug(params.country);
  const countryData = locationData[countryKey];

  if (!countryData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Can You Buy Nicotine Pouches in ${countryData.name}?`,
    description: `Learn about the legal status, availability, and where to buy nicotine pouches in ${countryData.name}.`,
    author: {
      "@type": "Organization",
      name: "Nicotine Pouch Guide"
    },
    publisher: {
      "@type": "Organization",
      name: "Nicotine Pouch Guide",
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
          Can You Buy Nicotine Pouches in {countryData.name}?
        </h1>

        <div className="space-y-8">
          {/* Legal Status */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Legal Status</h2>
            <Alert>
              <AlertTitle className="flex items-center gap-2">
                {countryData.legal.status === "legal" && <CheckCircle className="text-green-500" />}
                {countryData.legal.status === "illegal" && <XCircle className="text-red-500" />}
                {countryData.legal.status === "restricted" && <AlertTriangle className="text-yellow-500" />}
                <span className={statusColors[countryData.legal.status]}>
                  {countryData.legal.status.charAt(0).toUpperCase() + countryData.legal.status.slice(1)}
                </span>
              </AlertTitle>
              <AlertDescription>{countryData.legal.details}</AlertDescription>
            </Alert>
          </section>

          {/* Availability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Availability</h2>
            <Card>
              <CardHeader>
                <CardTitle>Purchase Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{countryData.purchasable.details}</p>
              </CardContent>
            </Card>
          </section>

          {/* Brands */}
          {countryData.brands.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Available Brands</h2>
              <div className="flex flex-wrap gap-2">
                {countryData.brands.map((brand) => {
                 const brandSlug = brand
                 .toLowerCase()
                 .replace(/\s+/g, '-')       // Replace spaces with hyphens
                 .replace(/[^a-z0-9-]/g, ''); // Remove all characters except lowercase letters, numbers, and hyphens
                  return (
                    <Link key={brand} href={`/reviews/${brandSlug}`}>
                      <Badge 
                        variant="secondary"
                        className="hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        {brand}
                      </Badge>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Popularity */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Popularity</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary" className={popularityColors[countryData.popularity.level]}>
                    {countryData.popularity.level.toUpperCase()}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{countryData.popularity.details}</p>
              </CardContent>
            </Card>
          </section>

          {/* Cities */}
          <section>
  <h2 className="text-2xl font-semibold mb-4">Cities</h2>
  {countryData.legal.status === "illegal" ? (
    <p>
      Sorry, you can't purchase nicotine pouches in {countryData.name}, so we
      don't have any information on specific cities.
    </p>
  ) : (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(countryData.cities).map(([citySlug, cityData]) => (
        <Link
          key={citySlug}
          href={`/where-to-buy-nicotine-pouches/${createCountrySlug(countryKey)}/${citySlug}`}
          className="block"
        >
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {cityData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {cityData.locations.length} location
                {cityData.locations.length !== 1 ? 's' : ''} listed
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )}
</section>
        </div>
      </div>
    </>
  );
}