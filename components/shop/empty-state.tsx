'use client'

import { PackageSearch } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <Reveal
      immediate
      className="col-span-full flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center"
    >
      <span className="relative grid size-20 place-items-center rounded-full bg-secondary">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-accent/60"
        />
        <PackageSearch
          className="relative size-9 text-primary"
          strokeWidth={1.2}
          aria-hidden="true"
        />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight">
          No products match your filters
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
          Try widening your price range or removing a category — the rest of the
          collection is still waiting for you.
        </p>
      </div>

      <Button onClick={onReset} className="h-10 rounded-full px-5">
        Reset filters
      </Button>
    </Reveal>
  )
}
