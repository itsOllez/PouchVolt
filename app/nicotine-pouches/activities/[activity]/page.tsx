import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { activities } from "@/lib/activities-data";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { generateArticleSchema } from "@/lib/schema";

interface Props {
  params: {
    activity: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(activities).map((activity) => ({
    activity,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = activities[params.activity];

  if (!activity) {
    return {
      title: "Not Found",
      description: "The activity guide you're looking for doesn't exist.",
    };
  }

  return {
    title: activity.title + " | PouchVolt",
    description: activity.description,
    openGraph: {
      title: activity.title,
      description: activity.description,
      type: "article",
      images: [activity.heroImage],
    },
    alternates: {
      canonical: `https://pouchvolt.com/nicotine-pouches/activities/${params.activity}`,
    },
  };
}

const safetyIcons = {
  OK: CheckCircle,
  Caution: AlertTriangle,
  Warning: XCircle,
};

const safetyColors = {
  OK: "text-green-500 bg-green-500/10",
  Caution: "text-yellow-500 bg-yellow-500/10",
  Warning: "text-red-500 bg-red-500/10",
};

export default function ActivityPage({ params }: Props) {
  const activity = activities[params.activity];

  if (!activity) {
    notFound();
  }

  const SafetyIcon = safetyIcons[activity.safety];
  const safetyColor = safetyColors[activity.safety];

  const jsonLd = generateArticleSchema({
    title: activity.title,
    description: activity.description,
    image: activity.heroImage,
    author: {

    },
    url: `https://pouchvolt.com/activity/${activity.slug}`
  });

  return (
<>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <article className="container max-w-4xl py-10">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg mb-8">
        <Image
          src={activity.heroImage}
          alt={activity.title + " Header Image"}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold tracking-tight mb-6">
        {activity.title}
      </h1>

      <Alert className={safetyColor}>
        <SafetyIcon className="h-5 w-5" />
        <AlertTitle className="ml-2">Safety Level: {activity.safety}</AlertTitle>
        <AlertDescription>
          {activity.genericWarning}
        </AlertDescription>
      </Alert>

      {activity.content ? (
        <div className="prose prose-neutral dark:prose-invert mt-8">
          <MDXRemote source={activity.content} />
        </div>
      ) : (
        <div className="prose prose-neutral dark:prose-invert mt-8">
          <h2>General Guidelines</h2>
          <p>
            When considering using nicotine pouches during {params.activity}, 
            it's important to understand both the potential risks and benefits.
          </p>

          <h2>Safety Considerations</h2>
          <p>{activity.genericWarning}</p>

          <h2>Recommendations</h2>
          {activity.safety === "OK" && (
            <ul>
              <li>Start with lower strength pouches</li>
              <li>Pay attention to how your body responds</li>
              <li>Stay hydrated</li>
              <li>Remove the pouch if you experience any discomfort</li>
            </ul>
          )}
          {activity.safety === "Caution" && (
            <ul>
              <li>Consider alternatives during this activity</li>
              <li>If you must use pouches, choose lower strength options</li>
              <li>Be extra mindful of your body's response</li>
              <li>Have a plan to safely dispose of the pouch</li>
            </ul>
          )}
          {activity.safety === "Warning" && (
            <ul>
              <li>Avoid using nicotine pouches during this activity</li>
              <li>Wait until after the activity is complete</li>
              <li>Consider the specific risks involved</li>
              <li>Prioritize safety over convenience</li>
            </ul>
          )}
        </div>
      )}
    </article>
    </>
  );
}