"use client";
import CharacterFilters from "@/components/character-filters";
import { Suspense } from "react";
import { CharacterGridSkeleton } from "@/components/skeletons/character-grid-skeleton";
import dynamic from "next/dynamic";

const CharacterGrid = dynamic(() => import("@/components/character-grid"), {
  ssr: false,
});

export default function CharactersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Characters</h1>
      </div>

      <Suspense
        fallback={<div className="h-20 bg-muted animate-pulse rounded-md" />}
      >
        <CharacterFilters />
      </Suspense>

      <Suspense fallback={<CharacterGridSkeleton />}>
        <CharacterGrid />
      </Suspense>
    </div>
  );
}
