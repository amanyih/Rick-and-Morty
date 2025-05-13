import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Users } from "lucide-react"
import type { Location } from "@/types/location"
import Image from "next/image"

interface LocationCardProps {
  location: Location
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Link href={`/locations/${location.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 aspect-video md:aspect-square">
            <Image
              src="/assets/image/screaminSun.png"
              alt={location.name}
              fill
              className="object-cover bg-primary/10"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex-1">
            <CardContent className="p-4">
              <h3 className="font-bold text-xl truncate">{location.name}</h3>
              <p className="text-lg font-medium text-primary mt-1">{location.type}</p>

              <div className="flex items-center gap-2 mt-4">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{location.dimension}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Location
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {location.residents?.length || 0} Residents
              </Badge>
            </CardFooter>
          </div>
        </div>
      </Card>
    </Link>
  )
}
