"use client";
import { Suspense } from "react";
import { LocationGridSkeleton } from "@/components/skeletons/location-grid-skeleton";
import dynamic from "next/dynamic";

const LocationFilters = dynamic(() => import("@/components/location-filters"), {
  ssr: false,
});
const LocationGrid = dynamic(() => import("@/components/location-grid"), {
  ssr: false,
});

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Locations</h1>
      </div>

      <Suspense
        fallback={<div className="h-20 bg-muted animate-pulse rounded-md" />}
      >
        <LocationFilters />
      </Suspense>

      <Suspense fallback={<LocationGridSkeleton />}>
        <LocationGrid />
      </Suspense>
    </div>
  );
}
