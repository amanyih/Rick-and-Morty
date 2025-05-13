import { LocationGrid } from "@/components/location-grid"
import { LocationFilters } from "@/components/location-filters"
import { Suspense } from "react"
import { LocationGridSkeleton } from "@/components/skeletons/location-grid-skeleton"

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Locations</h1>
      </div>
      <LocationFilters />
      <Suspense fallback={<LocationGridSkeleton />}>
        <LocationGrid />
      </Suspense>
    </div>
  )
}
