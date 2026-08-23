'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Lock, RotateCcw, ShieldCheck, Tag, Truck, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { AnimatedPrice } from '@/components/cart/animated-price'
import { FREE_SHIPPING_AT, useCart } from '@/components/cart/cart-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/format'

const EASE = [0.22, 1, 0.36, 1] as const

const trustBadges = [
  { icon: Lock, label: 'Secure Checkout' },
  { icon: RotateCcw, label: 'Easy Returns' },
  { icon: ShieldCheck, label: 'Buyer Protection' },
]

export function OrderSummary() {
  const { items, totals, promo, applyPromo, removePromo } = useCart()
  const [code, setCode] = useState('')
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(
    null,
  )

  const isEmpty = items.length === 0
  const remainingForFreeShipping = FREE_SHIPPING_AT - (totals.subtotal - totals.discount)

  const onApply = (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) return
    const result = applyPromo(code)
    setFeedback(result)
    if (result.ok) setCode('')
  }

  return (
    <aside
      aria-labelledby="order-summary-heading"
      className="lg:sticky lg:top-24"
    >
      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <h2
          id="order-summary-heading"
          className="text-lg font-semibold tracking-tight"
        >
          Order Summary
        </h2>

        <dl className="flex flex-col gap-3 text-sm">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Subtotal</dt>
            <dd className="font-medium">
              <AnimatedPrice value={totals.subtotal} />
            </dd>
          </div>

          <AnimatePresence initial={false}>
            {promo ? (
              <motion.div
                key="discount"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="flex items-center justify-between gap-3 text-primary">
                  <dt className="flex items-center gap-1.5">
                    <Tag className="size-3.5" strokeWidth={2} aria-hidden="true" />
                    Discount ({promo.code})
                  </dt>
                  <dd className="font-medium tabular-nums">
                    {`-${formatCurrency(totals.discount)}`}
                  </dd>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Estimated shipping</dt>
            <dd className="font-medium tabular-nums">
              {totals.shipping === 0 ? (
                <span className="text-primary">Free</span>
              ) : (
                formatCurrency(totals.shipping)
              )}
            </dd>
          </div>

          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Estimated tax</dt>
            <dd className="font-medium">
              <AnimatedPrice value={totals.tax} />
            </dd>
          </div>
        </dl>

        {!isEmpty && remainingForFreeShipping > 0 ? (
          <p className="flex items-start gap-2 rounded-xl bg-secondary/70 px-3.5 py-3 text-xs leading-relaxed text-muted-foreground">
            <Truck
              className="mt-px size-4 shrink-0 text-primary"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>
              {`Add ${formatCurrency(remainingForFreeShipping)} more to qualify for free shipping.`}
            </span>
          </p>
        ) : null}

        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-base font-semibold tracking-tight">Total</span>
          <AnimatedPrice
            value={totals.total}
            className="text-xl font-semibold tracking-tight"
          />
        </div>

        <form onSubmit={onApply} className="flex flex-col gap-2">
          <label
            htmlFor="promo-code"
            className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase"
          >
            Promo code
          </label>
          <div className="flex items-center gap-2">
            <Input
              id="promo-code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setFeedback(null)
              }}
              placeholder="Enter code"
              autoComplete="off"
              className="h-11 rounded-full px-4"
            />
            <Button
              type="submit"
              variant="outline"
              disabled={!code.trim()}
              className="h-11 shrink-0 rounded-full px-5"
            >
              Apply
            </Button>
          </div>

          <AnimatePresence initial={false} mode="wait">
            {promo ? (
              <motion.p
                key="applied"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.24, ease: EASE }}
                className="flex items-center gap-1.5 text-xs text-primary"
              >
                <Tag className="size-3.5" strokeWidth={2} aria-hidden="true" />
                {`${promo.code} applied`}
                <button
                  type="button"
                  onClick={() => {
                    removePromo()
                    setFeedback(null)
                  }}
                  aria-label="Remove promo code"
                  className="ml-0.5 grid size-4 place-items-center rounded-full text-muted-foreground transition-colors hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <X className="size-3" strokeWidth={2.25} />
                </button>
              </motion.p>
            ) : feedback && !feedback.ok ? (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.24, ease: EASE }}
                role="status"
                className="text-xs text-destructive"
              >
                {feedback.message}
              </motion.p>
            ) : (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24, ease: EASE }}
                className="text-xs text-muted-foreground"
              >
                Try AMANA10 for 10% off your first order.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        {isEmpty ? (
          <Button disabled className="h-12 w-full rounded-full text-[15px]">
            Proceed to Checkout
          </Button>
        ) : (
          <Button
            nativeButton={false}
            render={<Link href="/checkout" />}
            className="h-12 w-full rounded-full text-[15px]"
          >
            Proceed to Checkout
          </Button>
        )}

        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {trustBadges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Icon
                className="size-3.5 text-primary"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
