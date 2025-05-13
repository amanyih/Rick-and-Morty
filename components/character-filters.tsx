"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

export function CharacterFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [gender, setGender] = useState(searchParams.get("gender") || "");

  const debouncedName = useDebounce(name, 500);

  // Apply filters when dropdown values change or search input is debounced
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedName) {
      params.set("name", debouncedName);
    } else {
      params.delete("name");
    }

    if (status && status !== "any") {
      params.set("status", status);
    } else {
      params.delete("status");
    }

    if (gender && gender !== "any") {
      params.set("gender", gender);
    } else {
      params.delete("gender");
    }

    // Reset to page 1 when filters change
    params.delete("page");

    // Use window.history.pushState to update the URL without triggering a navigation
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    // Then trigger a router.replace to update the UI without changing the URL again
    router.replace(newUrl, { scroll: false });
  }, [debouncedName, status, gender, router, searchParams, pathname]);

  const handleReset = () => {
    setName("");
    setStatus("");
    setGender("");
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
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Any status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any status</SelectItem>
                  <SelectItem value="alive">Alive</SelectItem>
                  <SelectItem value="dead">Dead</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="gender" className="text-sm font-medium">
                Gender
              </label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Any gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any gender</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="genderless">Genderless</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
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
