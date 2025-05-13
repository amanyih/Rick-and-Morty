"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function ModernHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/characters?name=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-primary/10">
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/assets/image/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{currentDate}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Explore the <span className="text-primary">Multiverse</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground max-w-md">
                Your portal to the infinite dimensions of Rick and Morty
              </p>
            </motion.div>

            <form
              onSubmit={handleSearch}
              className="flex w-full max-w-md gap-2"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search characters, episodes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 pr-4"
                />
              </div>
              <Button type="submit" size="lg">
                Search
              </Button>
            </form>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => router.push("/characters")}
              >
                Characters
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/episodes")}
              >
                Episodes
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/locations")}
              >
                Locations
              </Button>
            </div>
          </div>

          <motion.div
            className="flex-1 relative h-[300px] md:h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-primary/20 portal-spin" />
            <Image
              src="/assets/image/rick3.png"
              alt="Rick Sanchez"
              width={400}
              height={400}
              className="object-contain z-10 relative"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
