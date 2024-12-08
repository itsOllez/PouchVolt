import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

interface CityBuyingGuideProps {
  guide: string;
}

export function CityBuyingGuide({ guide }: CityBuyingGuideProps) {
  if (!guide) return null;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          Buying Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert">
          <p className="text-muted-foreground">{guide}</p>
        </div>
      </CardContent>
    </Card>
  );
}