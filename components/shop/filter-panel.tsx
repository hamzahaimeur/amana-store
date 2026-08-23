'use client'

import { Check } from 'lucide-react'

import { PriceRange } from '@/components/shop/price-range'
import { Button } from '@/components/ui/button'
import {
  priceBounds,
  productCategories,
  type ProductCategory,
} from '@/lib/products-data'
import { cn } from '@/lib/utils'

export type Filters = {
  categories: ProductCategory[]
  price: [number, number]
}

export function FilterPanel({
  filters,
  onChange,
  counts,
}: {
  filters: Filters
  onChange: (next: Filters) => void
  counts: Record<ProductCategory, number>
}) {
  const toggleCategory = (category: ProductCategory) => {
    const active = filters.categories.includes(category)
    onChange({
      ...filters,
      categories: active
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category],
    })
  }

  const isDefault =
    filters.categories.length === 0 &&
    filters.price[0] === priceBounds.min &&
    filters.price[1] === priceBounds.max

  return (
    <div className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          Category
        </legend>
        {productCategories.map((category) => {
          const checked = filters.categories.includes(category)
          return (
            <label
              key={category}
              className="group flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleCategory(category)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  'grid size-5 shrink-0 place-items-center rounded-md border transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-ring/50',
                  checked
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card group-hover:border-primary/40',
                )}
              >
                {checked ? <Check className="size-3.5" strokeWidth={3} /> : null}
              </span>
              <span
                className={cn(
                  'flex-1 transition-colors',
                  checked ? 'font-medium text-foreground' : 'text-muted-foreground',
                )}
              >
                {category}
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">
                {counts[category]}
              </span>
            </label>
          )
        })}
      </fieldset>

      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          Price range
        </h3>
        <PriceRange
          min={priceBounds.min}
          max={priceBounds.max}
          value={filters.price}
          onChange={(price) => onChange({ ...filters, price })}
        />
      </div>

      <Button
        variant="outline"
        disabled={isDefault}
        onClick={() =>
          onChange({ categories: [], price: [priceBounds.min, priceBounds.max] })
        }
        className="h-10 rounded-full"
      >
        Clear all filters
      </Button>
    </div>
  )
}
