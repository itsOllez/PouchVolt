import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationData } from "@/lib/locations-data";
import { StoreCard } from "@/components/location/store-card";
import { CityBuyingGuide } from "@/components/location/city-buying-guide";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { convertFromSlug, convertToSlug } from "@/lib/slug-utility";

interface Props {
  params: {
    country: string;
    city: string;
  };
}

export async function generateStaticParams() {
  return Object.entries(locationData).flatMap(([country, countryData]) =>
    Object.keys(countryData.cities).map((city) => ({
      country: convertToSlug(country),
      city,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Convert the slug back to the original country key
  const countryKey = convertFromSlug(params.country);
  const countryData = locationData[countryKey];
  const cityData = countryData?.cities[params.city];

  if (!countryData || !cityData) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  const title = `Where to Buy Nicotine Pouches in ${cityData.name}, ${countryData.name}`;
  const description = cityData.description || 
    `Find stores and locations selling nicotine pouches in ${cityData.name}. Comprehensive guide including store locations, addresses, and availability information.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "PouchVolt",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function CityPage({ params }: Props) {
  // Convert the slug back to the original country key
  const countryKey = convertFromSlug(params.country);
  const countryData = locationData[countryKey];
  const cityData = countryData?.cities[params.city];

  if (!countryData || !cityData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Where to Buy Nicotine Pouches in ${cityData.name}, ${countryData.name}`,
    description: cityData.description || `Find stores and locations selling nicotine pouches in ${cityData.name}`,
    author: {
      "@type": "Organization",
      name: "PouchVolt"
    },
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
        <Link
          href={`/where-to-buy-nicotine-pouches/${params.country}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to {countryData.name}
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Where to Buy Nicotine Pouches in {cityData.name}
        </h1>

        {cityData.description && (
          <p className="text-lg text-muted-foreground mb-8">{cityData.description}</p>
        )}

        {cityData.buyingGuide && (
          <CityBuyingGuide guide={cityData.buyingGuide} />
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cityData.locations.map((location, index) => (
            <StoreCard key={index} location={location} />
          ))}
        </div>

        {cityData.locations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No stores currently listed for {cityData.name}. Check back later for updates.
            </p>
          </div>
        )}
      </div>
      </>
  );
}