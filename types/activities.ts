export type SafetyLevel = "OK" | "Caution" | "Warning";

export interface Activity {
  slug: string;
  title: string;
  description: string;
  safety: SafetyLevel;
  heroImage: string;
  content?: string;
  genericWarning: string;
}