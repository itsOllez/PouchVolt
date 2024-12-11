"use client";

import { useState } from "react";
import { LocationData } from "@/types/locations";
import { CountryCard } from "./country-card";
import { SearchBar } from "./search-bar";

interface CountryGridProps {
  locationData: LocationData;
}

export function CountryGrid({ locationData }: CountryGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = Object.entries(locationData).filter(([_, country]) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search countries..."
      />
      
      {filteredCountries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No countries found matching your search.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.map(([countrySlug, country]) => (
            <CountryCard
              key={countrySlug}
              slug={countrySlug}
              country={country}
            />
          ))}
        </div>
      )}
    </div>
  );
}