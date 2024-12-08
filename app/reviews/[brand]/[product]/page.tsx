import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Star } from "lucide-react";
import { reviews } from "@/lib/reviews-data";
import { ProductStatsCard } from "@/components/reviews/product-stats-card";
import { ProsCons } from "@/components/reviews/pros-cons";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/metadata";

interface Props {
  params: {
    brand: string;
    product: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const review = Object.values(reviews).find(
    (r) => r.brand === params.brand && r.slug === params.product
  );

  if (!review) {
    return generatePageMetadata({
      title: "Not Found",
      description: "The review you're looking for doesn't exist.",
      path: `/reviews/${params.brand}/${params.product}`
    });
  }

  return generatePageMetadata({
    title: review.title,
    description: review.description,
    path: `/reviews/${params.brand}/${params.product}`,
    openGraph: {
      type: "article",
      images: [review.heroImage]
    }
  });
}

// Rest of the component implementation...