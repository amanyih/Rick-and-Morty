"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CharacterCard } from "@/components/character-card";
import { Pagination } from "@/components/ui/pagination";
import type { Character } from "@/types/character";
import { getCharacters } from "@/lib/api/characters";
import { CharacterGridSkeleton } from "./skeletons/character-grid-skeleton";
import { Button } from "@/components/ui/button";
import { Search, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CharacterGrid() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Get the current page from URL params
  const page = Number(searchParams.get("page") || "1");
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const gender = searchParams.get("gender") || "";

  // This effect will run whenever the URL params change
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const result = await getCharacters({
          page,
          filter: {
            name: name || undefined,
            status: status || undefined,
            gender: gender || undefined,
          },
        });

        setCharacters(result.results);
        setTotalPages(result.info.pages);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
        setCharacters([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, name, status, gender]);

  const handleReset = () => {
    router.push(pathname);
  };

  if (loading) {
    return <CharacterGridSkeleton />;
  }

  if (characters.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-6 bg-muted/20 rounded-lg border border-border">
        <div className="relative w-40 h-40">
          <Image
            src="/assets/image/confusedRick.png"
            alt="Confused Rick"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-2 max-w-md">
          <h3 className="text-2xl font-bold">
            No characters found in this dimension
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or exploring a different part of
            the multiverse.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset filters
          </Button>
          <Button onClick={() => router.push(pathname)}>
            <Search className="mr-2 h-4 w-4" />
            Browse all characters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  );
}
