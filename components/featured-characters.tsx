import { CharacterCard } from "@/components/character-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getFeaturedCharacters } from "@/lib/api/characters"

export async function FeaturedCharacters() {
  const characters = await getFeaturedCharacters()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Featured Characters</h2>
        <Button asChild variant="outline">
          <Link href="/characters">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  )
}
