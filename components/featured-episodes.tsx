import { EpisodeCard } from "@/components/episode-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getFeaturedEpisodes } from "@/lib/api/episodes"

export async function FeaturedEpisodes() {
  const episodes = await getFeaturedEpisodes()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Featured Episodes</h2>
        <Button asChild variant="outline">
          <Link href="/episodes">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  )
}
