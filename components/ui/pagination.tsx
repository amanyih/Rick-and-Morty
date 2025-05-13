"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  totalPages: number
}

export function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page") || "1")

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString())
    return `?${params.toString()}`
  }

  // Generate page numbers to display
  const generatePagination = (currentPage: number, totalPages: number) => {
    // If total pages is 7 or less, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // If current page is among the first 3 pages
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, "...", totalPages]
    }

    // If current page is among the last 3 pages
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }

    // If current page is somewhere in the middle
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
  }

  const pages = generatePagination(currentPage, totalPages)

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex justify-center items-center gap-1 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => router.push(createPageURL(Math.max(1, currentPage - 1)))}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {pages.map((page, i) => (
        <Button
          key={i}
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
          onClick={() => {
            if (typeof page === "number") {
              router.push(createPageURL(page))
            }
          }}
          disabled={page === "..."}
          className={cn("h-8 w-8", page === "..." && "cursor-default")}
        >
          {page === "..." ? <MoreHorizontal className="h-4 w-4" /> : page}
          <span className="sr-only">Page {page}</span>
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={() => router.push(createPageURL(Math.min(totalPages, currentPage + 1)))}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
