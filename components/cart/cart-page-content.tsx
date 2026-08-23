'use client'

import { CartItemsList } from '@/components/cart/cart-items-list'
import { useCart } from '@/components/cart/cart-provider'
import { EmptyCart } from '@/components/cart/empty-cart'
import { OrderSummary } from '@/components/cart/order-summary'
import { Reveal } from '@/components/motion/reveal'

export function CartPageContent() {
  const { items } = useCart()
  const isEmpty = items.length === 0

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
          <Reveal immediate>
            <CartItemsList />
          </Reveal>
          <Reveal immediate delay={0.1}>
            <OrderSummary />
          </Reveal>
        </div>
      )}
    </div>
  )
}
