'use client'

import { useId } from 'react'

/** Dual-thumb price range control built on two overlaid native range inputs. */
export function PriceRange({
  min,
  max,
  value,
  onChange,
}: {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}) {
  const id = useId()
  const [low, high] = value
  const span = max - min || 1
  const leftPct = ((low - min) / span) * 100
  const rightPct = ((high - min) / span) * 100

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="rounded-lg border border-border bg-card px-2.5 py-1 font-medium tabular-nums">
          ${low}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
        <span className="rounded-lg border border-border bg-card px-2.5 py-1 font-medium tabular-nums">
          ${high}
        </span>
      </div>

      <div className="relative h-5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-secondary"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-primary"
          style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
        />

        <label className="sr-only" htmlFor={`${id}-min`}>
          Minimum price
        </label>
        <input
          id={`${id}-min`}
          type="range"
          min={min}
          max={max}
          step={1}
          value={low}
          onChange={(e) => onChange([Math.min(Number(e.target.value), high - 1), high])}
          className="range-thumb absolute inset-0 h-5 w-full appearance-none bg-transparent"
        />

        <label className="sr-only" htmlFor={`${id}-max`}>
          Maximum price
        </label>
        <input
          id={`${id}-max`}
          type="range"
          min={min}
          max={max}
          step={1}
          value={high}
          onChange={(e) => onChange([low, Math.max(Number(e.target.value), low + 1)])}
          className="range-thumb absolute inset-0 h-5 w-full appearance-none bg-transparent"
        />
      </div>
    </div>
  )
}
