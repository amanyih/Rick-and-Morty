"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import type { Character } from "@/types/character"
import { getLocation } from "@/lib/api/locations"
import { AlternateCharacterCard } from "./alternate-character-card"

interface LocationResidentsProps {
  id: string
}

export function LocationResidents({ id }: LocationResidentsProps) {
  const [residents, setResidents] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLocationResidents = async () => {
      setLoading(true)
      try {
        const location = await getLocation(id)
        if (location) {
          setResidents(location.residents || [])
        }
      } catch (error) {
        console.error("Failed to fetch location residents:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLocationResidents()
  }, [id])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Residents
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-24 bg-muted animate-pulse rounded-md" />
            ))}
          </div>
        ) : residents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {residents.map((resident) => (
              <AlternateCharacterCard key={resident.id} character={resident} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No residents found for this location</p>
        )}
      </CardContent>
    </Card>
  )
}
