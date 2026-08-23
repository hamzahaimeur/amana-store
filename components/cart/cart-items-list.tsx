'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { CartItemRow } from '@/components/cart/cart-item-row'
import { useCart } from '@/components/cart/cart-provider'
import { Button } from '@/components/ui/button'

const EASE = [0.22, 1, 0.36, 1] as const

export function CartItemsList() {
  const { items, itemCount, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <section aria-labelledby="cart-items-heading" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h2 id="cart-items-heading" className="text-lg font-semibold tracking-tight">
          Items{' '}
          <span className="text-muted-foreground tabular-nums">({itemCount})</span>
        </h2>
        <Button
          variant="ghost"
          onClick={clearCart}
          className="h-9 rounded-full px-3 text-sm text-muted-foreground hover:text-destructive"
        >
          Clear cart
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card px-5 sm:px-6">
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.22, ease: EASE },
                height: { duration: 0.34, ease: EASE },
                layout: { duration: 0.34, ease: EASE },
              }}
              className="overflow-hidden"
            >
              <div
                className={
                  index === 0 ? undefined : 'border-t border-border'
                }
              >
                <CartItemRow
                  item={item}
                  onQuantityChange={(quantity) =>
                    updateQuantity(item.key, quantity)
                  }
                  onRemove={() => removeItem(item.key)}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
