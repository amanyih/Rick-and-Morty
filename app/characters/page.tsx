import { CharacterGrid } from "@/components/character-grid"
import { CharacterFilters } from "@/components/character-filters"
import { Suspense } from "react"
import { CharacterGridSkeleton } from "@/components/skeletons/character-grid-skeleton"

export default function CharactersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Characters</h1>
      </div>
      <CharacterFilters />
      <Suspense fallback={<CharacterGridSkeleton />}>
        <CharacterGrid />
      </Suspense>
    </div>
  )
}
