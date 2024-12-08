export type LegalStatus = "legal" | "illegal" | "restricted" | "unknown";
export type PopularityLevel = "high" | "medium" | "low" | "unknown";
export type LocationType = "store" | "pharmacy" | "vape_shop" | "tobacco_shop";

export interface Location {
  title: string;
  address: string;
  description: string;
  type: LocationType;
  website?: string;
  phone?: string;
  hours?: string;
}

export interface City {
  name: string;
  locations: Location[];
  description?: string;
  buyingGuide?: string; // New field for city-specific buying information
}

export interface Country {
  name: string;
  legal: {
    status: LegalStatus;
    details: string;
  };
  purchasable: {
    status: boolean;
    details: string;
  };
  brands: string[];
  popularity: {
    level: PopularityLevel;
    details: string;
  };
  cities: {
    [key: string]: City;
  };
}

export interface LocationData {
  [key: string]: Country;
}