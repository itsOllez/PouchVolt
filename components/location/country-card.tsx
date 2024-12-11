import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Country } from "@/types/locations";

interface CountryCardProps {
  slug: string;
  country: Country;
}

export function convertSlug(slug: string): string {
    return slug.replace(/_/g, '-');
  }

export function CountryCard({ slug, country }: CountryCardProps) {
  return (
    <Link href={`/where-to-buy-nicotine-pouches/${convertSlug(slug)}`} className="block">
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
  );
}