import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SpaceIcon as Alien, UserIcon as Male, UserIcon as Female, HelpCircle } from "lucide-react"
import type { Character } from "@/types/character"
import { cn } from "@/lib/utils"

interface AlternateCharacterCardProps {
  character: Character
}

export function AlternateCharacterCard({ character }: AlternateCharacterCardProps) {
  const statusColor =
    {
      Alive: "bg-green-500/20 hover:bg-green-500/30",
      Dead: "bg-red-500/20 hover:bg-red-500/30",
      unknown: "bg-gray-500/20 hover:bg-gray-500/30",
    }[character.status] || "bg-gray-500/20 hover:bg-gray-500/30"

  const genderIcon = {
    Male: <Male className="h-4 w-4" />,
    Female: <Female className="h-4 w-4" />,
    unknown: <HelpCircle className="h-4 w-4" />,
    Genderless: <HelpCircle className="h-4 w-4" />,
  }[character.gender] || <HelpCircle className="h-4 w-4" />

  return (
    <Link href={`/characters/${character.id}`}>
      <Card className={cn("transition-colors", statusColor)}>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg text-center mb-2">{character.name}</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Alien className="h-4 w-4" />
              <span className="text-sm">{character.species}</span>
            </div>
            <div className="flex items-center gap-1">
              {genderIcon}
              <span className="text-sm">{character.gender}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
