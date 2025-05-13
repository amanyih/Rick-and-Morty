"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

export default function EpisodeFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const [episode, setEpisode] = useState(searchParams.get("episode") || "");

  const debouncedName = useDebounce(name, 500);
  const debouncedEpisode = useDebounce(episode, 500);

  // Apply filters when search inputs are debounced
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedName) {
      params.set("name", debouncedName);
    } else {
      params.delete("name");
    }

    if (debouncedEpisode) {
      params.set("episode", debouncedEpisode);
    } else {
      params.delete("episode");
    }

    // Reset to page 1 when filters change
    params.delete("page");

    // Use window.history.pushState to update the URL without triggering a navigation
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    // Then trigger a router.replace to update the UI without changing the URL again
    router.replace(newUrl, { scroll: false });
  }, [debouncedName, debouncedEpisode, router, searchParams, pathname]);

  const handleReset = () => {
    setName("");
    setEpisode("");
    router.push(pathname);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Search by name..."
                  className="pl-8"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="episode" className="text-sm font-medium">
                Episode Code
              </label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="episode"
                  placeholder="e.g. S01E01"
                  className="pl-8"
                  value={episode}
                  onChange={(e) => setEpisode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="button" variant="outline" onClick={handleReset}>
              <X className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
