"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin } from "lucide-react"
import type { Location } from "@/types/location"
import { getLocation } from "@/lib/api/locations"
import { LocationDetailSkeleton } from "./skeletons/location-detail-skeleton"
import Image from "next/image"

interface LocationDetailProps {
  id: string
}

export function LocationDetail({ id }: LocationDetailProps) {
  const [location, setLocation] = useState<Location | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLocation = async () => {
      setLoading(true)
      try {
        const result = await getLocation(id)
        setLocation(result)
      } catch (error) {
        console.error("Failed to fetch location:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [id])

  if (loading) {
    return <LocationDetailSkeleton />
  }

  if (!location) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">Location not found</h3>
      </div>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <Image
              src="/assets/image/screaminSun.png"
              alt={location.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <h1 className="text-4xl font-bold">{location.name}</h1>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Type:</span>
                <span className="text-lg">{location.type}</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Dimension:</span>
                <span className="text-lg">{location.dimension}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">Residents:</span>
                <span className="text-lg">{location.residents?.length || 0} known residents</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
