import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  openGraph?: {
    images?: string[];
    type?: string;
  };
}

const SITE_URL = 'https://pouchvolt.com';

export function generatePageMetadata({ 
  title, 
  description, 
  path,
  openGraph = {}
}: MetadataProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'PouchVolt',
      locale: 'en_US',
      type: openGraph.type || 'website',
      ...(openGraph.images && { images: openGraph.images }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(openGraph.images && { images: openGraph.images }),
    },
  };
}