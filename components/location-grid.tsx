"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocationCard } from "@/components/location-card";
import { Pagination } from "@/components/ui/pagination";
import type { Location } from "@/types/location";
import { getLocations } from "@/lib/api/locations";
import { LocationGridSkeleton } from "./skeletons/location-grid-skeleton";
import { Button } from "@/components/ui/button";
import { Search, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LocationGrid() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [locations, setLocations] = useState<Location[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Get the current page from URL params
  const page = Number(searchParams.get("page") || "1");
  const name = searchParams.get("name") || "";
  const type = searchParams.get("type") || "";
  const dimension = searchParams.get("dimension") || "";

  // This effect will run whenever the URL params change
  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const result = await getLocations({
          page,
          filter: {
            name: name || undefined,
            type: type || undefined,
            dimension: dimension || undefined,
          },
        });

        setLocations(result.results);
        setTotalPages(result.info.pages);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
        setLocations([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [page, name, type, dimension]);

  const handleReset = () => {
    router.push(pathname);
  };

  if (loading) {
    return <LocationGridSkeleton />;
  }

  if (locations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-6 bg-muted/20 rounded-lg border border-border">
        <div className="relative w-40 h-40">
          <Image
            src="/assets/image/screaminSun.png"
            alt="Screaming Sun"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-2 max-w-md">
          <h3 className="text-2xl font-bold">
            No locations found in this dimension
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or exploring a different corner
            of the multiverse.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset filters
          </Button>
          <Button onClick={() => router.push(pathname)}>
            <Search className="mr-2 h-4 w-4" />
            Browse all locations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  );
}
