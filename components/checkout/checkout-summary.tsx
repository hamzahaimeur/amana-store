'use client'

import { Lock, RotateCcw, ShieldCheck, Tag } from 'lucide-react'

import { useCart } from '@/components/cart/cart-provider'
import { formatCurrency } from '@/lib/format'

const trustBadges = [
  { icon: Lock, label: 'Secure Checkout' },
  { icon: RotateCcw, label: 'Easy Returns' },
  { icon: ShieldCheck, label: 'Buyer Protection' },
]

export function CheckoutSummary() {
  const { items, totals, promo } = useCart()

  return (
    <aside aria-labelledby="checkout-summary-heading" className="lg:sticky lg:top-24">
      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <h2
          id="checkout-summary-heading"
          className="text-lg font-semibold tracking-tight"
        >
          Order Summary
        </h2>

        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.key} className="flex items-start justify-between gap-3 text-sm">
              <span className="min-w-0">
                <span className="block truncate font-medium">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  {item.variant ? `${item.variant} · ` : ''}Qty {item.quantity}
                </span>
              </span>
              <span className="shrink-0 font-medium tabular-nums">
                {formatCurrency(item.unitPrice * item.quantity)}
              </span>
            </li>
          ))}
        </ul>

        <dl className="flex flex-col gap-3 border-t border-border pt-4 text-sm">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Subtotal</dt>
            <dd className="font-medium tabular-nums">{formatCurrency(totals.subtotal)}</dd>
          </div>

          {promo ? (
            <div className="flex items-center justify-between gap-3 text-primary">
              <dt className="flex items-center gap-1.5">
                <Tag className="size-3.5" strokeWidth={2} aria-hidden="true" />
                Discount ({promo.code})
              </dt>
              <dd className="font-medium tabular-nums">{`-${formatCurrency(totals.discount)}`}</dd>
            </div>
          ) : null}

          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Shipping</dt>
            <dd className="font-medium tabular-nums">
              {totals.shipping === 0 ? (
                <span className="text-primary">Free</span>
              ) : (
                formatCurrency(totals.shipping)
              )}
            </dd>
          </div>

          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Tax</dt>
            <dd className="font-medium tabular-nums">{formatCurrency(totals.tax)}</dd>
          </div>
        </dl>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-base font-semibold tracking-tight">Total</span>
          <span className="text-xl font-semibold tracking-tight tabular-nums">
            {formatCurrency(totals.total)}
          </span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-border pt-4">
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
