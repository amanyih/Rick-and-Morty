import { LocationDetail } from "@/components/location-detail"
import { LocationResidents } from "@/components/location-residents"
import { Suspense } from "react"
import { LocationDetailSkeleton } from "@/components/skeletons/location-detail-skeleton"
import { getLocation } from "@/lib/api/locations"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const location = await getLocation(params.id)

  if (!location) {
    return {
      title: "Location Not Found",
    }
  }

  return {
    title: `${location.name} | Rick and Morty Portal`,
    description: `Explore ${location.name} from Rick and Morty - ${location.type} in ${location.dimension}`,
  }
}

export default async function LocationPage({ params }: { params: { id: string } }) {
  const location = await getLocation(params.id)

  if (!location) {
    notFound()
  }

  return (
    <div className="space-y-12">
      <Suspense fallback={<LocationDetailSkeleton />}>
        <LocationDetail id={params.id} />
      </Suspense>

      <LocationResidents id={params.id} />
    </div>
  )
}
