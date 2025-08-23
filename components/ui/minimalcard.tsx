import * as React from "react"
import Image from "next/image" // Keep this for potential future use

import { cn } from "@/lib/utils"

const MinimalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl p-4 bg-neutral-900 border border-neutral-800 transition-colors hover:bg-neutral-800/80",
      "shadow-md", // A simpler shadow that fits your style
      className
    )}
    {...props}
  >
    {children}
  </div>
))
MinimalCard.displayName = "MinimalCard"

const MinimalCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string }
>(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-48 w-full rounded-xl mb-4 overflow-hidden", // Consistent with card styles
      className
    )}
    {...props}
  >
    {/* Using Next.js's Image component is recommended for optimization */}
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-xl"
    />
  </div>
))
MinimalCardImage.displayName = "MinimalCardImage"

const MinimalCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-white px-1", className)}
    {...props}
  />
))
MinimalCardTitle.displayName = "MinimalCardTitle"

const MinimalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-400 pb-2 px-1", className)}
    {...props}
  />
))
MinimalCardDescription.displayName = "MinimalCardDescription"

const MinimalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-2", className)} {...props} />
))
MinimalCardContent.displayName = "MinimalCardContent"

const MinimalCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0", className)}
    {...props}
  />
))
MinimalCardFooter.displayName = "MinimalCardFooter"

export {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
}