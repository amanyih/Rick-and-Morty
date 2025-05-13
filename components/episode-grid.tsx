"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { EpisodeCard } from "@/components/episode-card"
import { Pagination } from "@/components/ui/pagination"
import type { Episode } from "@/types/episode"
import { getEpisodes } from "@/lib/api/episodes"
import { EpisodeGridSkeleton } from "./skeletons/episode-grid-skeleton"

export function EpisodeGrid() {
  const searchParams = useSearchParams()
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const page = Number(searchParams.get("page") || "1")
  const name = searchParams.get("name") || ""
  const episode = searchParams.get("episode") || ""

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true)
      try {
        const result = await getEpisodes({
          page,
          filter: {
            name: name || undefined,
            episode: episode || undefined,
          },
        })

        setEpisodes(result.results)
        setTotalPages(result.info.pages)
      } catch (error) {
        console.error("Failed to fetch episodes:", error)
        setEpisodes([])
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [page, name, episode])

  if (loading) {
    return <EpisodeGridSkeleton />
  }

  if (episodes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">No episodes found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  )
}
