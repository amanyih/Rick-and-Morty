"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { LocationCard } from "@/components/location-card"
import { Pagination } from "@/components/ui/pagination"
import type { Location } from "@/types/location"
import { getLocations } from "@/lib/api/locations"
import { LocationGridSkeleton } from "./skeletons/location-grid-skeleton"

export function LocationGrid() {
  const searchParams = useSearchParams()
  const [locations, setLocations] = useState<Location[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const page = Number(searchParams.get("page") || "1")
  const name = searchParams.get("name") || ""
  const type = searchParams.get("type") || ""
  const dimension = searchParams.get("dimension") || ""

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true)
      try {
        const result = await getLocations({
          page,
          filter: {
            name: name || undefined,
            type: type || undefined,
            dimension: dimension || undefined,
          },
        })

        setLocations(result.results)
        setTotalPages(result.info.pages)
      } catch (error) {
        console.error("Failed to fetch locations:", error)
        setLocations([])
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [page, name, type, dimension])

  if (loading) {
    return <LocationGridSkeleton />
  }

  if (locations.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">No locations found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  )
}
