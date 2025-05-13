import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Film, Users } from "lucide-react"
import type { Episode } from "@/types/episode"
import Image from "next/image"

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 aspect-video md:aspect-square">
            <Image
              src="/assets/image/background.jpg"
              alt={episode.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex-1">
            <CardContent className="p-4">
              <h3 className="font-bold text-xl truncate">{episode.name}</h3>
              <p className="text-lg font-medium text-primary mt-1">{episode.episode}</p>

              <div className="flex items-center gap-2 mt-4">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{episode.air_date}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Badge variant="outline" className="flex items-center gap-1">
                <Film className="h-3 w-3" />
                Episode
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {episode.characters?.length || 0} Characters
              </Badge>
            </CardFooter>
          </div>
        </div>
      </Card>
    </Link>
  )
}
