import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductStats } from "@/types/reviews";
import { Package, Battery, Globe } from "lucide-react";

export function ProductStatsCard({ stats }: { stats: ProductStats }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {stats.name}
          <Badge variant="secondary">{stats.strength}{stats.strengthUnit}</Badge>
        </CardTitle>
        <CardDescription>by {stats.brand}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Package className="h-4 w-4" /> Product Details
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Flavor: {stats.flavor}</li>
              <li>Format: {stats.format}</li>
              <li>Type: {stats.type}</li>
              <li>{stats.portionsPerCan} portions/can</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Battery className="h-4 w-4" /> Strength
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>{stats.strength} {stats.strengthUnit}</li>
              {stats.price && (
                <li>{stats.price.amount} {stats.price.currency}/can</li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Globe className="h-4 w-4" /> Availability
            </h3>
            <div className="flex flex-wrap gap-1">
              {stats.availableIn.map((country) => (
                <Badge key={country} variant="outline">
                  {country}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}