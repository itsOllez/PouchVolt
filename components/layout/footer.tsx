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
                <Link href="/guides/beginners/getting-started" className="text-muted-foreground hover:text-primary">
                  Beginner's Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/health/nicotine-effects" className="text-muted-foreground hover:text-primary">
                  Health Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
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
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PouchVolt. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}