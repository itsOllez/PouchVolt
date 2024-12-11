import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold">PouchVolt</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for nicotine pouch information worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-primary">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary">
                  Nicotine Pouch Reviews
                </Link>
              </li>
              <li>
                <Link href="/nicotine-pouches/activities" className="text-muted-foreground hover:text-primary">
                  Nicotine Pouch Activity Guides
                </Link>
              </li>
              <li>
                <Link href="/where-to-buy-nicotine-pouches" className="text-muted-foreground hover:text-primary">
                  Where To Buy Nicotine Pouches?
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and guides.
            </p>
            {/* Newsletter form can be added here */}
          </div>
        </div>
        <Separator className="my-8" />
        <p className="mt-4 text-sm text-muted-foreground">
        This website is for informational purposes only and is not intended to provide medical, legal, or professional advice. Readers are responsible for ensuring compliance with the laws and regulations of their country regarding nicotine products. Nicotine pouches are intended for adults of legal age as defined in their jurisdiction.
The author assumes no responsibility for any actions taken based on the information provided on this site. Consult a healthcare professional before using nicotine products, particularly if you have underlying health conditions, are pregnant or breastfeeding, or are taking medications.

By accessing this site, you acknowledge and agree to these terms.


        </p>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PouchVolt. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}