import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, HelpCircle, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center gap-8 pt-8">
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
      </section>

      {/* Featured Sections */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary" />
              <CardTitle>Comprehensive Guides</CardTitle>
              <CardDescription>
                From beginner basics to advanced topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Product reviews</li>
                <li>Usage guidelines</li>
                <li>Best practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-10 w-10 text-primary" />
              <CardTitle>Safety First</CardTitle>
              <CardDescription>
                Expert advice on responsible usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Safety guidelines</li>
                <li>Storage tips</li>
                <li>Usage recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HelpCircle className="h-10 w-10 text-primary" />
              <CardTitle>Expert Support</CardTitle>
              <CardDescription>
                Get answers to your questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Detailed FAQs</li>
                <li>Expert insights</li>
                <li>Community support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}