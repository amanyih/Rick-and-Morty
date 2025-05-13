import { EpisodeGrid } from "@/components/episode-grid"
import { EpisodeFilters } from "@/components/episode-filters"
import { Suspense } from "react"
import { EpisodeGridSkeleton } from "@/components/skeletons/episode-grid-skeleton"

export default function EpisodesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Episodes</h1>
      </div>
      <EpisodeFilters />
      <Suspense fallback={<EpisodeGridSkeleton />}>
        <EpisodeGrid />
      </Suspense>
    </div>
  )
}
