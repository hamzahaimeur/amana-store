import { BedDouble, Coffee, Shirt, Wallet, Watch, Wind } from 'lucide-react'

import type { ProductIcon } from '@/lib/home-data'
import { cn } from '@/lib/utils'

/** Mirrors the icon treatment used by the product card's image area. */
const productIcons = {
  shirt: Shirt,
  wallet: Wallet,
  scarf: Wind,
  mug: Coffee,
  throw: BedDouble,
  watch: Watch,
} satisfies Record<ProductIcon, typeof Shirt>

export function ProductThumb({
  icon,
  className,
}: {
  icon: ProductIcon
  className?: string
}) {
  const Icon = productIcons[icon]

  return (
    <div
      className={cn(
        'relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-xl bg-secondary sm:size-24',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -right-5 -bottom-6 size-20 rounded-full bg-accent/70"
      />
      <Icon
        className="relative size-8 text-primary sm:size-9"
        strokeWidth={1.1}
        aria-hidden="true"
      />
    </div>
  )
}
