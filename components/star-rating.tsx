import { Star } from 'lucide-react'

import { cn } from '@/lib/utils'

export function StarRating({
  rating,
  className,
  size = 14,
}: {
  rating: number
  className?: string
  size?: number
}) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          width={size}
          height={size}
          aria-hidden="true"
          className={cn(
            'shrink-0',
            star <= Math.round(rating)
              ? 'fill-primary text-primary'
              : 'fill-transparent text-border',
          )}
        />
      ))}
      <span className="sr-only">{`Rated ${rating} out of 5`}</span>
    </span>
  )
}
