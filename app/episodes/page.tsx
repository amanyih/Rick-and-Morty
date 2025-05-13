"use client";
import { Suspense } from "react";
import { EpisodeGridSkeleton } from "@/components/skeletons/episode-grid-skeleton";
import dynamic from "next/dynamic";

const EpisodeFilters = dynamic(() => import("@/components/episode-filters"), {
  ssr: false,
});
const EpisodeGrid = dynamic(() => import("@/components/episode-grid"), {
  ssr: false,
});

export default function EpisodesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Episodes</h1>
      </div>

      <Suspense
        fallback={<div className="h-20 bg-muted animate-pulse rounded-md" />}
      >
        <EpisodeFilters />
      </Suspense>

      <Suspense fallback={<EpisodeGridSkeleton />}>
        <EpisodeGrid />
      </Suspense>
    </div>
  );
}
