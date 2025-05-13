"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Film } from "lucide-react"
import type { Episode } from "@/types/episode"
import { getEpisode } from "@/lib/api/episodes"
import { EpisodeDetailSkeleton } from "./skeletons/episode-detail-skeleton"

interface EpisodeDetailProps {
  id: string
}

export function EpisodeDetail({ id }: EpisodeDetailProps) {
  const [episode, setEpisode] = useState<Episode | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEpisode = async () => {
      setLoading(true)
      try {
        const result = await getEpisode(id)
        setEpisode(result)
      } catch (error) {
        console.error("Failed to fetch episode:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEpisode()
  }, [id])

  if (loading) {
    return <EpisodeDetailSkeleton />
  }

  if (!episode) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">Episode not found</h3>
      </div>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{episode.name}</h1>
            <p className="text-2xl text-primary">{episode.episode}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-lg">Air Date: {episode.air_date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Film className="h-5 w-5 text-primary" />
            <span className="text-lg">{episode.characters?.length || 0} Characters in this episode</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
