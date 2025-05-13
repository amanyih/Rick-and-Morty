import { EpisodeDetail } from "@/components/episode-detail"
import { EpisodeCharacters } from "@/components/episode-characters"
import { Suspense } from "react"
import { EpisodeDetailSkeleton } from "@/components/skeletons/episode-detail-skeleton"
import { getEpisode } from "@/lib/api/episodes"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const episode = await getEpisode(params.id)

  if (!episode) {
    return {
      title: "Episode Not Found",
    }
  }

  return {
    title: `${episode.name} | Rick and Morty Portal`,
    description: `Watch details about ${episode.name} (${episode.episode}) from Rick and Morty`,
  }
}

export default async function EpisodePage({ params }: { params: { id: string } }) {
  const episode = await getEpisode(params.id)

  if (!episode) {
    notFound()
  }

  return (
    <div className="space-y-12">
      <Suspense fallback={<EpisodeDetailSkeleton />}>
        <EpisodeDetail id={params.id} />
      </Suspense>

      <EpisodeCharacters id={params.id} />
    </div>
  )
}
