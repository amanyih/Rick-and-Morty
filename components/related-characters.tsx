"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import type { Character } from "@/types/character"
import { getRelatedCharacters } from "@/lib/api/characters"
import { AlternateCharacterCard } from "./alternate-character-card"

interface RelatedCharactersProps {
  id: string
}

export function RelatedCharacters({ id }: RelatedCharactersProps) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedCharacters = async () => {
      setLoading(true)
      try {
        const result = await getRelatedCharacters(id)
        setCharacters(result)
      } catch (error) {
        console.error("Failed to fetch related characters:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedCharacters()
  }, [id])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          People Also Searched For
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 bg-muted animate-pulse rounded-md" />
            ))}
          </div>
        ) : characters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {characters.map((character) => (
              <AlternateCharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No related characters found</p>
        )}
      </CardContent>
    </Card>
  )
}
