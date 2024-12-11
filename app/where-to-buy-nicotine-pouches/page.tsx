import { Metadata } from "next";
import { locationData } from "@/lib/locations-data";
import { CountryGrid } from "@/components/location/country-grid";


export function convertSlug(slug: string): string {
  return slug.replace(/_/g, '-');
}

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
      name: "PouchVolt",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png"
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
            in various countries. Search or select a country below to learn more about local regulations and find nearby retailers.
          </p>
        </div>

        <CountryGrid locationData={locationData} />
      </div>
    </>
  );
}