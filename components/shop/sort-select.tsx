'use client'

import { ChevronDown } from 'lucide-react'
import { useId } from 'react'

import { sortOptions, type SortValue } from '@/lib/products-data'

export function SortSelect({
  value,
  onChange,
}: {
  value: SortValue
  onChange: (value: SortValue) => void
}) {
  const id = useId()

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="shrink-0 text-sm text-muted-foreground">
        Sort
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value as SortValue)}
          className="h-10 appearance-none rounded-full border border-border bg-card pr-9 pl-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
          strokeWidth={1.9}
        />
      </div>
    </div>
  )
}
