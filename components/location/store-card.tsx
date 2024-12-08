import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Store, MapPin, Clock, Phone, Globe } from "lucide-react";
import { Location } from "@/types/locations";

const typeIcons = {
  store: Store,
  pharmacy: Store,
  vape_shop: Store,
  tobacco_shop: Store,
};

export function StoreCard({ location }: { location: Location }) {
  const Icon = typeIcons[location.type];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl">{location.title}</CardTitle>
        </div>
        <CardDescription>{location.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
            <p className="text-sm text-muted-foreground">{location.address}</p>
          </div>
          {location.hours && (
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{location.hours}</p>
            </div>
          )}
          {location.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{location.phone}</p>
            </div>
          )}
          {location.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <a
                href={location.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}