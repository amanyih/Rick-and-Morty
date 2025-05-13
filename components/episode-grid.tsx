"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EpisodeCard } from "@/components/episode-card";
import { Pagination } from "@/components/ui/pagination";
import type { Episode } from "@/types/episode";
import { getEpisodes } from "@/lib/api/episodes";
import { EpisodeGridSkeleton } from "./skeletons/episode-grid-skeleton";
import { Button } from "@/components/ui/button";
import { Search, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function EpisodeGrid() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Get the current page from URL params
  const page = Number(searchParams.get("page") || "1");
  const name = searchParams.get("name") || "";
  const episode = searchParams.get("episode") || "";

  // This effect will run whenever the URL params change
  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      try {
        const result = await getEpisodes({
          page,
          filter: {
            name: name || undefined,
            episode: episode || undefined,
          },
        });

        setEpisodes(result.results);
        setTotalPages(result.info.pages);
      } catch (error) {
        console.error("Failed to fetch episodes:", error);
        setEpisodes([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [page, name, episode]);

  const handleReset = () => {
    router.push(pathname);
  };

  if (loading) {
    return <EpisodeGridSkeleton />;
  }

  if (episodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-6 bg-muted/20 rounded-lg border border-border">
        <div className="relative w-40 h-40">
          <Image
            src="/assets/image/madMorty.png"
            alt="Mad Morty"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-2 max-w-md">
          <h3 className="text-2xl font-bold">
            No episodes found on this channel
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or check out a different
            interdimensional cable channel.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset filters
          </Button>
          <Button onClick={() => router.push(pathname)}>
            <Search className="mr-2 h-4 w-4" />
            Browse all episodes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  );
}
