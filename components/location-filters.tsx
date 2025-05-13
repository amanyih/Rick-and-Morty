"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

export function LocationFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [dimension, setDimension] = useState(
    searchParams.get("dimension") || ""
  );

  const debouncedName = useDebounce(name, 500);
  const debouncedType = useDebounce(type, 500);
  const debouncedDimension = useDebounce(dimension, 500);

  // Apply filters when search inputs are debounced
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedName) {
      params.set("name", debouncedName);
    } else {
      params.delete("name");
    }

    if (debouncedType) {
      params.set("type", debouncedType);
    } else {
      params.delete("type");
    }

    if (debouncedDimension) {
      params.set("dimension", debouncedDimension);
    } else {
      params.delete("dimension");
    }

    // Reset to page 1 when filters change
    params.delete("page");

    // Use window.history.pushState to update the URL without triggering a navigation
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    // Then trigger a router.replace to update the UI without changing the URL again
    router.replace(newUrl, { scroll: false });
  }, [
    debouncedName,
    debouncedType,
    debouncedDimension,
    router,
    searchParams,
    pathname,
  ]);

  const handleReset = () => {
    setName("");
    setType("");
    setDimension("");
    router.push(pathname);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <label htmlFor="type" className="text-sm font-medium">
                Type
              </label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="type"
                  placeholder="e.g. Planet, Space station..."
                  className="pl-8"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="dimension" className="text-sm font-medium">
                Dimension
              </label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="dimension"
                  placeholder="e.g. C-137"
                  className="pl-8"
                  value={dimension}
                  onChange={(e) => setDimension(e.target.value)}
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
