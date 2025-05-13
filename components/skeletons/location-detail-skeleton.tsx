import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function LocationDetailSkeleton() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-64 md:h-auto" />

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-6 w-1/3" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
