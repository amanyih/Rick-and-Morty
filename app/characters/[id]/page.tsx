import { CharacterDetail } from "@/components/character-detail"
import { RelatedCharacters } from "@/components/related-characters"
import { CharacterEpisodes } from "@/components/character-episodes"
import { Suspense } from "react"
import { CharacterDetailSkeleton } from "@/components/skeletons/character-detail-skeleton"
import { getCharacter } from "@/lib/api/characters"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const character = await getCharacter(params.id)

  if (!character) {
    return {
      title: "Character Not Found",
    }
  }

  return {
    title: `${character.name} | Rick and Morty Portal`,
    description: `Learn about ${character.name} from Rick and Morty - ${character.species} from ${character.origin.name}`,
  }
}

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const character = await getCharacter(params.id)

  if (!character) {
    notFound()
  }

  return (
    <div className="space-y-12">
      <Suspense fallback={<CharacterDetailSkeleton />}>
        <CharacterDetail id={params.id} />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CharacterEpisodes id={params.id} />
        <RelatedCharacters id={params.id} />
      </div>
    </div>
  )
}
