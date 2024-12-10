import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { activities } from "@/lib/activities-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Nicotine Pouches & Activities Guide",
  description: "Learn about using nicotine pouches during various activities and understand the safety considerations.",
  openGraph: {
    title: "Nicotine Pouches & Activities Guide",
    description: "Learn about using nicotine pouches during various activities and understand the safety considerations.",
    type: "website",
  },
  alternates: {
    canonical: "https://pouchvolt.com/nicotine-pouches/activities",
  },
};

const safetyIcons = {
  OK: CheckCircle,
  Caution: AlertTriangle,
  Warning: XCircle,
};

const safetyColors = {
  OK: "text-green-500",
  Caution: "text-yellow-500",
  Warning: "text-red-500",
};

export default function ActivitiesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-6">
        Nicotine Pouches & Activities Guide
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg text-muted-foreground">
          Understand when and where it's safe to use nicotine pouches during various activities. 
          Our comprehensive guide helps you make informed decisions about nicotine pouch usage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.values(activities).map((activity) => {
          const SafetyIcon = safetyIcons[activity.safety];
          const safetyColor = safetyColors[activity.safety];

          return (
            <Link
              key={activity.slug}
              href={`/nicotine-pouches/activities/${activity.slug}`}
              className="block"
            >
              <Card className="hover:bg-muted/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src={activity.heroImage}
                    alt={activity.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="line-clamp-1">{activity.title}</span>
                    <SafetyIcon className={`h-5 w-5 ${safetyColor}`} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {activity.description}
                  </p>
                  <Badge 
                    variant={activity.safety === "OK" ? "default" : "secondary"}
                    className="mt-4"
                  >
                    {activity.safety}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          )})}
      </div>
    </div>
  );
}