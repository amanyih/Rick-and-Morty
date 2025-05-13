"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import type { Character } from "@/types/character"
import { getEpisode } from "@/lib/api/episodes"
import { AlternateCharacterCard } from "./alternate-character-card"

interface EpisodeCharactersProps {
  id: string
}

export function EpisodeCharacters({ id }: EpisodeCharactersProps) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEpisodeCharacters = async () => {
      setLoading(true)
      try {
        const episode = await getEpisode(id)
        if (episode) {
          setCharacters(episode.characters || [])
        }
      } catch (error) {
        console.error("Failed to fetch episode characters:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodeCharacters()
  }, [id])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Characters in this Episode
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-24 bg-muted animate-pulse rounded-md" />
            ))}
          </div>
        ) : characters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {characters.map((character) => (
              <AlternateCharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No characters found for this episode</p>
        )}
      </CardContent>
    </Card>
  )
}
