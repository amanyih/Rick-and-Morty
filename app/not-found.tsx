import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">
      <div className="relative w-64 h-64">
        <Image src="/assets/image/confusedRick.png" alt="Confused Rick" fill className="object-contain" />
      </div>
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold">Dimension Not Found</h2>
      <p className="text-xl text-muted-foreground max-w-md">
        Looks like you've traveled to a dimension that doesn't exist in our multiverse.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return to Home Dimension</Link>
      </Button>
    </div>
  )
}
