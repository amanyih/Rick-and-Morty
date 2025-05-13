"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");

  // Create a new URLSearchParams object to avoid mutating the original
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Generate page numbers to display
  const generatePagination = (currentPage: number, totalPages: number) => {
    // If total pages is 7 or less, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If current page is among the first 3 pages
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    // If current page is among the last 3 pages
    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // If current page is somewhere in the middle
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = generatePagination(currentPage, totalPages);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mx-auto flex w-full justify-center" aria-label="pagination">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
          />
        </PaginationItem>

        {pages.map((page, i) => {
          if (page === "...") {
            return (
              <PaginationItem key={`ellipsis-${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={createPageURL(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  href: string;
} & React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  href,
  ...props
}: PaginationLinkProps) => (
  <a
    href={href}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "default" : "outline",
        size: "icon",
      }),
      "h-8 w-8",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

type PaginationButtonProps = {
  disabled?: boolean;
  href: string;
} & React.ComponentProps<"a">;

const PaginationPrevious = ({
  className,
  disabled,
  href,
  ...props
}: PaginationButtonProps) => {
  if (disabled) {
    return (
      <span
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "icon",
          }),
          "h-8 w-8 opacity-50 cursor-not-allowed",
          className
        )}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label="Go to previous page"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "icon",
        }),
        "h-8 w-8",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous page</span>
    </a>
  );
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  disabled,
  href,
  ...props
}: PaginationButtonProps) => {
  if (disabled) {
    return (
      <span
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "icon",
          }),
          "h-8 w-8 opacity-50 cursor-not-allowed",
          className
        )}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label="Go to next page"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "icon",
        }),
        "h-8 w-8",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next page</span>
    </a>
  );
};
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-8 w-8 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
