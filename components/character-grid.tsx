"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CharacterCard } from "@/components/character-card"
import { Pagination } from "@/components/ui/pagination"
import type { Character } from "@/types/character"
import { getCharacters } from "@/lib/api/characters"
import { CharacterGridSkeleton } from "./skeletons/character-grid-skeleton"

export function CharacterGrid() {
  const searchParams = useSearchParams()
  const [characters, setCharacters] = useState<Character[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const page = Number(searchParams.get("page") || "1")
  const name = searchParams.get("name") || ""
  const status = searchParams.get("status") || ""
  const gender = searchParams.get("gender") || ""

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      try {
        const result = await getCharacters({
          page,
          filter: {
            name: name || undefined,
            status: status || undefined,
            gender: gender || undefined,
          },
        })

        setCharacters(result.results)
        setTotalPages(result.info.pages)
      } catch (error) {
        console.error("Failed to fetch characters:", error)
        setCharacters([])
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [page, name, status, gender])

  if (loading) {
    return <CharacterGridSkeleton />
  }

  if (characters.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">No characters found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  )
}
