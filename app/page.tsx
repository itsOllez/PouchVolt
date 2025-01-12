import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, HelpCircle, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "PouchVolt | Expert Reviews, Guides & Info on Nicotine Pouches",
  description: "PouchVolt is your go-to resource for everything nicotine pouches. Explore in-depth reviews, buying guides, and tips to find the best pouches for your needs. Stay informed with the latest trends, product comparisons, and helpful insights on smokeless nicotine alternatives.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-10">
        <div className="container relative flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your Trusted Guide to
            <span className="text-primary"> Nicotine Pouches</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Comprehensive information, expert reviews, and detailed guides to help you make informed decisions.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/guides/beginners/getting-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/guides">Browse Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<BookOpen className="h-10 w-10" />}
            title="Comprehensive Guides"
            description="From beginner basics to advanced topics"
            items={["Product reviews", "Usage guidelines", "Best practices"]}
          />
          <FeatureCard
            icon={<ShieldCheck className="h-10 w-10" />}
            title="Safety First"
            description="Expert advice on responsible usage"
            items={["Safety guidelines", "Storage tips", "Usage recommendations"]}
          />
          <FeatureCard
            icon={<HelpCircle className="h-10 w-10" />}
            title="Expert Support"
            description="Get answers to your questions"
            items={["Detailed FAQs", "Expert insights", "Community support"]}
          />
        </div>
      </section>

      {/* Upcoming Store Section */}
      <section className="container">
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Coming Soon... The <span className="text-primary">PouchVolt</span> Store</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get ready to shop for your favorite nicotine pouches directly from our site. 
            We're curating a selection of top-quality products for your convenience.
          </p>
         
        </div>
      </section>

      {/* Minimalist Quote Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl font-light italic text-center text-muted-foreground">
            "Informed choices lead to better experiences. Our mission is to provide you with the knowledge you need to make the best decisions about nicotine pouches."
          </blockquote>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            - The PouchVolt Team
          </div>
        </div>
      </section>

      {/* Minimalist CTA Section */}
      <section className="container">
        <div className="border-t border-b border-primary/20 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Dive into our comprehensive guides and reviews to find the perfect nicotine pouch for you.
          </p>
          <Button asChild size="lg">
            <Link href="/guides">Start Exploring</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, items }) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <div className="rounded-full bg-primary/10 p-3 w-fit text-primary">{icon}</div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

