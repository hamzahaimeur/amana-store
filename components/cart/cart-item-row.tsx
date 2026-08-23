'use client'

import { Trash2 } from 'lucide-react'

import { AnimatedPrice } from '@/components/cart/animated-price'
import type { CartItem } from '@/components/cart/cart-provider'
import { ProductThumb } from '@/components/cart/product-thumb'
import { QuantityStepper } from '@/components/cart/quantity-stepper'
import { formatCurrency } from '@/lib/format'

export function CartItemRow({
  item,
  onQuantityChange,
  onRemove,
}: {
  item: CartItem
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}) {
  return (
    <div className="flex gap-4 py-5 sm:gap-5">
      <ProductThumb icon={item.icon} />

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              {item.category}
            </span>
            <h3 className="text-[15px] font-semibold tracking-tight text-pretty">
              {item.name}
            </h3>
            {item.variant ? (
              <span className="text-sm text-muted-foreground">
                Size: <span className="text-foreground">{item.variant}</span>
              </span>
            ) : null}
            <span className="text-sm text-muted-foreground tabular-nums">
              {formatCurrency(item.unitPrice)} each
            </span>
          </div>

          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${item.name} from cart`}
            className="grid size-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95"
          >
            <Trash2 className="size-[17px]" strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <QuantityStepper
            quantity={item.quantity}
            label={item.name}
            onChange={onQuantityChange}
          />
          <AnimatedPrice
            value={item.unitPrice * item.quantity}
            className="text-base font-semibold tracking-tight"
          />
        </div>
      </div>
    </div>
  )
}
