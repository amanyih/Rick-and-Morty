"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SpaceIcon as Alien, UserIcon as Male, UserIcon as Female, HelpCircle, MapPin } from "lucide-react"
import type { Character } from "@/types/character"
import { getCharacter } from "@/lib/api/characters"
import { CharacterDetailSkeleton } from "./skeletons/character-detail-skeleton"
import { cn } from "@/lib/utils"

interface CharacterDetailProps {
  id: string
}

export function CharacterDetail({ id }: CharacterDetailProps) {
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true)
      try {
        const result = await getCharacter(id)
        setCharacter(result)
      } catch (error) {
        console.error("Failed to fetch character:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) {
    return <CharacterDetailSkeleton />
  }

  if (!character) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">Character not found</h3>
      </div>
    )
  }

  const statusColor =
    {
      Alive: "border-green-500",
      Dead: "border-red-500",
      unknown: "border-gray-500",
    }[character.status] || "border-gray-500"

  const statusBadge =
    {
      Alive: "bg-green-500",
      Dead: "bg-red-500",
      unknown: "bg-gray-500",
    }[character.status] || "bg-gray-500"

  const genderIcon = {
    Male: <Male className="h-5 w-5" />,
    Female: <Female className="h-5 w-5" />,
    unknown: <HelpCircle className="h-5 w-5" />,
    Genderless: <HelpCircle className="h-5 w-5" />,
  }[character.gender] || <HelpCircle className="h-5 w-5" />

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="flex justify-center">
            <div className={cn("relative w-64 h-64 rounded-full overflow-hidden border-4", statusColor)}>
              <Image
                src={character.image || "/placeholder.svg"}
                alt={character.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">{character.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className={cn("h-3 w-3 rounded-full", statusBadge)} />
                <span className="text-lg">{character.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-2">
                <Alien className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Species:</span>
                <span className="text-lg">{character.species}</span>
              </div>

              <div className="flex items-center gap-2">
                {genderIcon}
                <span className="text-lg font-medium">Gender:</span>
                <span className="text-lg">{character.gender}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Origin:</span>
                {character.origin.id ? (
                  <Link href={`/locations/${character.origin.id}`}>
                    <Badge variant="outline" className="text-lg hover:bg-primary/10">
                      {character.origin.name}
                    </Badge>
                  </Link>
                ) : (
                  <span className="text-lg">{character.origin.name}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Location:</span>
                {character.location.id ? (
                  <Link href={`/locations/${character.location.id}`}>
                    <Badge variant="outline" className="text-lg hover:bg-primary/10">
                      {character.location.name}
                    </Badge>
                  </Link>
                ) : (
                  <span className="text-lg">{character.location.name}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
