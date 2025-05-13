import { ModernHeroSection } from "@/components/hero-section";
import { QuoteSection } from "@/components/quote-section";
import { MainFamilySection } from "@/components/main-family";
import { FeaturedEpisodes } from "@/components/featured-episodes";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton loader for the Main Family section
function MainFamilySkeleton() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="h-full overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Skeleton className="w-32 h-32 rounded-full mb-4" />
                <Skeleton className="h-6 w-32 mb-1" />
                <Skeleton className="h-4 w-20 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      <ModernHeroSection />
      <QuoteSection />
      <Suspense fallback={<MainFamilySkeleton />}>
        <MainFamilySection />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <FeaturedEpisodes />
      </Suspense>
    </div>
  );
}
