import { generatePageMetadata } from "@/lib/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Zap } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "About PouchVolt - Our Mission & Values",
  description: "Learn about PouchVolt's mission to provide accurate, comprehensive information about nicotine pouches and our commitment to responsible usage.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-6">About PouchVolt</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-muted-foreground">
          PouchVolt is your trusted source for comprehensive information about nicotine pouches. 
          Our mission is to educate users about responsible usage while providing detailed reviews and availability information.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide accurate, unbiased information about nicotine pouches, helping users make informed decisions about their usage.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Our Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We foster a supportive community where users can share experiences and find reliable information about nicotine pouches.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We're committed to promoting responsible usage and providing up-to-date information about regulations and availability.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Our Expertise</h2>
        <p>
          We are a small team of independent researchers and writers who investigate every aspect of nicotine pouches to give you the best information. 
          We maintain relationships with manufacturers and retailers to ensure our information is current and accurate.
        </p>

        <h2>Editorial Standards</h2>
        <p>
          All content on PouchVolt undergoes regular updates. We strive to provide:
        </p>
        <ul>
          <li>Accurate, well-researched information</li>
          <li>Unbiased product reviews</li>
          <li>Current regulatory information</li>
          <li>Responsible usage guidelines</li>
          <li>A personal touch!</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          We value your feedback and questions. You can reach our team at:
          <br />
          Email: contact@pouchvolt.com
          <br />
        </p>
      </div>
    </div>
  );
}