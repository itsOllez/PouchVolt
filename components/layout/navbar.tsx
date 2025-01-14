"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Info, BookOpen, HelpCircle, Menu, MapPin, Zap, Star, Activity } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const routes = [
  {
    title: "Reviews",
    icon: Star,
    href: "/reviews",
    items: [
      {
        title: "ZYN",
        href: "/reviews/zyn",
        description: "Reviews of ZYN nicotine pouches"
      },
      {
        title: "VELO",
        href: "/reviews/velo",
        description: "Reviews of VELO nicotine pouches"
      },
      {
        title: "All Reviews",
        href: "/reviews",
        description: "Browse all nicotine pouch reviews"
      }
    ]
  },
  {
    title: "Where to Buy",
    icon: MapPin,
    href: "/where-to-buy-nicotine-pouches",
    items: [
      {
        title: "Japan",
        href: "/where-to-buy-nicotine-pouches/japan",
        description: "Find nicotine pouch retailers in Japan"
      },
      {
        title: "United Kingdom",
        href: "/where-to-buy-nicotine-pouches/united-kingdom",
        description: "Find nicotine pouch retailers in the UK"
      },
      {
        title: "All Locations",
        href: "/where-to-buy-nicotine-pouches",
        description: "Browse all countries and cities"
      }
    ]
  },
  {
    title: "Activities",
    icon: Activity,
    href: "/nicotine-pouches/activities",
    items: [
      {
        title: "Running",
        href: "/nicotine-pouches/activities/running",
        description: "Using nicotine pouches while running"
      },
      {
        title: "Swimming",
        href: "/nicotine-pouches/activities/swimming",
        description: "Safety of nicotine pouches while swimming"
      },
      {
        title: "All Activities",
        href: "/nicotine-pouches/activities",
        description: "Browse all activity guides"
      }
    ]
  },
  {
    title: "Guides",
    icon: BookOpen,
    href: "/guides",
    items: [
      {
        title: "Getting Started",
        href: "/guides/beginners/getting-started",
        description: "Everything you need to know about nicotine pouches"
      },
      {
        title: "All Guides",
        href: "/guides",
        description: "Browse all guides and articles"
      }
    ]
  },
  {
    title: "About",
    icon: Info,
    href: "/about"
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/pouchvolt-cropped-cropped.svg" alt="PouchVolt Logo" className="h-8 w-auto" />
        </Link>

        <div className="flex items-center">
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {routes.map((route) => (
                  <NavigationMenuItem key={route.href}>
                    {route.items ? (
                      <>
                        <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {route.items.map((item) => (
                              <li key={item.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={item.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {item.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={route.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50",
                            pathname === route.href && "bg-accent/50"
                          )}
                        >
                          {route.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center">
                <img src="/pouchvolt-cropped-cropped.svg" alt="PouchVolt Logo" className="h-8 w-auto" />
              </Link>
              </div>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-2 text-lg font-semibold",
                      pathname === route.href && "text-primary"
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}