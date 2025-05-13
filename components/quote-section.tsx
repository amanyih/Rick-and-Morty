"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function QuoteSection() {
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Try to get a Rick and Morty quote
        const rickAndMortyQuotes = [
          "Wubba Lubba Dub Dub!",
          "I'm Pickle Rick!",
          "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV.",
          "Sometimes science is more art than science.",
          "What, so everyone's supposed to sleep every single night now?",
          "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.",
          "I don't get it, and I don't need to.",
          "I'm sorry, but your opinion means very little to me.",
          "Life is effort and I'll stop when I die!",
          "Get your shit together, get it all together and put it in a backpack, all your shit, so it's together.",
        ];

        setQuote(
          rickAndMortyQuotes[
            Math.floor(Math.random() * rickAndMortyQuotes.length)
          ]
        );
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        setQuote("Wubba Lubba Dub Dub!");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-primary/5 border-primary/20 overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            {loading ? (
              <div className="h-6 w-3/4 bg-muted animate-pulse rounded-md" />
            ) : (
              <p className="text-2xl md:text-3xl font-medium italic">
                "{quote}"
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
