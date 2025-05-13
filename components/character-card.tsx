import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SpaceIcon as Alien, UserIcon as Male, UserIcon as Female, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Character } from "@/types/character"

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  const statusColor =
    {
      Alive: "bg-green-500",
      Dead: "bg-red-500",
      unknown: "bg-gray-500",
    }[character.status] || "bg-gray-500"

  const genderIcon = {
    Male: <Male className="h-4 w-4" />,
    Female: <Female className="h-4 w-4" />,
    unknown: <HelpCircle className="h-4 w-4" />,
    Genderless: <HelpCircle className="h-4 w-4" />,
  }[character.gender] || <HelpCircle className="h-4 w-4" />

  return (
    <Link href={`/characters/${character.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
        <div className="relative aspect-square">
          <Image
            src={character.image || "/placeholder.svg"}
            alt={character.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-xl truncate">{character.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className={cn("h-3 w-3 rounded-full", statusColor)} />
            <span className="text-sm">{character.status}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <Badge variant="outline" className="flex items-center gap-1">
            <Alien className="h-3 w-3" />
            {character.species}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            {genderIcon}
            {character.gender}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}
