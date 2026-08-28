'use client'

import { BedDouble, Check, Coffee, Shirt, ShoppingBag, Wallet, Watch, Wind } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import type { Product, ProductIcon } from '@/lib/home-data'

const productIcons = {
  shirt: Shirt,
  wallet: Wallet,
  scarf: Wind,
  mug: Coffee,
  throw: BedDouble,
  watch: Watch,
} satisfies Record<ProductIcon, typeof Shirt>

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false)
  const Icon = productIcons[product.icon]

  useEffect(() => {
    if (!added) return
    const timer = setTimeout(() => setAdded(false), 1800)
    return () => clearTimeout(timer)
  }, [added])

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div className="relative grid aspect-4/3 w-full place-items-center overflow-hidden bg-secondary">
        <span
          aria-hidden="true"
          className="absolute -right-10 -bottom-12 size-44 rounded-full bg-accent/70 transition-transform duration-500 group-hover:scale-110"
        />
        <Icon
          className="relative size-16 text-primary transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.1}
          aria-hidden="true"
        />
        {product.badge ? (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
          {product.category}
        </span>

        <h3 className="text-base font-semibold tracking-tight text-pretty">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-lg font-semibold tracking-tight tabular-nums">
            {product.price}
          </span>
          <Button
            variant={added ? 'secondary' : 'default'}
            onClick={() => setAdded(true)}
            aria-label={`Add ${product.name} to cart`}
            className="h-10 rounded-full px-4"
          >
            {added ? (
              <>
                <Check className="size-4" strokeWidth={2.25} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="size-4" strokeWidth={1.9} />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  )
}
