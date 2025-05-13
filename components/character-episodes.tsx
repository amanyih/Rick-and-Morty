"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Film } from "lucide-react"
import { getCharacter } from "@/lib/api/characters"
import type { Episode } from "@/types/episode"

interface CharacterEpisodesProps {
  id: string
}

export function CharacterEpisodes({ id }: CharacterEpisodesProps) {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacterEpisodes = async () => {
      setLoading(true)
      try {
        const character = await getCharacter(id)
        if (character) {
          setEpisodes(character.episode)
        }
      } catch (error) {
        console.error("Failed to fetch character episodes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacterEpisodes()
  }, [id])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Film className="h-5 w-5" />
          Episodes
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-10 bg-muted animate-pulse rounded-md" />
            ))}
          </div>
        ) : episodes.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {episodes.map((episode) => (
              <Link key={episode.id} href={`/episodes/${episode.id}`}>
                <Badge variant="secondary" className="text-sm py-2 hover:bg-secondary/80">
                  {episode.episode} - {episode.name}
                </Badge>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No episodes found</p>
        )}
      </CardContent>
    </Card>
  )
}
