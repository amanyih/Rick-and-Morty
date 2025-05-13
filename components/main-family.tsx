import { getMainFamilyCharacters } from "@/lib/api/characters";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Helper function to get character role based on ID
function getCharacterRole(id: string): string {
  const roles: Record<string, string> = {
    "1": "Grandfather",
    "2": "Grandson",
    "3": "Granddaughter",
    "4": "Daughter",
    "5": "Son-in-law",
    "6": "Alien",
  };
  return roles[id] || "Family Member";
}

// Helper function to get character description based on ID
function getCharacterDescription(id: string, name: string): string {
  const descriptions: Record<string, string> = {
    "1": "A genius scientist who's the smartest being in the universe with a drinking problem.",
    "2": "Rick's good-hearted but easily distressed teenage grandson who is frequently dragged into Rick's adventures.",
    "3": "Morty's older sister who occasionally joins Rick and Morty on their adventures.",
    "4": "Rick's daughter and a horse surgeon with abandonment issues caused by her father.",
    "5": "Beth's insecure husband who disapproves of Rick's influence on his family.",
    "6": "An alien princess from the Abadango Cluster.",
  };
  return (
    descriptions[id] ||
    `${name} is a character from the Rick and Morty universe.`
  );
}

export async function MainFamilySection() {
  const familyMembers = await getMainFamilyCharacters();

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">The Smith Family</h2>
        <Button asChild variant="outline">
          <Link href="/characters">View All Characters</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {familyMembers.length > 0
          ? familyMembers.map((member) => (
              <Link key={member.id} href={`/characters/${member.id}`}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-32 h-32 mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <Badge variant="secondary" className="mb-3">
                        {getCharacterRole(member.id)}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {getCharacterDescription(member.id, member.name)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : // Skeleton loading state
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="h-full overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Skeleton className="w-32 h-32 rounded-full mb-4" />
                    <Skeleton className="h-6 w-32 mb-1" />
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </section>
  );
}
