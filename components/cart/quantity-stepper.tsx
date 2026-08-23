'use client'

import { Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'

import { MAX_QUANTITY } from '@/components/cart/cart-provider'

export function QuantityStepper({
  quantity,
  label,
  onChange,
}: {
  quantity: number
  label: string
  onChange: (next: number) => void
}) {
  const [draft, setDraft] = useState(String(quantity))

  // Keep the visible input in step with external changes (+/- buttons, reset).
  useEffect(() => setDraft(String(quantity)), [quantity])

  const commit = (raw: string) => {
    const parsed = Number.parseInt(raw, 10)
    if (Number.isNaN(parsed)) {
      setDraft(String(quantity))
      return
    }
    onChange(Math.max(1, Math.min(MAX_QUANTITY, parsed)))
  }

  const buttonClass =
    'grid size-9 place-items-center text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40'

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card">
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        disabled={quantity <= 1}
        aria-label={`Decrease quantity of ${label}`}
        className={`${buttonClass} rounded-l-full`}
      >
        <Minus className="size-4" strokeWidth={2} />
      </button>

      <input
        type="text"
        inputMode="numeric"
        value={draft}
        aria-label={`Quantity of ${label}`}
        onChange={(e) => setDraft(e.target.value.replace(/[^0-9]/g, ''))}
        onBlur={(e) => commit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            commit(e.currentTarget.value)
            e.currentTarget.blur()
          }
        }}
        className="h-9 w-10 border-x border-border bg-transparent text-center text-sm font-medium tabular-nums outline-none focus-visible:bg-accent/40"
      />

      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={quantity >= MAX_QUANTITY}
        aria-label={`Increase quantity of ${label}`}
        className={`${buttonClass} rounded-r-full`}
      >
        <Plus className="size-4" strokeWidth={2} />
      </button>
    </div>
  )
}
